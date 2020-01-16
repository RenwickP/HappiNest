<template>
  <div class="houses row">
    <div class="col d-flex flex-column" id="houses-div">
      <div id="add-house-btn">
        <form @submit.prevent="createHouse">
          <input v-model="newHouse.title" id="title" type="text" placeholder="New house name..." />
          <button>
            <i class="fas fa-plus-circle fa-2x"></i>
          </button>
        </form>
      </div>

      <div id="house-icons-row" v-for="house in houses" :key="house._id">
        <i class="fas fa-home fa-3x"></i>
        <h5>{{house.title}}</h5>
      </div>
      <button @click.prevent="logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "houses",
  mounted() {
    this.$store.dispatch(
      "getHousesForProfile",
      this.$store.state.activeProfile.id
    );
    this.$store.dispatch("setActiveProfile", this.$store.state.user._id);
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
    }
  },
  methods: {
    createHouse() {
      debugger;
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
}

.houses {
  height: 100%;
}

#add-house-btn {
  align-self: flex-end;
  margin-right: 15px;
  margin-top: 8px;
}

#house-icons-row {
  margin-top: 5vh;
}
</style>