<template>
  <div class="login container-fluid">
    <div class="row">
      <div class="col">
        <h2>HappiNest</h2>
      </div>
    </div>
    <div class="row house">
      <div class="col">
        <div class="arrow-up"></div>
      </div>
      <div class="col">
        <div class="body">
          <img src="@/assets/HappiNest1.png" width="200" height="200" />
          <div id="login-form">
            <form @submit.prevent="loginUser">
              <input type="text" v-model="creds.email" placeholder="username" />
              <input type="password" v-model="creds.password" placeholder="password" />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col d-flex" id="footer-nav">
        <router-link class="links" :to="{ name: 'landing' }">Home</router-link>
        <p>|</p>
        <router-link class="links" :to="{ name: 'register' }">Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router/index.js";

export default {
  name: "login",
  data() {
    return {
      creds: {
        email: "",
        password: ""
      }
    };
  },
  beforeCreate() {
    if (this.$store.state.user._id) {
      this.$router.push({ name: "houses" });
    }
  },
  methods: {
    loginUser() {
      this.$store.dispatch("login", this.creds);
    }
  }
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
.house {
  display: flex;
}
#login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -63px;
  left: -95px;
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
  position: relative;
  margin: auto;
  width: 0;
  margin-top: -1px;
  border: 155px solid var(--primary);
  height: 310px;
}
p {
  color: white;
}
#footer-nav {
  justify-content: center;
  margin-top: 5px;
}
button {
  width: 100%;
}
h2 {
  color: white;
  padding: 5%;
  margin-top: 20pt;
}
img {
  position: absolute;
  bottom: 69px;
  left: -99px;
}
</style>
