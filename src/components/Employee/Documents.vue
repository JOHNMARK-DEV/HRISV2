<template>
    <div class="container-fluid row row-cols-1">
        <div class="col-12 row inputs flex-grow-3 ">
            <table class="table mb-0">
                <thead>
                    <tr>
                        <td>File Name</td>
                        <td>Creation Time</td> 
                        <td></td> 
                    </tr>
                </thead>
                <tbody>
                   <tr>
                   <td>Document.pdf</td>
                   <td>Document.pdf</td>
                   <td>
                    <button class="btn btn-primary">Download</button>
                   </td>
                   </tr>
                </tbody>
            </table>
        </div> 
    </div>
</template>

<script>
export default {
    mounted() {
        flatpickr(".timepicker", {
            noCalendar: true,
            enableTime: true,
            time_24hr: false,
            dateFormat: "h:i K"
        });
    }
}
</script>
<style>
td,
th {
    color: #808485 !important;
}
</style>