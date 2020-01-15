<template>
  <div class="houses row">
    <div class="col d-flex flex-column" id="houses-div">
      <div id="add-house-btn">
        <button @click="logout">Logout</button>
        <i class="fas fa-plus-circle fa-2x"></i>
      </div>

      <div id="house-icons-row">
        <i class="fas fa-home fa-3x"></i>
        <h5>Name of House</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "houses",
  mounted() {
    // this.$store.dispatch("getHouses");
  },
  data() {
    return {
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
    addHouse() {
      this.$store.dispatch("addHouse", this.newHouse);
      this.newHouse = { title: "", description: "" };
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