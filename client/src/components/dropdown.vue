<template>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Dropdown button
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">Do Laundry</a>
      <a class="dropdown-item" href="#">Mow Lawn</a>
      <a class="dropdown-item" href="#">Wash Dishes</a>
      <a class="dropdown-item" href="#">Clean Bathroom</a>
      <a class="dropdown-item" href="#">Wash Dishes</a>
      <a class="dropdown-item" href="#">Clean Room</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  props: ["dropData"]
};
</script>

<style></style>
