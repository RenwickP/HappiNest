<template>
  <div class="demo-house container-fluid">
    <div class="row">
      <div class="col">
        <div v-if="fakeHouse" id="house-title" class="d-flex">
          <h2>{{ fakeHouse }}</h2>
          <i @click="showModal" class="fas fa-user-plus fa-2x" id="person-icon"></i>
        </div>
      </div>
    </div>
    <div class="row" id="anchor-row">
      <div class="col">
        <div class="fake-rooms" v-for="fakeRoom in fakeRooms" :key="fakeRoom">
          <h3 id="room-name">{{ fakeRoom }}</h3>
          <img :src="roboURL + fakeRoom" />
          <div class="dropdown">
            <button
              @click="registerAlert"
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Log A Chore</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="roommate-form">
          <form v-if="!fakeHouse" @submit.prevent="createHouseName">
            <input type="text" placeholder="Name Your House" v-model="newHouse" />
          </form>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col d-flex justify-content-center login">
        <router-link class="links" :to="{ name: 'login' }" id="login">Login</router-link>
        <p id="link-line">|</p>
        <router-link class="links" :to="{ name: 'register' }" id="register">Register</router-link>
      </div>
    </div>
    <landing-modal v-show="isModalVisible" @close="closeModal" />
  </div>
</template>

//NOTE PASS USERID INTO EDIT & DELETE HOUSE FUNCTION

<script>
import LandingModal from "../components/LandingModal.vue";
import Swal from "sweetalert2";

export default {
  name: "demohouse",
  components: {
    LandingModal
  },
  data() {
    return {
      newHouse: "",
      isModalVisible: false,
      roboURL: "https://robohash.org/"
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    createHouseName() {
      let house = this.newHouse;
      this.$store.dispatch("createHouseName", house);
      this.newHouse = "";
    },
    registerAlert() {
      const Swal = require("sweetalert2");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must create an account to use this button.",
        showCancelButton: true,
        cancelButtonText: "Nevermind",
        confirmButtonText: "Register"
      }).then(result => {
        if (result.value) {
          this.$router.push({ name: "register" });
        }
      });
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
  overflow: hidden;
}
.container-fluid {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  -webkit-overflow-scrolling: touch;
}
.container-fluid::-webkit-scrollbar {
  width: 1em;
}
.container-fluid::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

.container-fluid::-webkit-scrollbar {
  width: 15px;
  background-color: #f5f5f5;
}

.container-fluid::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: var(--warning);
}
i {
  color: white;
}
#icons-div {
  margin: 1%;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: fixed;
}
#person-icon {
  margin-bottom: 10px;
}
#house-icon {
  margin-left: -8px;
  margin-bottom: 10px;
  margin-top: 5px;
}
#icon-col {
  padding-right: 0;
  padding-left: 0;
}
#anchor-row {
  position: relative;
}
h2 {
  color: white;
  text-transform: uppercase;
}
#house-title {
  justify-content: space-between;
  margin: 2%;
  margin-top: 25px;
}
.links {
  color: white;
  margin-left: 5px;
  margin-right: 5px;
  text-shadow: 2px 2px black;
}
#link-line {
  color: white;
  text-shadow: 2px 2px black;
}
.roommate-form {
  margin: 2%;
  margin-top: 25px;
}
.login {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
.fake-rooms {
  background-color: white;
  margin-top: 5%;
}
button {
  color: black;
  background-color: var(--warning);
  border-color: black;
  margin-top: 10px;
  padding: 3%;
  width: 100%;
}
#dropdownMenuButton {
  border-radius: 0;
}
#room-name {
  padding-top: 4%;
}
</style>
