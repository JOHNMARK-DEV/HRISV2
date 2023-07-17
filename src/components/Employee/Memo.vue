<template>
    <div class="container-fluid row row-cols-1">
        <div class="col-12 row inputs flex-grow-3 ">
            <table class="table mb-0">
                <thead>
                    <tr>
                        <td scope="col">Offense Level</td>
                        <td scope="col">DA Type</td>
                        <td scope="col">Infraction/Violation Category</td>
                        <td scope="col">Date Served & Received</td>
                        <td scope="col">Slid Date</td>
                        <td scope="col">Notes</td>
                    </tr>
                </thead>
                <tbody>
                   
                </tbody>
            </table>
        </div>
        <hr />
        <div class="col-12 row inputs flex-grow-3 ">
            <table class="table mb-0">
                <thead>
                    <tr>
                        <td class="w-50">File Name</td>
                        <td>Creation Time</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                         
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