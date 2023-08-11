<template>
  <form @submit.prevent="handleSubmit">
    <div class="col-12 col-lg-4">
      <label for="first_name" class="form-label">Code</label>
      <input
        type="text"
        class="form-control"
        v-model="positionService.code"
        id="code"
      />
    </div>
    <div class="col-12 col-lg-4">
      <label for="middle_name" class="form-label">Name</label>
      <input
        type="text"
        class="form-control"
        v-model="positionService.name"
        id="name"
      />
    </div>
    <div class="submitbtn">
      <button type="submit" class="btn btn-info" data-bs-dismiss="modal">
        ADD
      </button>
    </div>
  </form>
</template>

<script>
import Setup_PositionServices from "../../services/online/Setup/Setup_PositionServices";
export default {
  props: {
    codeValue: String,
    nameValue: String,
    idValue: Number,
    onload: Function,
  },
  data() {
    return {
      positionService: {
        code: "",
        name: "",
      },
      data: [],
      id: "",
    };
  },
  watch: {
    codeValue(newCode) {
      this.positionService.code = newCode;
    },
    nameValue(newName) {
      this.positionService.name = newName;
    },
    idValue(newId) {
      this.id = newId;
    },
  },
  methods: {
    async handleSubmit() {
      if (!this.positionService.code && !this.positionService.name) {
        alert("Please Fill up all the fields");
        return;
      }
      if (!this.id) {
        const res = await Setup_PositionServices.handleSave(
          this.positionService
        );
      } else {
        const res = await Setup_PositionServices.handleUpdate(
          this.id,
          this.positionService
        );
      }
      this.positionService = {
        code: "",
        name: "",
      };
      this.onload();
    },
  },
};
</script>

<style scoped>
form,
input,
div {
  width: 100%;
}

.submitbtn {
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: end;
}
</style>
