<template>
  <div class="house">
    <div class="row">
      <div class="col">
        <div id="roommate-name">
          <h4>{{this.profileData.name}}</h4>
        </div>
      </div>
      </div>
    <div class="row">
      <div class="col">
        <div class="avatar-div">
          <img :src="this.profileData.avatar" />
        </div>
      </div>
      <div class="col" id="stats-col">
        <div class="row">
          <div class="col">
            <div class="chore-stat">
              <b>30 CHORES COMPLETED</b>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="chore-stat">
              <b>DISHES TOP CHORE</b>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="chore-stat">
              <b>30 CHORES COMPLETED</b>
            </div>
          </div>
        </div>
      </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "room",
  props: ["profileData"],
  mounted() {
    this.$store.dispatch("getRobo", this.profileData.name);
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    robo() {
      return this.$store.state.robos;
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
}
h4 {
  color: white;
  text-transform: uppercase;
  padding: 2%;
}
#roommate-name {
  background-color: var(--primary);
  margin-top: -1px;
}
.house {
  background-color: white;
}
.avatar-div {
  margin-top: -35px;
  margin-bottom: 10pt;
}
.chore-stat {
  background-color: var(--warning);
  padding: 1%;
  margin: 1.3%;
  border: 1px solid black;
}
#stats-col {
  padding-left: 7%;
  padding-right: 7%;
  margin-bottom: 10px;
}
img {
  height: 30vh;
}
</style>