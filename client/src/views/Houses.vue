<template>
  <div class="houses container-fluid" id="houses-div">
    <div class="row">
      <div class="col">
        <div id="add-house-btn">
          <form @submit.prevent="createHouse">
            <input v-model="newHouse.title" id="title" type="text" placeholder="New house name..." />
            <button>
              <i class="fas fa-plus-circle fa-2x"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="row row2">
      <div class="col-12" v-for="house in houses" :key="house._id">
        <div id="house-icons-row">
          <i class="fas fa-home fa-3x"></i>
          <router-link :to="{ name: 'house', params: { houseId: house._id } }" id="router">
            <h4>{{house.houseId.title}}</h4>
          </router-link>
        </div>
      </div>
    </div>
    <div class="row row2">
      <div class="col">
        <button @click.prevent="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "houses",
  mounted() {
    this.$store.dispatch("setActiveProfile", this.$store.state.user._id);

    // this.$store.dispatch("getHousesForProfile", this.activeProfile._id);
  },
  data() {
    return {
      newHouse: {
        title: "",
        creator: this.$store.state.activeProfile.id
      }
    };
  },
  computed: {
    houses() {
      return this.$store.state.houses;
    },
    activeProfile() {
      return this.$store.state.activeProfile;
    }
  },
  methods: {
    createHouse() {
      let house = { ...this.newHouse };
      this.$store.dispatch("createHouse", house);
      this.newHouse = {
        title: "",
        creator: this.$store.state.activeProfile._id
      };
    },
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style scoped>
#houses-div {
  border-top: 25px solid cornflowerblue;
  border-bottom: 25px solid cornflowerblue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#house-icons-row {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row2 {
  margin: 5%;
}

.houses {
  height: 100%;
}

h4 {
  color: black;
  width: 75vw;
}
</style>
