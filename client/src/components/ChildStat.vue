<template>
  <div class="child-stat">
    <div id="chore-count">{{ choreCounter }}</div>
  </div>
</template>

<script>
export default {
  name: "ChildStat",
  props: ["childStatData"],
  data() {
    return { count: 0, profileId: this.childStatData._id };
  },
  computed: {
    choreCounter() {
      this.count = 0;
      let houseChores = this.$store.state.houseChores;
      for (let i = 0; i < houseChores.length; i++) {
        let profile = houseChores[i];
        if (this.profileId == profile.profileId) {
          for (let prop in profile) {
            if (typeof profile[prop] === "number") {
              this.count += profile[prop];
            }
          }
          break;
        }
      }
      return this.count;
    }
  }
};
</script>

<style scoped>
#chore-count {
  margin-left: 5pt;
}
</style>
