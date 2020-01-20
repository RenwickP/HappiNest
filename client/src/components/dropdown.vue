<template>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >Log A Chore</button>
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
  --font-family-sans-serif: "Lato", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
}
button {
  color: black;
  background-color: var(--warning);
  border-color: black;
}
#dropdownMenuButton {
  width: 98%;
  border-radius: 0;
}
</style>
