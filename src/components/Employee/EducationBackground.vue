<template>
    <div class="container-fluid row row-cols-1">
        <div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Education Type</th>
                        <th scope="col">School</th>
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                        <th scope="col">Degree</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="col">Empty</td> 
                        <td scope="col">Empty</td> 
                        <td scope="col">Empty</td> 
                        <td scope="col">Empty</td> 
                        <td scope="col">Empty</td> 
                        <th scope="col">
                            <button class="btn btn-primary">Add</button>
                            <button class="btn btn-danger">Remove</button>
                        </th> 
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