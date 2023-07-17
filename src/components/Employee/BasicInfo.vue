<template>
    <div class="container-fluid row row-cols-1">
        <div class="col-3 profilePic">
            <div class="img-container">
                <img src="../../assets/images/avatars/avatar-1.png" alt="">
            </div>
            <div class="mt-3">
                <input type="file" name="" id="">
            </div>
        </div>
        <div class="col-9 row inputs flex-grow-3 ">
            <div class="col-12 col-lg-4">
                <label for="FisrtName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="FisrtName">
            </div>
            <div class="col-12 col-lg-4">
                <label for="FisrtName" class="form-label">Middle Name</label>
                <input type="text" class="form-control" id="FisrtName">
            </div>
            <div class="col-12 col-lg-4">
                <label for="FisrtName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="FisrtName">
            </div>
            <div class="col-12 col-lg-3">
                <label for="FisrtName" class="form-label">System ID</label>
                <input type="text" class="form-control" id="FisrtName">
            </div>
            <div class="col-12 col-lg-3">
                <label for="FisrtName" class="form-label">Gender</label>
                <select class="form-select">
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                </select>
            </div>
            <div class="col-12 col-lg-3">
                <label for="FisrtName" class="form-label">Civil Status</label>
                <select class="form-select">
                    <option value="1">Single</option>
                    <option value="2">Married</option>
                </select>
            </div>
            <div class="col-12 col-lg-3">
                <label for="FisrtName" class="form-label">Date of Birth</label>
                <input type="text" class="form-control datepicker" ref="flatpickrInput" placeholder="Select a date" />
            </div>
            <div class="col-12 col-lg-3">
                <label for="FisrtName" class="form-label">Employee ID</label>
                <input type="text" class="form-control" id="FisrtName">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        flatpickr(this.$refs.flatpickrInput, {
            dateFormat: 'Y-m-d',
        });
    }
}
</script>