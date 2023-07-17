<template>
    <div class="container-fluid row row-cols-1">

        <div class="col-12 row inputs flex-grow-3 ">
            <div class="col-12 col-lg-4">
                <label for="FisrtName" class="form-label">Primary Contact Number<br />
                    <span class="text-secondary">A primary contact can only be a mobile number</span></label>
                <input type="text" class="form-control" id="FisrtName">
            </div>
        </div>
        <div class="col-12 row inputs flex-grow-3 ">
            <div class="col-12 col-lg-4">
                <label for="FisrtName" class="form-label">Local Trunk Line</label>
                <input type="text" class="form-control" id="FisrtName">
            </div>
            <div class="col-12 col-lg-4">
                <label for="FisrtName" class="form-label">Pin</label>
                <input type="text" class="form-control" id="FisrtName">
            </div>
            <div class="col-12 col-lg-4">
                <label for="FisrtName" class="form-label">Skype ID</label>
                <input type="text" class="form-control" id="FisrtName">
            </div>
        </div>
        <div class="row  border-bottom mt-4 mb-4">
            <div>
                <h6>Emergency Contact numbers:</h6>
            </div>
            <!-- <label class="col-12 col-lg-3">
                Contact No.
            </label>
            <label class="col-12 col-lg-3">
                Contact Name
            </label>
            <label class="col-12 col-lg-3">
                Relationship
            </label>
            <label class="col-12 col-lg-3">
                Address
            </label> -->

            <table class="table mb-0">
                <thead>
                    <tr>
                        <th scope="col">Contact No.</th>
                        <th scope="col">Contact Name</th>
                        <th scope="col">Relationship</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <!-- <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Mark</td> -->
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row  border-bottom mt-4 mb-4">
            <div>
                <h6>Alternate Phone numbers:</h6>
            </div>
            <!-- <label class="col-12 col-lg-3">
                Title
            </label>
            <label class="col-12 col-lg-3">
                Contact No.
            </label>
            <label class="col-12 col-lg-6">
                Contact Name
            </label> -->

            <table class="table mb-0">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Contact No.</th>
                        <th scope="col">Contact Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <!-- <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Mark</td> -->
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row mt-4 mb-4">
            <div>
                <h6>Emails:</h6>
            </div>
            <table class="table mb-0">
                <thead>
                    <tr>
                        <th scope="col">Emails</th>
                        <th scope="col">Primary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <input type="text" class="form-control" id="FisrtName">
                        </th>
                        <td><input type="checkbox" name="" id=""></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row mt-4 mb-4">
            <div>
                <h6>Addresses:</h6>
            </div>
            <h6>Philippines <span>primary address</span></h6>
            <table class="table mb-0"> 
                <tbody>
                    <tr>
                        <td class="w-25">Address</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                    </tr>
                    <tr>
                        <td >City</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                    </tr>
                    <tr>
                        <td>State/Province</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                    </tr>
                    <tr>
                        <td>Zip Code</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                    </tr>
                    <tr>
                        <td>Notes</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
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