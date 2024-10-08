import jwtService from "../services/jwt-service.js";

function checkToken (req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token not provided or invalid" });
  }

  const token = authHeader.split(" ")[1];

  try {
    req.user = jwtService.verifyAccessToken(token);

    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid or expired token" });
  }
};

export default checkToken;