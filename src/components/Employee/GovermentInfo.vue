<template>
    <div class="container-fluid row row-cols-1">
        <div class="m-1"> 
            <div class="col-12 row inputs flex-grow-3 ">
                <div class="col-12 col-lg-3">
                    <label for="FisrtName" class="form-label">SSS No.</label>
                    <input type="text" class="form-control" id="FisrtName">
                </div>
                <div class="col-12 col-lg-3">
                    <label for="FisrtName" class="form-label">TIN</label>
                    <input type="text" class="form-control" id="FisrtName">
                </div>
                <div class="col-12 col-lg-3">
                    <label for="FisrtName" class="form-label">PhilHealth</label>
                    <input type="text" class="form-control" id="FisrtName">
                </div>

                <div class="col-12 col-lg-3">
                    <label for="FisrtName" class="form-label">HDMF No.</label>
                    <input type="text" class="form-control" id="FisrtName">
                </div>
                <div class="col-12 col-lg-3">
                    <label for="FisrtName" class="form-label">PRC License No.</label>
                    <input type="text" class="form-control" id="FisrtName">
                </div>
                <div class="col-12 col-lg-3">
                    <label for="FisrtName" class="form-label">Passport No.</label>
                    <input type="text" class="form-control" id="FisrtName">
                </div>
                <div class="col-12 col-lg-3">
                    <label for="FisrtName" class="form-label">Tax Status</label>
                    <input type="text" class="form-control" id="FisrtName">
                </div>
                <div class="col-12 col-lg-3">
                    <label for="FisrtName" class="form-label">RDO No.</label>
                    <input type="text" class="form-control" id="FisrtName">
                </div>

            </div>
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