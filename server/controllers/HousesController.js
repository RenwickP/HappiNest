import _housesService from "../services/HousesService.js";
import express from "express";
import { Authorize } from "../middleware/authorize.js";
import _usersService from "../services/UsersService"

//PUBLIC
export default class HousesController {
  constructor() {
    this.router = express
      .Router()

      .use(Authorize.authenticated)
      .get("/:id", this.getHouseById)
      .post("", this.createHouse)
      .post("/:id", this.addRoom)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
      .use(this.defaultRoute);
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: "No Such Route" });
  }

  async getHouseById(req, res, next) {
    try {
      let data = await _housesService.getHouseById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async createHouse(req, res, next) {
    try {
      let data = await _housesService.createHouse(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
  async addRoom(req, res, next) {
    try {
      let data = await _usersService.getByEmail(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await _housesService.edit(req.params.id, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await _housesService.delete(req.params.id, req.body);
      return res.send("Successfully deleted");
    } catch (error) {
      next(error);
    }
  }
}
