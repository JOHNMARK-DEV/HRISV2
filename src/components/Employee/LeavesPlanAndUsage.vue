<template>
    <div class="container-fluid row row-cols-1">

        <div class="col-12 row inputs flex-grow-3 ">
            <div class="col-12 col-lg-4">
                <h3 for="FisrtName" class="form-label">Primary Contact Number</h3>
            </div>
            <hr />
            <div class="container border-bottom">
                <p class="text-secondary">
                    This is a summary of your leave plans Click "i" to view the number of credits, renewal date, carryover,
                    and conversion policies for each, Expand to view our earning and usage history
                </p>
            </div>
            <div class="container border-bottom p-4">
                <div class="col-12 col-lg-12">
                    <h3 for="FisrtName" class="form-label">Emergency Leave : Standard Emergency Leave</h3>
                </div>
                <p class="text-secondary">
                    0 available credits
                </p>
            </div>
            <div class="container border-bottom p-4">
                <div class="col-12 col-lg-12">
                    <h3 for="FisrtName" class="form-label">Sick Leave : Standard Sick Leave</h3>
                </div>
                <p class="text-secondary">
                    0 available credits
                </p>
            </div>
            <table class="table mb-0">
                <tbody>
                    <tr>
                        <td class="text-end">Date From</td>
                        <th><input type="text" class="form-control"  ref="flatpickrInput" v-model="info.date_from"></th>
                        <td class="text-end">Clothing</td>
                        <th><input type="text" class="form-control" v-model="info.clothing"></th>
                    </tr>
                    <tr>
                        <td class="text-end">Base Salary</td>
                        <th><input type="text" class="form-control"  v-model="info.base_salary"></th>
                        <td class="text-end">Communication</td>
                        <th><input type="text" class="form-control"  v-model="info.communication"></th>
                    </tr>
                    <tr>
                        <td class="text-end">De Minimis</td>
                        <th><input type="text" class="form-control" v-model="info.de_minimis"></th>
                        <td class="text-end">Discretionary</td>
                        <th><input type="text" class="form-control" v-model="info.discretionary"></th>
                    </tr>
                    <tr>
                        <td class="text-end">Others Type</td>
                        <th><input type="text" class="form-control" v-model="info.other_type"></th>
                        <td class="text-end">Laundry</td>
                        <th><input type="text" class="form-control" v-model="info.laundry"></th>
                    </tr>
                    <tr>
                        <td class="text-end">Other Supplies</td>
                        <th><input type="text" class="form-control" v-model="info.other_supplies"></th>
                        <td class="text-end">Meal</td>
                        <th><input type="text" class="form-control" v-model="info.meal"></th>
                    </tr>
                    <tr>
                        <td class="text-end">Monthly Gross</td>
                        <th><input type="text" class="form-control" v-model="info.monthly_gross"></th>
                        <td class="text-end">Medical</td>
                        <th><input type="text" class="form-control" v-model="info.medical"></th>
                    </tr>
                    <tr>
                        <td class="text-end">Percentage Increase</td>
                        <th><input type="text" class="form-control" v-model="info.percentage_increase"></th>
                        <td class="text-end">Productivity</td>
                        <th><input type="text" class="form-control" v-model="info.productivity"></th>
                    </tr>
                    <tr>
                        <td class="text-end">Raise Amt</td>
                        <th><input type="text" class="form-control" v-model="info.raise_amt"></th>
                        <td class="text-end">Rice</td>
                        <th><input type="text" class="form-control" v-model="info.rice"></th>
                    </tr>
                    <tr>
                        <td class="text-end">Raise %</td>
                        <th><input type="text" class="form-control" v-model="info.raise_percent"></th>
                        <td class="text-end">Transportation</td>
                        <th><input type="text" class="form-control" v-model="info.transportation"></th>
                    </tr>
                    <tr>
                        <td class="text-end">Commision</td>
                        <th><input type="text" class="form-control" v-model="info.commision"></th>
                        <td class="text-end">Travel</td>
                        <th><input type="text" class="form-control" v-model="info.travel"></th>
                    </tr>
                    <tr>
                        <td class="text-end">Action For</td>
                        <th><input type="text" class="form-control" v-model="info.action_for"></th>
                        <td class="text-end">Others</td>
                        <th><input type="text" class="form-control" v-model="info.others"></th>
                    </tr>
                    <tr>
                        <td class="text-end">Notes</td>
                        <th><input type="text" class="form-control" v-model="info.notes"></th>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
// SERVICES
import LeavesPlanAndUsageServices_Online from '../../services/online/EmployeeManagement/LeavesPlanAndUsageServices'

import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            info: {
                date_from: new Date(),
                base_salary: "N/A",
                de_minimis: "N/A",
                other_type: "N/A",
                other_supplies: "N/A",
                monthly_gross: "N/A",
                percentage_increase: "N/A",
                raise_amt: "N/A",
                raise_percent: "N/A",
                commision: "N/A",
                action_for: "N/A",
                notes: "N/A",
                clothing: "N/A",
                communication: "N/A",
                discretionary: "N/A",
                laundry: "N/A",
                meal: "N/A",
                medical: "N/A",
                productivity: "N/A",
                rice: "N/A",
                transportation: "N/A",
                travel: "N/A",
                others: "N/A" 
            }
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
                this.info = await LeavesPlanAndUsageServices_Online.getById(this.recordId)
            }
        },
        
        async handleSave(parentId) {
            if (import.meta.env.VITE_APP_ENV == 'local') {
                console.log('working')
            } else {
                if (this.recordId > 0) {
                    delete this.info.id
                    let user = await LeavesPlanAndUsageServices_Online.handleUpdate(this.recordId, this.info)
                    if (user) {
                        console.log(user)
                    }
                } else {
                    this.info.emp_id = parentId
                    let user = await LeavesPlanAndUsageServices_Online.handleSave(this.info)
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