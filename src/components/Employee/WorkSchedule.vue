<template>
    <div class="container-fluid row row-cols-1">
        <div class="m-1">
            <h5>Current Schedule</h5>
            <div class="col-12 row inputs flex-grow-3 ">
                <div class="col-12 col-lg-4 mb-4">
                    <label for="FisrtName" class="form-label">Schedule Type</label>
                    <select class="form-select">
                        <option value="1">Regular</option>
                    </select>
                </div>
                <div class="col-12 col-lg-4 mb-4">
                    <label for="FisrtName" class="form-label">No of hours to work including break hours</label>
                    <input type="text" class="form-control datepicker" v-model="info.remarks" />
                </div>

            </div>
        </div>
        <hr />
        <div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Day</th>
                        <th scope="col">Shift/Core From</th>
                        <th scope="col">Shift/Core To</th>
                        <th scope="col">Break Start</th>
                        <th scope="col">Break End</th>
                        <th scope="col">Is Rest Day</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in info">
                        <td>{{ row.day }}</td>
                        <td>
                            <input type="text" class="form-control timepicker" ref="time" v-model="info[index].shift_from"
                                placeholder="Select a date" />
                        </td>
                        <td>
                            <input type="text" class="form-control timepicker" ref="time" v-model="info[index].shift_to"
                                placeholder="Select a date" />
                        </td>
                        <td>
                            <input type="text" class="form-control timepicker" ref="time" v-model="info[index].break_start"
                                placeholder="Select a date" />
                        </td>
                        <td>
                            <input type="text" class="form-control timepicker" ref="time" v-model="info[index].break_end"
                                placeholder="Select a date" />
                        </td>
                        <td>
                            <input type="checkbox" v-model="info[index].is_restday" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
// SERVICES
import WorkSchedServices_Online from '../../services/online/EmployeeManagement/WorkSchedServices'

import { defineComponent } from "vue";
export default defineComponent({
    data() {
        return {
            info: [
                {
                    day: 'Monday',
                    shift_from: '12:00 pm',
                    shift_to: '12:00 pm',
                    break_start: '12:00 pm',
                    break_end: '12:00 pm'
                },
                {
                    day: 'Tuesday',
                    shift_from: '12:00 pm',
                    shift_to: '12:00 pm',
                    break_start: '12:00 pm',
                    break_end: '12:00 pm'
                },
                {
                    day: 'Wednesday',
                    shift_from: '12:00 pm',
                    shift_to: '12:00 pm',
                    break_start: '12:00 pm',
                    break_end: '12:00 pm'
                },
                {
                    day: 'Thrusday',
                    shift_from: '12:00 pm',
                    shift_to: '12:00 pm',
                    break_start: '12:00 pm',
                    break_end: '12:00 pm'
                },
                {
                    day: 'Friday',
                    shift_from: '12:00 pm',
                    shift_to: '12:00 pm',
                    break_start: '12:00 pm',
                    break_end: '12:00 pm'
                },
                {
                    day: 'Saturday',
                    shift_from: '12:00 pm',
                    shift_to: '12:00 pm',
                    break_start: '12:00 pm',
                    break_end: '12:00 pm'
                },
                {
                    day: 'Sunday',
                    shift_from: '12:00 pm',
                    shift_to: '12:00 pm',
                    break_start: '12:00 pm',
                    break_end: '12:00 pm'
                }
            ]
        };
    },
    mounted() {
        flatpickr(".timepicker", {
            noCalendar: true,
            enableTime: true,
            time_24hr: false,
            dateFormat: "h:i K"
        });
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
                this.info = await WorkSchedServices_Online.getById(this.recordId)
            }
        },


        async handleSave(parentId) {
            if (import.meta.env.VITE_APP_ENV == 'local') {
                console.log('working')
            } else {
                if (this.recordId > 0) {
                    delete this.info.id
                    for (let index = 0; index < this.info.length; index++) {
                        let id = this.info[index].id
                        delete this.info[index].id
                        let user = await WorkSchedServices_Online.handleUpdate(id, this.info[index])
                        if (user) {
                            console.log(user)
                        }
                    }

                } else {
                    for (let index = 0; index < this.info.length; index++) {
                        this.info[index].emp_id = parentId
                    }

                    let user = await WorkSchedServices_Online.handleSave(this.info)
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