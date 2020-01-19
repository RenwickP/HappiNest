<template>
  <div class="house">
    <div class="row">
      <div class="col">{{ this.profileData.name }}</div>
    </div>
    <div class="row">
      <div class="col">
        <img :src="this.profileData.avatar" />
      </div>

      <div class="col">
        <div class="row">
          <div class="col">STAT LINE</div>
        </div>
        <div class="row">
          <div class="col">STAT</div>
        </div>
        <div class="row">
          <div class="col">STAT</div>
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

<style></style>
