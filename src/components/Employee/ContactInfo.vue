<template>
    <div class="container-fluid row row-cols-1">

        <div class="col-12 row inputs flex-grow-3 ">
            <div class="col-12 col-lg-4">
                <label for="FisrtName" class="form-label">Primary Contact Number<br />
                    <span class="text-secondary">A primary contact can only be a mobile number</span></label>
                <input type="text" class="form-control" v-model="info.contact_no">
            </div>
        </div>
        <div class="col-12 row inputs flex-grow-3 ">
            <div class="col-12 col-lg-4">
                <label for="FisrtName" class="form-label">Local Trunk Line</label>
                <input type="text" class="form-control" v-model="info.local_trunk_line">
            </div>
            <div class="col-12 col-lg-4">
                <label for="FisrtName" class="form-label">Pin</label>
                <input type="text" class="form-control" v-model="info.pin">
            </div>
            <div class="col-12 col-lg-4">
                <label for="FisrtName" class="form-label">Skype ID</label>
                <input type="text" class="form-control" v-model="info.skype_id">
            </div>
        </div>
        <div class="row  border-bottom mt-4 mb-4">
            <div>
                <h6>Emergency Contact numbers:</h6>
            </div>
            <table class="table mb-0">
                <thead>
                    <tr>
                        <th scope="col">Contact No.</th>
                        <th scope="col">Contact Name</th>
                        <th scope="col">Relationship</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <!-- <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Mark</td> -->
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row  border-bottom mt-4 mb-4">
            <div>
                <h6>Alternate Phone numbers:</h6>
            </div>
            <!-- <label class="col-12 col-lg-3">
                Title
            </label>
            <label class="col-12 col-lg-3">
                Contact No.
            </label>
            <label class="col-12 col-lg-6">
                Contact Name
            </label> -->

            <table class="table mb-0">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Contact No.</th>
                        <th scope="col">Contact Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <!-- <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Mark</td> -->
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row mt-4 mb-4">
            <div>
                <h6>Emails:</h6>
            </div>
            <table class="table mb-0">
                <thead>
                    <tr>
                        <th scope="col">Emails</th>
                        <th scope="col">Primary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <input type="text" class="form-control"  v-model="info.alt_email">
                        </th>
                        <td><input type="checkbox" ></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row mt-4 mb-4">
            <div>
                <h6>Addresses:</h6>
            </div>
            <h6>Philippines <span>primary address</span></h6>
            <table class="table mb-0">
                <tbody>
                    <tr>
                        <td class="w-25">Address</td>
                        <th><input type="text" class="form-control" v-model="info.address" ></th>
                    </tr>
                    <tr>
                        <td>City</td>
                        <th><input type="text" class="form-control"  v-model="info.city"></th>
                    </tr>
                    <tr>
                        <td>State/Province</td>
                        <th><input type="text" class="form-control" v-model="info.state" ></th>
                    </tr>
                    <tr>
                        <td>Zip Code</td>
                        <th><input type="text" class="form-control" v-model="info.zip_code" ></th>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <th><input type="text" class="form-control" v-model="info.country" ></th>
                    </tr>
                    <tr>
                        <td>Notes</td>
                        <th><input type="text" class="form-control" v-model="info.notes" ></th>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
// SERVICES
import GovtInfoServices_Online from '../../services/online/EmployeeManagement/GovtInfoServices'

import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            info: {
                contact_no: "N/A",
                local_trunk_line: "N/A",
                pin: "N/A",
                skype_id: "N/A",
                er_contact_no: "N/A",
                er_contact_name: "N/A",
                er_relation: "N/A",
                er_address: "N/A",
                alt_title: "N/A",
                alt_contact_no: "N/A",
                alt_contact_name: "N/A",
                alt_email: "N/A",
                is_primary: "N/A",
                address: "N/A",
                city: "N/A",
                state: "N/A",
                zip_code: "N/A",
                country: "N/A",
                notes: "N/A"
            }
        };
    },
    async mounted() {
        await this.onload()
    },
    methods: {

        async onload() {
            this.recordId = this.$store.state.recordId
            if (this.recordId) {
                this.info = await GovtInfoServices_Online.getById(this.recordId)
            }
        },

        async handleSave(parentId) {
            if (import.meta.env.VITE_APP_ENV == 'local') {
                console.log('working')
            } else {
                if (this.recordId > 0) {
                    delete this.info.id
                    let user = await GovtInfoServices_Online.handleUpdate(this.recordId, this.info)
                    if (user) {
                        console.log(user)
                    }
                } else {
                    this.info.emp_id = parentId
                    let user = await GovtInfoServices_Online.handleSave(this.info)
                }
            }
        },

    }
})
</script>
<style>
td,
th {
    color: #808485 !important;
}
</style>