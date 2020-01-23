<template id="modal-template">
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <h3>Add Roommate</h3>
          <button type="button" class="btn-close" @click="close">
            <span aria-hidden="true">&times;</span>
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          <form class="new-roommate-form" @submit.prevent="addRoommate(), close()">
            <div id="name-form">
              <input
                required
                id="email"
                type="text"
                placeholder="Enter roommate email"
                v-model="newRoommate.email"
              />
            </div>
            <footer>
              <button type="submit" class="btn btn-success m-1">Submit</button>
              <button type="button" class="btn btn-danger m-1" @click="close">Cancel</button>
            </footer>
          </form>
        </slot>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  data() {
    return {
      newRoommate: {
        email: "",
        houseId: this.$route.params.id
      }
    };
  },
  methods: {
    addRoommate() {
      let roommate = { ...this.newRoommate };
      this.$store.dispatch("addRoommate", roommate);
      this.newRoomate = {
        email: "",
        houseId: this.$route.params.id
      };
    },
    close() {
      this.$emit("close");
    }
  }
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
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 38vh;
  height: 31%;
  top: 20vh;
  left: 9vw;
}
.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}
.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: black;
  justify-content: space-between;
  align-items: baseline;
  height: 9vh;
}
.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}
.modal-body {
  position: relative;
  padding: 20px 10px;
  margin-bottom: 0;
}
.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: black;
  background: transparent;
}
input {
  width: 101%;
}
label {
  margin-bottom: 2pt;
}
textarea {
  width: 100%;
  height: 8vh;
}
#name-form,
#title-form {
  display: flex;
  flex-direction: column;
  margin-bottom: 12pt;
  margin-top: 0;
}
#name-form {
  padding: 7%;
}
footer {
  display: flex;
  justify-content: flex-end;
}
</style>