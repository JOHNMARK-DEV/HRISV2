<template>
  <div class="page-wrapper p-4 container">
    <div class="accordion" id="accordion">
      <div class="d-flex justify-content-between">
        <h6 class="mb-0 text-uppercase">Position Services</h6>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
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
                <tr v-for="position in data">
                  <td>{{ position.code }}</td>
                  <td>{{ position.name }}</td>
                  <td>Active</td>
                  <td class="action">
                    <button
                      type="button"
                      class="btn-sm btn-secondary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      @click="
                        handleUpdate(position.code, position.name, position.id)
                      "
                    >
                      update
                    </button>
                    |
                    <button
                      type="button"
                      class="btn-sm btn-danger"
                      @click="handleDelete(position.id)"
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
            ADD POSITION SERVICES
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <PositionServices
            :codeValue="codeValue"
            :nameValue="nameValue"
            :idValue="idValue"
            :onload="onload"
          ></PositionServices>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PositionServices from "../../../components/forms/PositionService.vue";
import Setup_PositionServices from "../../../services/online/Setup/Setup_PositionServices";
export default {
  mounted() {
    this.onload();
  },
  data() {
    return {
      data: [],
      codeValue: "",
      nameValue: "",
      idValue: "",
    };
  },
  components: {
    PositionServices: PositionServices,
  },
  methods: {
    async onload() {
      this.data = await Setup_PositionServices.getAll();
    },
    handleAdd() {
      this.codeValue = "";
      this.nameValue = "";
      this.idValue = "";
    },
    handleUpdate(code, name, id) {
      this.codeValue = code;
      this.nameValue = name;
      this.idValue = id;
    },
    async handleDelete(id) {
      const res = await Setup_PositionServices.handleDelete([id]);
      this.onload();
    },
  },
};
</script>

<style scoped></style>
