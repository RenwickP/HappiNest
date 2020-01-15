import _housesService from "../services/HousesService.js";
import express from "express";
import { Authorize } from "../middleware/authorize.js";

//PUBLIC
export default class HousesController {
  constructor() {
    this.router = express
      .Router()
      .use(Authorize.authenticated)

      // .get('', this.getAll) for testing
      // .get('/:id', this.getHousesByProfile)
      // .post("", this.create)
      // .put('/:id', this.edit)
      // .delete("/:id", this.delete)
      .use(this.defaultRoute);
  }
  defaultRoute(req, res, next) {
    next({ status: 404, message: "No Such Route" });
  }
}
