<template>
  <div class="house container-fluid">
    <div class="row">
      <div class="col">
        <div id="title-div">
          <h1>{{activeHouse.title}}</h1>
        </div>
      </div>
    </div>
    <div class="row" id="anchor-row">
      <div class="col">
        <div v-for="profile in profiles" :key="profile._id">
          <room :profileData="profile" />
        </div>
      </div>
      <div class="col-2" id="icon-col">
        <div id="icons-div">
          <i @click="showModal" class="fas fa-user-plus fa-2x" id="person-icon"></i>
          <router-link :to="{name: 'houses'}">
            <i class="fas fa-home fa-2x" id="house-icon"></i>
          </router-link>
        </div>
      </div>
      <modal v-show="isModalVisible" @close="closeModal" />
    </div>
    <stats />
  </div>
</template>

//NOTE PASS USERID INTO EDIT & DELETE HOUSE FUNCTION

<script>
import room from "@/components/Room";
import modal from "../components/Modal";
import stats from "../components/Stats";

export default {
  name: "house",
  components: {
    room,
    modal,
    stats
  },

  mounted() {
    this.$store.dispatch("setActiveHouse", this.$route.params.houseId);
    if (this.$store.state.profiles.length < 2) {
      this.$store.dispatch("getProfiles", this.$route.params.houseId);
    }
    this.$store.dispatch("getChores", this.$route.params.houseId);
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  computed: {
    activeHouse() {
      return this.$store.state.activeHouse;
    },
    profiles() {
      return this.$store.state.profiles;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lato:400,700,400italic");
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
  --font-family-sans-serif: "Lato", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  overflow: hidden;
}
h1 {
  color: white;
  text-transform: uppercase;
  margin: 5%;
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
</style>