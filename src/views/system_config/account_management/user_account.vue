<template>
    <createUserModal ref="userModal" />
    <div class="page-wrapper p-4">
        <div class="accordion" id="accordion">
            <div class="d-flex justify-content-between">
                <h6 class="mb-0 text-uppercase">User Account</h6> 
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Add
                </button>
            </div>
            <hr />

            <div class="card">
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="table" class="table table-striped table-bordered" style="width:100%">
                            <thead>
                                <tr>
                                    <th>First name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="data in datas" :key="data.id">
                                    <td>{{ data.first_name }}</td>
                                    <td>{{ data.middle_name }}</td>
                                    <td>{{ data.last_name }}</td>
                                    <td>{{ data.username }}</td>
                                    <td>{{ data.department_id }}</td>
                                    <td>{{ data.position_id }}</td>
                                </tr>
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
import createUserModal from '../account_management//modal/create_user_account.vue'
import $ from 'jquery';
import SupabaseService from '../../../services/supabase/supabaseService'
export default {
    data() {
        return {
            datas: [],
        };
    },
    components: {
        createUserModal
    },
    mounted() {
        $(document).ready(function () {
            $('#table').DataTable();
        });
        this.fetchTodos()
    },

    methods: {
        async fetchTodos() {
            const supabaseService = new SupabaseService();
            try {
                this.datas = await supabaseService.fetchTableData('tbl_users');
                console.log('this.datas', this.datas)
            } catch (error) {
                console.error(error);
            }
        },
    }
}
</script>