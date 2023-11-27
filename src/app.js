import express from "express";
const app = express();

app.use(express.json());

app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/repairs", repairsRoutes);

export default app;
