<template>
    <div class="container-fluid row row-cols-1">
        <div class="m-1">
            <div class="col-12 row inputs flex-grow-3 ">
                <div class="col-12 col-lg-3">
                    <label for="FisrtName" class="form-label">SSS No.</label>
                    <input type="text" v-model="info.sss_no" class="form-control">
                </div>
                <div class="col-12 col-lg-3">
                    <label for="FisrtName" class="form-label">TIN</label>
                    <input type="text" v-model="info.tin" class="form-control">
                </div>
                <div class="col-12 col-lg-3">
                    <label for="FisrtName" class="form-label">PhilHealth</label>
                    <input type="text" v-model="info.philhealth" class="form-control">
                </div>

                <div class="col-12 col-lg-3">
                    <label for="FisrtName" class="form-label">HDMF No.</label>
                    <input type="text" v-model="info.hdmf_no" class="form-control">
                </div>
                <div class="col-12 col-lg-3">
                    <label for="FisrtName" class="form-label">PRC License No.</label>
                    <input type="text" v-model="info.prc_no" class="form-control">
                </div>
                <div class="col-12 col-lg-3">
                    <label for="FisrtName" class="form-label">Passport No.</label>
                    <input type="text" v-model="info.passport_no" class="form-control">
                </div>
                <div class="col-12 col-lg-3">
                    <label for="FisrtName" class="form-label">Tax Status</label>
                    <input type="text" v-model="info.tax_status" class="form-control">
                </div>
                <div class="col-12 col-lg-3">
                    <label for="FisrtName" class="form-label">RDO No.</label>
                    <input type="text" v-model="info.rdo_no" class="form-control">
                </div>

            </div>
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
                sss_no: 'N/A',
                tin:'N/A',
                philhealth:'N/A',
                hdmf_no:'N/A',
                prc_no:'N/A',
                passport_no:'N/A',
                tax_status:'N/A',
                rdo_no:'N/A',
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