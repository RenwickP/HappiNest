<template>
  <div class="register container-fluid">
    <div class="row house">
      <div class="arrow-up"></div>
      <div class="col">
        <div class="body">
          <div id="register-form">
            <form @submit.prevent="register">
              <input type="text" v-model="newUser.name" placeholder="name" />
              <input type="email" v-model="newUser.email" placeholder="email" />
              <input
                type="password"
                v-model="newUser.password"
                placeholder="password"
              />
            </form>
          </div>
        </div>
      </div>
      <div class="col d-flex justify-content-center">
        <router-link class="links" :to="{ name: 'landing' }">Home</router-link>
        <p>|</p>
        <router-link class="links" :to="{ name: 'login' }">Login</router-link>
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

.links {
  color: black;
  margin-left: 5px;
  margin-right: 5px;
}

#register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
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
.body {
  position: relative;
  margin: auto;
  width: 0;
  margin-top: -1px;
  border: 155px solid rgb(142, 184, 231);
  height: 370px;
}
</style>
