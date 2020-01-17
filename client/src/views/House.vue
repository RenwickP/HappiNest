<template>
  <div class="house container-fluid">
    <div class="row house">
      <div class="col">
        <div class="arrow-up"></div>
      </div>
      <div class="col">
        <div class="body">
          <div id="title-div">
            <h3>{{activeHouse}}</h3>
          </div>
          <div class="row">
            <div class="col" v-for="profile in profiles" :key="profile.id">
              <room :profileData="profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

//NOTE PASS USERID INTO EDIT & DELETE HOUSE FUNCTION

<script>
import room from "@/components/Room";

export default {
  name: "house",
  components: {
    room
  },

  mounted() {
    this.$store.dispatch("setActiveHouse", this.$route.params.houseId);
    console.log("from house", this.$route.params.houseId);
  },
  data() {
    return {};
  },
  methods: {},
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

<style>
.roommate-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h4 {
  color: white;
}

h3 {
  width: 75vw;
  color: white;
}
#title-div {
  position: absolute;
  top: -143px;
  left: -141px;
}
#room-name {
  background-color: white;
  width: 72vw;
  height: 20vh;
  top: -90px;
  right: -135px;
  text-align: center;
  display: flex;
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
  margin: auto;
  width: 0;
  margin-top: -1px;
  border: 155px solid rgb(142, 184, 231);
  position: relative;
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