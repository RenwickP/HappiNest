<template>
  <div class="login container-fluid">
    <div class="row house">
      <div class="col">
        <div class="arrow-up"></div>
      </div>
      <div class="col">
        <div class="body">
          <div id="login-form">
            <form @submit.prevent="loginUser">
              <input type="email" v-model="creds.email" placeholder="email" />
              <input type="password" v-model="creds.password" placeholder="password" />
              <button type="submit" class="btn btn-primary">Login</button>
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
      this.$router.push({ name: "houses", params: { profileId: profile._id } });
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
.house {
  display: flex;
}
#login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.arrow-up {
  margin: auto;
  margin-top: 75px;
  width: 0;
  height: 0;
  border-left: 173px solid transparent;
  border-right: 173px solid transparent;
  border-bottom: 140px solid rgb(142, 184, 231);
}
.links {
  color: black;
  margin-left: 5px;
  margin-right: 5px;
}
.body {
  position: relative;
  margin: auto;
  width: 0;
  margin-top: -1px;
  border: 155px solid rgb(142, 184, 231);
}

#footer-nav {
  justify-content: center;
  margin-top: 5px;
}
</style>
