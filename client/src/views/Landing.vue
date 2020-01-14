<template>
  <div class="landing container-fluid">
    <div class="row house">
      <div class="col">
        <div class="arrow-up"></div>
      </div>
      <div class="col">
        <div class="body">
          <h4 v-if="fakeHouse">{{ fakeHouse }}</h4>
          <div class="fake-rooms" v-for="fakeRoom in fakeRooms" :key="fakeRoom">
            {{ fakeRoom }}
          </div>
          <div class="roommate-form">
            <form v-if="!fakeHouse" @submit.prevent="createHouseName">
              <input
                type="text"
                placeholder="Name Your House"
                v-model="newHouse"
              />
            </form>
            <form @submit.prevent="createFakeRoom">
              <input
                type="text"
                placeholder="Add A Roommate"
                v-model="roommateName"
              />
            </form>
          </div>
        </div>
      </div>
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
export default {
  name: "landing",
  data() {
    return {
      roommateName: "",
      newHouse: ""
    };
  },
  methods: {
    createFakeRoom() {
      let room = this.roommateName;
      this.$store.dispatch("createFakeRoom", room);
      this.roommateName = "";
    },
    createHouseName() {
      let house = this.newHouse;
      this.$store.dispatch("createHouseName", house);
      this.newHouse = "";
    }
  },
  computed: {
    fakeRooms() {
      return this.$store.state.fakeRooms;
    },
    fakeHouse() {
      return this.$store.state.fakeHouse;
    }
  }
};
</script>

<style scoped>
.roommate-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h4 {
  color: white;
}
.fake-rooms {
  color: white;
}
.house {
  display: flex;
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
.login {
  margin-top: 5px;
  justify-content: center;
}
.btn-primary {
  background-color: transparent;
  color: black;
  border: none;
}
</style>
