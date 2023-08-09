<template>
    <div class="container-fluid row">
        <div class="col-md-3 col-sm-12 profilePic">
            <div class="img-container">
                <img src="../../assets/images/avatars/avatar-1.png" width="100%" alt="">
            </div>
            <div class="mt-3">
                <input type="file" name="" id="">
            </div>
        </div>
        <div class="col-md-8 col-sm-12 row">
            <div class="col-12 col-lg-4">
                <label for="first_name" class="form-label">First Name</label>
                <input type="text" class="form-control" v-model="info.first_name" id="first_name">
            </div>
            <div class="col-12 col-lg-4">
                <label for="middle_name" class="form-label">Middle Name</label>
                <input type="text" class="form-control" v-model="info.middle_name" id="middle_name">
            </div>
            <div class="col-12 col-lg-4">
                <label for="last_name" class="form-label">Last Name</label>
                <input type="text" class="form-control" v-model="info.last_name" id="last_name">
            </div>
            <!-- <div class="col-12 col-lg-3">
                <label for="FisrtName" class="form-label">System ID</label>
                <input type="text" class="form-control" v-model="info.id" id="FisrtName">
            </div> -->
            <div class="col-12 col-lg-3">
                <label for="gender" class="form-label">Gender</label>
                <select class="form-select" v-model="info.gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div class="col-12 col-lg-3">
                <label for="civil_status" class="form-label">Civil Status</label>
                <select class="form-select" v-model="info.civil_status">
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                </select>
            </div>
            <div class="col-12 col-lg-3">
                <label for="date_of_birth" class="form-label">Date of Birth</label>
                <input type="text" class="form-control datepicker" v-model="info.date_of_birth" ref="flatpickrInput"
                    placeholder="Select a date" />
            </div>
            <!-- <div class="col-12 col-lg-3">
                <label for="FisrtName" class="form-label">Employee ID</label>
                <input type="text" class="form-control" id="FisrtName">
            </div> -->
        </div>
    </div>
</template>

<script>
// SERVICES
import BasicInfoServices_Online from '../../services/online/EmployeeManagement/basicInfoServices'

import { defineComponent } from "vue";
export default defineComponent({
    data() {
        return {
            info: {
                first_name: '',
                middle_name: '',
                last_name: '',
                gender: 'Male',
                civil_status: 'Single',
                date_of_birth: new Date(),
            },
            recordId: 0,
        };
    },
    async mounted() { 
        await this.onload()
        flatpickr(this.$refs.flatpickrInput, {
            dateFormat: 'Y-m-d',
        });
    },
    methods: {
        async onload() {
            this.recordId = this.$store.state.recordId
            if (this.recordId) {
                this.info = await BasicInfoServices_Online.getById(this.recordId)
            }
        },

        async handleSave() {
            if (import.meta.env.VITE_APP_ENV == 'local') {
                console.log('working')
            } else {
                if (this.recordId > 0) {
                    // delete this.info.id
                    let user = await BasicInfoServices_Online.handleUpdate(this.recordId, this.info)
                    if (user) { 
                        return user
                    }
                    
                } else { 
                    let user = await BasicInfoServices_Online.handleSave(this.info) 
                    return user
                    // return user.id
                }
            }
        }, 
    }
})
</script>