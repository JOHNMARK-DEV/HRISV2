<template>
    <div class="container-fluid row row-cols-1">
        <div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Title</th> 
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                        <!-- <th scope="col">Degree</th> -->
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in info">
                        <td scope="col" :contenteditable="true" @input="updateCell($event, index, 'title')">{{
                            row.title }}</td>  
                        <td scope="col" :contenteditable="true" @input="updateCell($event, index, 'from')">{{ row.from }}
                        </td>
                        <td scope="col" :contenteditable="true" @input="updateCell($event, index, 'to')">{{ row.to }}</td> 
                        <th scope="col">
                            <button class="btn btn-primary" @click="addRow(index)">Add</button>
                            <button class="btn btn-danger" @click="deleteRow(index)">Remove</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
 
<script>
// SERVICES
import CertificatesServices_Online from '../../services/online/EmployeeManagement/CertificatesServices'

import { defineComponent } from "vue";
export default defineComponent({
    data() {
        return {
            info: [
                {
                    isRemove: false
                }, 
            ],
            removeIds:[]
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
    },
    methods: {

        async onload() {
            this.recordId = this.$store.state.recordId
            if (this.recordId) {
                this.info = await CertificatesServices_Online.getById(this.recordId)
            }
        },


        async handleSave(parentId) {
            if (import.meta.env.VITE_APP_ENV == 'local') {
                console.log('working')

            } else {

                
                await CertificatesServices_Online.handleDelete(this.removeIds)

                delete this.info.id 
                for (let index = 0; index < this.info.length; index++) {
                    let id = this.info[index].id 
                    this.info[index].emp_id = parentId 
                 
                    delete this.info[index].isRemove
                    let data
                    if (id != null && id > 0) {
                        delete this.info[index].id
                        data = await CertificatesServices_Online.handleUpdate(id, this.info[index])
                    } else {
                        data = await CertificatesServices_Online.handleSave(this.info[index])
                    }

                    if (data) {
                        console.log(data)
                    }
                }
            }
        },

        updateCell(event, index, field) {
            if (event.target.textContent != '') {
                this.info[index][field] = event.target.textContent;
                event.target.textContent = event.target.textContent;
            }
        },

        addRow() {
            this.info.push({ isRemove: false });
        },

        deleteRow(index) {

            this.info[index].isRemove = true
            this.removeIds.push(this.info[index].id)
            this.info = this.info.filter(row => !row.isRemove);
            console.log(this.removeIds)

        }

    }
})
</script>
<style>
td,
th {
    color: #808485 !important;
}
</style>