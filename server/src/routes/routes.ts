import { Router } from "express";
import dashboardRoutes from "./dashboardRoutes";

const router = Router();

router.use("/dashboard", dashboardRoutes); // http://localhost:3000/dashboard

export default router;
