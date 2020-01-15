import _housesService from "../services/HousesService.js";
import express from "express";
import { Authorize } from "../middleware/authorize.js";

//PUBLIC
export default class HousesController {
  constructor() {
    this.router = express
      .Router()
      .use(Authorize.authenticated)
      // .get("/:id", this.getHousesByProfile);
      .post("", this.createHouse);
    // .put('/:id', this.edit)
    // .delete("/:id", this.delete)
    // .use(this.defaultRoute);
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: "No Such Route" });
  }

  // async getHousesByProfile (req, res, next) {
  //   try {
  //     let data = await _housesService.getHousesByProfile(req.params.id, req.session.uid);
  //     return res.send(data);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  async createHouse(req, res, next) {
    try {
      let data = await _housesService.createHouse(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  // async edit(req, res, next) {
  //   try {
  //     let data = await _boardService.edit(req.params.id, req.session.uid, req.body)
  //     return res.send(data)
  //   } catch (error) { next(error) }
  // }

  // async delete(req, res, next) {
  //   try {
  //     await _boardService.delete(req.params.id, req.session.uid);
  //     return res.send("Successfully deleted");
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}
