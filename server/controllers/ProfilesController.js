import _profilesService from "../services/ProfilesService";
import express from "express";
import { Authorize } from "../middleware/authorize.js";
import _housesService from "../services/HousesService";

//PUBLIC
export default class ProfilesController {
  constructor() {
    this.router = express
      .Router()
      .use(Authorize.authenticated)
      .get("", this.getByUserId)
      .get("/:id/houses", this.getHousesByProfileId)
      .get("/:id/rels", this.getRelsByProfile)
      .put("/:id", this.edit)
      .use(this.defaultRoute);
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: "No Such Route" });
  }
  async getByUserId(req, res, next) {
    try {
      let data = await _profilesService.getByUserId(req.session.uid);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getHousesByProfileId(req, res, next) {
    try {
      // let data = await _housesService.getHousesByProfileId(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getRelsByProfile(req, res, next) {
    try {
      let data = await _housesService.getRelsByProfile(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await _profilesService.edit(
        req.params.id,
        req.session.uid,
        req.body
      );
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
