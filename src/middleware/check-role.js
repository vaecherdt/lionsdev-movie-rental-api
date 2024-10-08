function checkRole(requiredRole) {
    return (req, res, next) => {
      if (!req.user) {
        return res.status(401).json({ error: "Unauthorized" });
      }
  
      if (req.user.permission_type !== requiredRole) {
        return res.status(403).json({ error: "Forbidden: You do not have the required permission" });
      }
  
      next();
    };
  };

  export default checkRole;