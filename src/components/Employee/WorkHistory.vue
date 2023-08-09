<template>
    <div class="container-fluid row row-cols-1">
        <div class="m-4">
            <h5>BASIC JOB INFORMATION</h5>
            <div class="col-12  row inputs flex-grow-3 mt-4">
                <div class="row mt-2">
                    <div class="col-2 align-right">
                        <label for="">Position Title<span class="text-danger">*</span></label>
                    </div>
                    <div class="col-5 align-right">
                        <input type="text" v-model="info.philhealth" class="form-control">
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-2 align-right">
                        <label for="">Company Name<span class="text-danger">*</span></label>
                    </div>
                    <div class="col-5 align-right">
                        <input type="text" v-model="info.philhealth" class="form-control">
                    </div>
                </div>
                <div class="row mt-2 ml-2" style="margin-left:3px">
                    <div class="col-2 align-right">
                        <label for="">Duration<span class="text-danger">*</span></label>
                    </div>
                    <div class="col-2 row align-right ml-2">
                        <input type="text" v-model="info.philhealth" class="form-control">
                    </div>
                    <div class="col-2 row align-right ml-2">
                        <input type="text" v-model="info.philhealth" class="form-control">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-2 align-right">
                        <label for="">Duration<span class="text-danger">*</span></label>
                    </div>
                    <div class="col-3 row align-right">
                        <label for="">To</label>
                    </div>
                </div>

                <div class="row mt-2" style="margin-left:3px">
                    <div class="col-2 align-right">
                    </div>
                    <div class="col-2 row align-right ml-2">
                        <input type="text" v-model="info.philhealth" class="form-control">
                    </div>
                    <div class="col-2 row align-right ml-2">
                        <input type="text" v-model="info.philhealth" class="form-control">
                    </div>
                    <div class="col-3 pl-4 form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Default checkbox
                        </label>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-2 align-right">
                        <label for="">Position Title<span class="text-danger">*</span></label>
                    </div>
                    <div class="col-5 align-right">
                        <input type="text" v-model="info.philhealth" class="form-control">
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-2 align-right">
                        <label for="">Position Title<span class="text-danger">*</span></label>
                    </div>
                    <div class="col-5 align-right">
                        <input type="text" v-model="info.philhealth" class="form-control">
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-2 align-right">
                        <label for="">Position Title<span class="text-danger">*</span></label>
                    </div>
                    <div class="col-5 align-right">
                        <input type="text" v-model="info.philhealth" class="form-control">
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-2 align-right">
                        <label for="">Position Title<span class="text-danger">*</span></label>
                    </div>
                    <div class="col-5 align-right">
                        <input type="text" v-model="info.philhealth" class="form-control">
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-2 align-right">
                        <label for="">Position Title<span class="text-danger">*</span></label>
                    </div>
                    <div class="col-5 align-right">
                        <input type="text" v-model="info.philhealth" class="form-control">
                    </div>
                </div>
                <!-- <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Company</label>
                    <select class="form-select" v-model="info.company_id">
                        <option value="1" selected>N/A</option>
                    </select>
                </div>
                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Department</label>
                    <select class="form-select" v-model="info.department_id">
                        <option value="1" selected>N/A</option>
                    </select>
                </div>
                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Job Title</label>
                    <select class="form-select" v-model="info.job_title">
                        <option value="1" selected>N/A</option>
                    </select>
                </div>

                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Employee type</label>
                    <select class="form-select" v-model="info.emp_type_id">
                        <option value="1" selected>N/A</option>
                    </select>
                </div>
                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Immediate Supervisor</label>
                    <select class="form-select" v-model="info.immediate_supervisor_id">
                        <option value="1" selected>N/A</option>
                    </select>
                </div>
                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Designated Workplace</label>
                    <select class="form-select" v-model="info.designated_workplace">
                        <option value="1" selected>N/A</option>
                    </select>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
// SERVICES
import WorkInfoServices_Online from '../../services/online/EmployeeManagement/WorkInfoServices'

import { defineComponent } from "vue";
export default defineComponent({
    data() {
        return {
            info: {
                company_id: 1,
                department_id: 1,
                job_title: 1,
                emp_type_id: 1,
                immediate_supervisor_id: 1,
                designated_workplace: 1,
                status_id: 1,
                user_type_id: 1,
                job_code: 1,
                job_grade_id: 1,
                client_name: 1,
                remarks: 1,
                expected_regularization_date: new Date(),
                regularization_date: new Date(),
                hire_date: new Date(),
            }
        };
    },
    async mounted() {
        await this.onload()
        flatpickr(this.$refs.flatpickrInput1, {
            dateFormat: 'Y-m-d',
        });
        flatpickr(this.$refs.flatpickrInput2, {
            dateFormat: 'Y-m-d',
        });
        flatpickr(this.$refs.flatpickrInput3, {
            dateFormat: 'Y-m-d',
        });

    },
    methods: {

        async onload() {
            this.recordId = this.$store.state.recordId
            if (this.recordId) {
                this.info = await WorkInfoServices_Online.getById(this.recordId)
            }
        },


        async handleSave(parentId) {
            if (import.meta.env.VITE_APP_ENV == 'local') {
                console.log('working')
            } else {
                if (this.recordId > 0) {
                    delete this.info.id
                    let user = await WorkInfoServices_Online.handleUpdate(this.recordId, this.info)
                    if (user) {
                        console.log(user)
                    }
                } else {
                    this.info.emp_id = parentId
                    let user = await WorkInfoServices_Online.handleSave(this.info)
                }
            }
        },

    }
})
</script>
 