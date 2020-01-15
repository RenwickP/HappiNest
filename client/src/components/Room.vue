<template>
  <div class="house">
    <div>
      <h2>{{profileData.name}}</h2>
    </div>
    <div>{{profileData.avatar}}</div>
  </div>
</template>

<script>
export default {
  name: "room",
  props: "profileData",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>