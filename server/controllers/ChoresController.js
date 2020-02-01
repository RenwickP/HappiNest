import _choresService from "../services/ChoresService.js";
import express from "express";
import { Authorize } from "../middleware/authorize.js";

//PUBLIC
export default class ChoresController {
  constructor() {
    this.router = express
      .Router()
      .use(Authorize.authenticated)
      .post("", this.createChore)
      .use(this.defaultRoute);
  }
  defaultRoute(req, res, next) {
    next({ status: 404, message: "No Such Route" });
  }
  async createChore(req, res, next) {
    try {
      let chore = await _choresService.createChore(req.body);
      return res.send(chore);
    } catch (error) {
      next(error);
    }
  }
}
