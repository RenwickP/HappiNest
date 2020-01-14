<template>
  <div class="login container-fluid">
    <div class="row house">
      <div class="col">
        <div class="arrow-up"></div>
      </div>
      <div class="col">
        <div class="body">
          <form @submit.prevent="loginUser">
            <input type="email" v-model="creds.email" placeholder="email" />
            <input type="password" v-model="creds.password" placeholder="password" />
            <button class="btn btn-success" type="submit">Login</button>
          </form>
          <div class="action">
            <router-link :to="{name: 'register'}">
              <p>No account? Click here to Register</p>
            </router-link>
          </div>
        </div>
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
      this.$router.push({ name: "boards" });
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
</style>