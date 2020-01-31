import Axios from "axios";
import _store from "./store/index";
import Swal from "sweetalert2";

let baseUrl = location.host.includes("localhost") ? "//localhost:3000/" : "/";

let auth = Axios.create({
  baseURL: baseUrl + "account/",
  timeout: 3000,
  withCredentials: true
});

export default class AuthService {
  static async Login(creds) {
    try {
      let res = await auth.post("login", creds);
      let profile = await auth.get("" + res.data._id + "/profiles");
      _store.commit("setActiveProfile", profile);
      return res.data;
    } catch (e) {
      throw new Error(
        `[login failed] : ${
        !e.response ? "No response from server" : e.response.data.error
        }`
      );
    }
  }
  static async Register(creds) {
    try {
      let res = await auth.post("register", creds);
      let profile = await auth.get("" + res.data._id + "/profiles");
      _store.commit("setActiveProfile", profile);
      _store.commit("createProfile", profile);
      return res.data;
    } catch (e) {
      if (e.response.data.error.message.includes("E11000")) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email already in use."
        })
        throw new Error(
          `[registration failed] : ${
          !e.response ? "Error" : e.response.data.error
          }`
        )
      }
      else if (e.response.data.error.message.includes("character")) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Password must be at least 6 characters long."
        })
        throw new Error(
          `[registration failed] : ${
          !e.response ? "Error" : e.response.data.error
          }`
        )
      }
      else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Registration failed."
        })
        throw new Error(
          `[registration failed] : ${
          !e.response ? "Error" : e.response.data.error
          }`
        )
      }
    }
  }
  static async Logout() {
    try {
      let res = await auth.delete("logout");
      return true;
    } catch (e) {
      throw new Error(
        `[logout failed] : ${
        !e.response ? "No response from server" : e.response.data.error
        }`
      );
    }
  }
  static async Authenticate() {
    try {
      let res = await auth.get("authenticate");
      return res.data;
    } catch (e) {
      console.warn(
        `[Authentication failed] : ${
        !e.response ? "No response from server" : e.response.data.error
        }`
      );
    }
  }
}
