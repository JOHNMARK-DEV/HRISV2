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
                        <th><input type="text" class="form-control" name="" id=""></th>
                        <td class="text-end">Clothing</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                    </tr> 
                    <tr> 
                        <td class="text-end">Base Salary</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                        <td class="text-end">Communication</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                    </tr> 
                    <tr> 
                        <td class="text-end">De Minimis</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                        <td class="text-end">Discretionary</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                    </tr> 
                    <tr> 
                        <td class="text-end">Others Type</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                        <td class="text-end">Laundry</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                    </tr> 
                    <tr> 
                        <td class="text-end">Other Supplies</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                        <td class="text-end">Meal</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                    </tr> 
                    <tr> 
                        <td class="text-end">Monthly Gross</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                        <td class="text-end">Medical</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                    </tr> 
                    <tr> 
                        <td class="text-end">Percentage Increase</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                        <td class="text-end">Productivity</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                    </tr> 
                    <tr> 
                        <td class="text-end">Raise Amt</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                        <td class="text-end">Rice</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                    </tr> 
                    <tr> 
                        <td class="text-end">Raise %</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                        <td class="text-end">Transportation</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                    </tr> 
                    <tr> 
                        <td class="text-end">Commision</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                        <td class="text-end">Travel</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                    </tr> 
                    <tr> 
                        <td class="text-end">Action For</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                        <td class="text-end">Others</td>
                        <th><input type="text" class="form-control" name="" id=""></th>
                    </tr> 
                    <tr> 
                        <td class="text-end">Notes</td>
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