import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user-routes.js";
import movieRoutes from "./routes/movie-routes.js";
import rentedRoutes from "./routes/rented-routes.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/rented", rentedRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
