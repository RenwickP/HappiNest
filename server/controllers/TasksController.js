import _housesService from "../services/HousesService.js";
import express from "express";
import { Authorize } from "../middleware/authorize.js";

//PUBLIC
export default class HousesController {
  constructor() {
    this.router = express
      .Router()
      .use(Authorize.authenticated)
      .post("", this.createTask)
      .delete("/:id", this.deleteTask)
      .use(this.defaultRoute);
  }

}