<template>
    <div class="container mt-5">
      <div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Unauthorized</h4>
        <p>You are not authorized to access this page. Please log in.</p>
        <a href="/HRIS/login">Go to login page</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Unauthorized',
  };
  </script>
  
  <style>
  /* Add custom styles or override Bootstrap classes here */
  </style>
  