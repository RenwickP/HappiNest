<template>
  <div class="houses container-fluid" id="houses-div">
    <div class="row" id="header-row">
      <div class="col">
        <div class="d-flex" id="header">
          <h4>HappiNest</h4>
          <form @submit.prevent="createHouse">
            <input v-model="newHouse.title" id="title" type="text" placeholder="New House Title" />
            <button>
              <i class="fas fa-plus-circle fa-1x"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="row justify-content-center" id="houses-row">
      <div class="col-5" v-for="house in houses" :key="house._id">
        <div id="house-icons-row">
          <router-link :to="{ name: 'house', params: { id: house.houseId.id } }" id="router">
            <i class="fas fa-home fa-3x"></i>
            <h5>{{house.houseId.title}}</h5>
          </router-link>
        </div>
      </div>
    </div>
    <div class="row" id="footer-row">
      <div class="col">
        <button @click="showModal">Change Username</button>
        <button @click.prevent="logout" class="m-3">Logout</button>
      </div>
    </div>
    <edit-modal v-show="isModalVisible" @close="closeModal" />
  </div>
</template>

<script>
import EditModal from "../components/EditModal";
export default {
  name: "houses",
  components: {
    EditModal
  },
  mounted() {
    this.$store.dispatch("setActiveProfile", this.$store.state.user._id);
  },
  data() {
    return {
      isModalVisible: false,
      newHouse: {
        title: ""
      }
    };
  },
  computed: {
    houses() {
      return this.$store.state.houses;
    }
  },
  methods: {
    async createHouse() {
      let house = { ...this.newHouse };
      house.creator = this.$store.state.activeProfile._id;
      this.$store.dispatch("createHouse", house);
      this.newHouse = {
        title: "",
        creator: this.$store.state.activeProfile._id
      };
    },
    logout() {
      this.$store.dispatch("logout");
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
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
h4 {
  color: white;
}
input {
  width: 40vw;
}
#header {
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 16px;
}
#header-row {
  background-color: var(--primary);
}
#footer-row {
  background-color: var(--primary);
  position: fixed;
  left: 0;
  bottom: 0;
  width: -webkit-fill-available;
}
#houses-row {
  padding: 3%;
  padding-top: 4vh;
}
#router {
  color: black;
}
.col-5 {
  background-color: white;
  border: 2px solid black;
  padding-top: 4%;
  margin: 1%;
}
</style>
