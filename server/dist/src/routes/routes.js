"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardRoutes_1 = __importDefault(require("./dashboardRoutes"));
const router = (0, express_1.Router)();
router.use("/dashboard", dashboardRoutes_1.default); // http://localhost:3000/dashboard
exports.default = router;
