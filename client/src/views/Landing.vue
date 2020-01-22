<template>
  <div class="landing container-fluid">
    <div class="row">
      <div class="col">
        <h2>HappiNest</h2>
      </div>
    </div>
    <div class="row house">
      <div class="col">
        <div class="arrow-up"></div>
      </div>
    </div>
    <div class="row">
      <div class="col" id="relative-body-col">
        <div class="body">
          <img src="@/assets/HappiNest1.png" width="200" height="200" />
          <router-link :to="{ name: 'demohouse' }" id="demohouse">
            <div>
              <button type="button">Add roommates!</button>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col d-flex login">
        <router-link class="links" :to="{ name: 'login' }" id="login"
          >Login</router-link
        >
        <p>|</p>
        <router-link class="links" :to="{ name: 'register' }" id="register"
          >Register</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router/index.js";
import LandingModal from "../components/LandingModal.vue";

export default {
  name: "landing"
};
</script>

<style scoped>
template {
  --blue: #375a7f;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #e74c3c;
  --orange: #fd7e14;
  --yellow: #f39c12;
  --green: #00bc8c;
  --teal: #20c997;
  --cyan: #3498db;
  --white: #fff;
  --gray: #999;
  --gray-dark: #303030;
  --primary: #375a7f;
  --secondary: #444;
  --success: #00bc8c;
  --info: #3498db;
  --warning: #f39c12;
  --danger: #e74c3c;
  --light: #999;
  --dark: #303030;
}
p {
  color: white;
}
.house {
  display: flex;
}
.arrow-up {
  margin: auto;
  margin-top: 30px;
  width: 0;
  height: 0;
  border-left: 173px solid transparent;
  border-right: 173px solid transparent;
  border-bottom: 140px solid var(--primary);
}
.links {
  color: white;
  margin-left: 5px;
  margin-right: 5px;
}
.body {
  margin: auto;
  width: 0;
  margin-top: -1px;
  border: 155px solid var(--primary);
  position: relative;
  height: 310px;
}
.login {
  margin-top: 5px;
  justify-content: center;
}
.btn-primary {
  background-color: transparent;
  color: black;
  border: none;
}
h4 {
  width: 50vw;
  color: white;
  text-transform: uppercase;
}
h2 {
  color: white;
  padding: 5%;
  margin-top: 20pt;
}
button {
  width: 44vw;
  height: 6vh;
  position: absolute;
  top: -50px;
  right: -81px;
}
img {
  position: absolute;
  bottom: 69px;
  left: -99px;
}
</style>
