<template>
  <div class="page-wrapper p-4 mr-4 ml-4">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
      <div class="col">
        <div class="card">
          <div class="card-header bg-success text-white">Card Header</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Pending Requests</b></li> 
          </ul> 

        </div>
      </div>
      <div class="col ">
        <div class="card shadow bg-white rounded">
          <div class="card-header bg-success text-white">My Attendance</div>

          <ul class="list-group list-group-flush list shadow-none">
            <li class="list-group-item d-flex justify-content-between align-items-center border-top">
              07/14/2023
              <span class="badge text-success rounded-pill">IN</span>
              <span class="card-text">09:19 PM</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center border-top">
              07/14/2023
              <span class="badge text-secondary rounded-pill">OUT</span>
              <span class="card-text">09:19 PM</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center border-top">
              07/14/2023
              <span class="badge text-success rounded-pill">IN</span>
              <span class="card-text">09:19 PM</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center border-top">
              07/14/2023
              <span class="badge text-secondary rounded-pill">OUT</span>
              <span class="card-text">09:19 PM</span>
            </li>

            <!-- <li class="list-group-item d-flex justify-content-between align-items-center">Dapibus ac facilisis in <span
                class="badge bg-success rounded-pill">2</span></li>
            <li class="list-group-item d-flex justify-content-between align-items-center border-bottom">Vestibulum at
              eros <span class="badge bg-danger rounded-pill">1</span></li> -->
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Show Team Attendance</a>
          </div>

        </div>
      </div>
      <div class="col">
        <div class="card shadow   rounded">
          <div class="card-header bg-success text-white">InstaCash</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Pending Requests</b></li> 
          </ul> 
        </div>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
      <div class="col flex-grow-1">
        <div class="card shadow rounded">
          <div class="card-header bg-success text-white">Resolution Center</div>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore
            eu fugiat nulla pariatur.</p>

        </div>
      </div>
      <div class="col">
        <div class="card shadow rounded ">
          <div class="card-header bg-success text-white">My Stuff</div>

          <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Pending Requests</b></li>
            <li class="list-group-item">
              <p class="text-center">All your request are approved</p>
            </li>
          </ul>

          <ul class="list-group list-group-flush list shadow-none">
            <li class="list-group-item"><b>Leave Credits</b></li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Emergency Leave
              <span class="card-text">43</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Vacation Leave
              <span class="card-text">43</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Sick Leave
              <span class="card-text">43</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Attendance Summary
              <span class="card-text">
                <button class="btn btn-outline-info">Show Details</button>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
