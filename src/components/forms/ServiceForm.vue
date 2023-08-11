<template>
  <form @submit.prevent="handleSubmit">
    <div class="col-12 col-lg-4">
      <label for="first_name" class="form-label">Code</label>
      <input
        type="text"
        class="form-control"
        v-model="statusServiceInfo.code"
        id="code"
      />
    </div>
    <div class="col-12 col-lg-4">
      <label for="middle_name" class="form-label">Name</label>
      <input
        type="text"
        class="form-control"
        v-model="statusServiceInfo.name"
        id="name"
      />
    </div>
    <div class="submitbtn">
      <button type="submit" class="btn btn-info" data-bs-dismiss="modal">
        {{ id ? "Update" : "ADD" }}
      </button>
    </div>
  </form>
</template>

<script>
import Setup_EmpstatusServices from "../../services/online/Setup/Setup_EmpstatusServices";
export default {
  props: {
    codeValue: String,
    nameValue: String,
    idValue: Number,
    onload: Function,
  },
  data() {
    return {
      statusServiceInfo: {
        code: "",
        name: "",
      },
      data: [],
      id: "",
    };
  },
  watch: {
    codeValue(newCode) {
      this.statusServiceInfo.code = newCode;
    },
    nameValue(newName) {
      this.statusServiceInfo.name = newName;
    },
    idValue(newId) {
      this.id = newId;
    },
  },
  methods: {
    async handleSubmit() {
      if (!this.statusServiceInfo.code && !this.statusServiceInfo.name) {
        alert("Please Fill up all the fields");
        return;
      }
      if (!this.id) {
        console.log(this.statusServiceInfo);
        const res = await Setup_EmpstatusServices.handleSave(
          this.statusServiceInfo
        );
      } else {
        const res = await Setup_EmpstatusServices.handleUpdate(
          this.id,
          this.statusServiceInfo
        );
      }
      this.statusServiceInfo = {
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
