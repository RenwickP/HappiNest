<template>
  <div class="register container-fluid">
    <div class="row house">
      <div class="arrow-up"></div>
      <div class="col">
        <div class="body">
          <form @submit.prevent="register">
            <input type="text" v-model="newUser.name" placeholder="name" />
            <input type="email" v-model="newUser.email" placeholder="email" />
            <input type="password" v-model="newUser.password" placeholder="password" />
            <button class="btn btn-warning" type="submit">Create Account</button>
          </form>
          <div class="action">
            <router-link :to="{name: 'login'}">
              <p>Already have an account? Click here to Login</p>
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
  name: "register",
  data() {
    return {
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