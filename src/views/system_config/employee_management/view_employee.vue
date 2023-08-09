<template>
    <div class="page-wrapper p-4 container">
        <div class="accordion" id="accordion">
            <div class="d-flex justify-content-between">
                <h6 class="mb-0 text-uppercase">Employee list</h6>
                <button type="button" class="btn btn-primary" @click="this.$router.push('/Employee/create')">
                    Add
                </button>
            </div>
            <hr />

            <div class="card">
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="table" class="table table-striped table-bordered" ref="refTable" style="width:100%">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>First name</th>
                                    <!-- <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th> -->
                                    <!-- <th>Salary</th> -->
                                </tr>
                            </thead>
                            <tbody>
                                <!-- <tr v-for="data in datas" :key="data.id">
                                    <td>{{ data.first_name }}</td>
                                    <td>{{ data.middle_name }}</td>
                                    <td>{{ data.last_name }}</td>
                                    <td>{{ data.username }}</td>
                                    <td>{{ data.department_id }}</td>
                                    <td>{{ data.position_id }}</td>
                                </tr> -->
                            </tbody>
                            <tfoot>

                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// SERVICES
import BasicInfoServices_Online from '../../../services/online/EmployeeManagement/basicInfoServices'

import { ref } from "vue";
import $ from 'jquery';
export default {
    data() {
        return {
            datas: [],
        };
    },

    mounted() {

        // reset selected record
        this.$store.commit('setRecordId', 0)
        
        this.onload()
        const refTable = ref(null)
    },

    methods: {
        async onload() {
            this.datas = await BasicInfoServices_Online.getAll()
            const dataTable = $(this.$refs.refTable).DataTable({
                data: this.datas,
                columns: [
                    { title: 'Action' },
                    { title: 'Name', data: 'name' },
                ],
                columnDefs: [
                    {
                        targets: 0,
                        render: function (data, type, row, meta) {
                            return '<button class="btn btn-sm btn-secondary" data-id="' + row.id + '" >Update</button>';
                        },
                    },
                ],
            });
            const vm = this;
            $(this.$refs.refTable).on('click', 'button', function () {
                const index = dataTable.row($(this).parents('tr')).index();
                if (typeof index !== 'undefined') {
                    vm.selectedIndex(index);

                }
            });
        },

        selectedIndex(index) {
            // GET ID FROM TABLE USING INDEX
            this.$store.commit('setRecordId', this.datas[index].id)
            this.$router.push('/Employee/create')
        }
    }
}
</script>
<style>
td {
    color: black !important;
}
</style>