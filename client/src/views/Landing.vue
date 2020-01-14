<template>
  <div class="landing container-fluid">
    <div class="row house">
      <div class="col">
        <div class="arrow-up"></div>
      </div>
      <div class="col">
        <div class="body"></div>
      </div>
      <div class="col d-flex login">
        <button class="btn btn-primary">Login</button>
        <h3>|</h3>
        <button class="btn btn-primary">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router/index.js";
export default {
  name: "landing",
  data() {
    return {
      loginForm: true,
      creds: {
        email: "",
        password: ""
      },
      newUser: {
        email: "",
        password: "",
        name: ""
      }
    };
  },
  beforeCreate() {
    if (this.$store.state.user._id) {
      this.$router.push({ name: "boards" });
    }
  },
  methods: {
    register() {
      this.$store.dispatch("register", this.newUser);
    },
    loginUser() {
      this.$store.dispatch("login", this.creds);
    }
  }
};
</script>

<style>
.house {
  display: flex;
}
.arrow-up {
  margin: auto;
  margin-top: 75px;
  width: 0;
  height: 0;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
  border-bottom: 150px solid rgb(109, 54, 54);
}
.body {
  position: relative;
  margin: auto;
  width: 0;
  margin-top: -1px;
  border: 130px solid rgb(109, 54, 54);
}
.action {
  cursor: pointer;
}
.login {
  margin-top: 30px;
  justify-content: center;
}
.btn-primary {
  background-color: transparent;
  color: black;
  border: none;
}
</style>