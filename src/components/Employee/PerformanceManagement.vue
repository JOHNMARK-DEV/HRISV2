<template>
    <div class="container-fluid row row-cols-1">
        <div class="row  border-bottom mt-4">
            <label class="col-12 col-lg-3">
                Goal
            </label>
            <label class="col-12 col-lg-3">
                Due Date
            </label>
            <label class="col-12 col-lg-6">
                Feedback
            </label> 
        </div>
        <div class="row  border-bottom mt-4">
            <label class="col-12 col-lg-6">
                File Name
            </label>
            <label class="col-12 col-lg-6">
                Creation Date
            </label>   
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