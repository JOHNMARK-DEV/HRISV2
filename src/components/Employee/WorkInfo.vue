<template>
    <div class="container-fluid row row-cols-1">
        <div class="m-4">
            <h5>BASIC JOB INFORMATION</h5>
            <div class="col-12 row inputs flex-grow-3 ">
                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Company</label>
                    <select class="form-select" v-model="info.company_id">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </div>
                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Department</label>
                    <select class="form-select" v-model="info.department_id">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </div>
                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Job Title</label>
                    <select class="form-select" v-model="info.job_title">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </div>

                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Employee type</label>
                    <select class="form-select" v-model="info.emp_type_id">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </div>
                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Immediate Supervisor</label>
                    <select class="form-select" v-model="info.immediate_supervisor_id">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </div>
                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Designated Workplace</label>
                    <select class="form-select" v-model="info.designated_workplace">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </div>
            </div>
        </div>
        <hr />
        <div class="m-4">
            <h5>EMPLOYEE DETAILS</h5>
            <div class="col-12 row inputs flex-grow-3">
                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Employment Status</label>
                    <select class="form-select" v-model="info.status_id">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </div>
                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">User Type</label>
                    <select class="form-select" v-model="info.user_type_id">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </div>
                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Job Code</label>
                    <select class="form-select" v-model="info.job_code">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </div>

                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Job Grade</label>
                    <select class="form-select" v-model="info.job_grade_id">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </div>
                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Client Name</label>
                    <select class="form-select" v-model="info.client_name">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </div>
                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Billability</label>
                    <select class="form-select" v-model="info.billability_id">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </div>
                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Employee type</label>
                    <input type="text" class="form-control datepicker" v-model="info.hire_date" ref="flatpickrInput1"
                        placeholder="Select a date" />
                </div>
                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Immediate Supervisor</label>
                    <input type="text" class="form-control datepicker" v-model="info.expected_regularization_date" ref="flatpickrInput2"
                        placeholder="Select a date" />
                </div>
                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Designated Workplace</label> 
                    <input type="text" class="form-control datepicker" v-model="info.regularization_date" ref="flatpickrInput3"
                        placeholder="Select a date" />
                </div>
                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Remarks</label> 
                    <input type="text" class="form-control datepicker" v-model="info.remarks"  
                         />
                </div>
            </div>
        </div> 
        <hr />
        <div class="m-4">
            <h5>OTHER INFORMATION</h5>
            <div class="col-12 row inputs flex-grow-3">
                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Biometric ID</label>
                    <input type="text" class="form-control" v-model="info.biometric_id"  />
                </div>
                <div class="col-12 col-lg-4 mb-4">
                    <label class="form-label">Payroll Run Type</label>
                    <select class="form-select" v-model="info.payroll_run_type_id">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </div> 
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
            info: {}
        };
    },
    mounted() {
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
        async handleSave() {
            if (import.meta.env.VITE_APP_ENV == 'local') {
                AuthService_Local.signIn(this.credentials.email, this.credentials.password)
                    .then(response => {
                        if (response.status != 200) {
                            this.errorMessage = response
                        }
                        this.$store.commit('setToken', response.data.token)
                        location.href = '/HRIS/Dashboard'
                    })
                    .catch(err => {
                        alert(err)
                    })
            } else {
                let workInfo = await WorkInfoServices_Online.handleSave(this.info)  
            }
        }
    }
})
</script>
 