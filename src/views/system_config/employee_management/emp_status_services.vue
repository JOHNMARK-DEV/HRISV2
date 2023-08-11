<template>
  <div class="page-wrapper p-4 container">
    <div class="accordion" id="accordion">
      <div class="d-flex justify-content-between">
        <h6 class="mb-0 text-uppercase">Employee Status Services</h6>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          @click="handleAdd"
        >
          ADD
        </button>
      </div>
      <hr />

      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table
              id="table"
              class="table table-striped table-bordered"
              ref="refTable"
              style="width: 100%"
            >
              <thead>
                <tr>
                  <th>CODE</th>
                  <th>NAME</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in data">
                  <td>{{ item.code }}</td>
                  <td>{{ item.name }}</td>
                  <td>Active</td>
                  <td class="action">
                    <button
                      @click="handleUpdate(item.code, item.name, item.id)"
                      type="button"
                      class="btn-sm btn-secondary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      update
                    </button>
                    |
                    <button
                      type="button"
                      class="btn-sm btn-danger"
                      @click="handleDelete(item.id)"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            {{ idValue ? "Update" : "ADD" }} EMPLOYEE STATUS SERVICES
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <ServiceForm
            :codeValue="codeValue"
            :nameValue="nameValue"
            :idValue="idValue"
            :onload="onload"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceForm from "../../../components/forms/ServiceForm.vue";
import Setup_EmpstatusServices from "../../../services/online/Setup/Setup_EmpstatusServices";

export default {
  mounted() {
    this.onload();
  },
  components: {
    ServiceForm: ServiceForm,
  },
  data() {
    return {
      data: [],
      codeValue: "",
      nameValue: "",
      idValue: "",
    };
  },
  methods: {
    async onload() {
      this.data = await Setup_EmpstatusServices.getAll();
    },
    handleUpdate(code, name, id) {
      console.log(code, name, id);
      this.codeValue = code;
      this.nameValue = name;
      this.idValue = id;
    },
    handleAdd() {
      this.codeValue = "";
      this.nameValue = "";
      this.idValue = "";
    },
    async handleDelete(id) {
      const res = await Setup_EmpstatusServices.handleDelete([id]);
      this.onload();
    },
  },
};
</script>

<style>
thead {
  text-align: center;
}
.action {
  display: flex;
  justify-content: center;
  align-items: center;
  row-gap: 4;
}
</style>
