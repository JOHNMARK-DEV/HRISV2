<template>
    <div class="container-fluid row row-cols-1">
        <div class="m-1">
            <h5>Current Schedule</h5>
            <div class="col-12 row inputs flex-grow-3 ">
                <div class="col-12 col-lg-4 mb-4">
                    <label for="FisrtName" class="form-label">Schedule Type</label>
                    <select class="form-select">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </div>
                <div class="col-12 col-lg-4 mb-4">
                    <label for="FisrtName" class="form-label">No of hours to work including break hours</label>
                    <select class="form-select">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
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
                    <tr>
                        <td>Sunday</td>
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="checkbox"/>
                        </td>  
                    </tr>
                    <tr>
                        <td>Monday</td>
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="checkbox"/>
                        </td>  
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="checkbox"/>
                        </td>  
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="checkbox"/>
                        </td>  
                    </tr>
                    <tr>
                        <td>Thrusday</td>
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="checkbox"/>
                        </td>  
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="checkbox"/>
                        </td>  
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="text" class="form-control timepicker" ref="time"
                                placeholder="Select a date" />
                        </td> 
                        <td>
                            <input type="checkbox"/>
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
td,th{
    color:#808485 !important;
}
</style>