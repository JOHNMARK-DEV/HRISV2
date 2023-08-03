<template>
  <div class="bg-login">
    <!-- wrapper -->
    <div class="wrapper">
      <div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
        <div class="container">
          <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
            <div class="col mx-auto">
              <div class="card mb-0">
                <div class="card-body">
                  <div class="p-4">
                    <div class="mb-3 text-center">
                      <!-- <img src="assets/images/logo-icon.png" width="60" alt="" /> -->
                    </div>
                    <div class="text-center mb-4">
                      <p class="mb-0">Please log in to your account</p>
                    </div>
                    <div class="form-body">
                      <form class="row g-3">
                        <div class="col-12">
                          <label for="inputEmailAddress" class="form-label">Email</label>
                          <input type="email" class="form-control" id="inputEmailAddress" placeholder="jhon@example.com"
                            v-model='credentials.email' />
                          <p class="text-danger" v-if="credentials.email == ''">*This field is required</p>
                        </div>
                        <div class="col-12">
                          <label for="inputChoosePassword" class="form-label">Password</label>
                          <div class="input-group" id="show_hide_password">
                            <input :type="hidePassword ? 'password' : 'text'" class="form-control border-end-0"
                              id="inputChoosePassword" placeholder="Enter Password" v-model='credentials.password' />
                            <a href="javascript:;" @click="onClickHidePassword()" class="input-group-text bg-transparent">
                              <i v-bind:class="{ 'bx bx-hide': hidePassword, 'bx bx-show': !hidePassword }"></i>
                            </a>
                          </div>

                          <p class="text-danger" v-if="credentials.password == ''">*This field is required</p>
                        </div>
                        <div class="col-md-6">
                          <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                            <label class="form-check-label" for="flexSwitchCheckChecked">Remember Me</label>
                          </div>
                        </div>
                        <div class="col-md-6 text-end">
                          <a href="auth-basic-forgot-password.html">Forgot Password?</a>
                        </div>
                        <div class="col-12">
                          <div class="d-grid">
                            <button @click.prevent="onHandleLogin()" class="btn btn-primary">Log in</button>
                          </div>
                        </div>

                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="alert alert-danger" role="alert" v-if="errorMessage != ''"><b>{{ errorMessage }}</b></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import router from '../../router';
import AuthService_Online from '../../services/online/Authentication/Auth'
import AuthService_Local from '../../services/local/Authentication/Auth'
export default {
  data() {
    return {
      hidePassword: true,
      credentials: {},
      errorMessage: ''
    };
  },
  methods: {
    async onHandleLogin() {
      if (import.meta.env.VITE_APP_ENV == 'local') {
        AuthService_Local.signIn(this.credentials.email, this.credentials.password)
          .then(response => {
            if (response.status != 200) {
              this.errorMessage = response
            }
            this.$store.commit('setToken', response.data.token)
            location.href = '/HRIS/Dashboard'
          })
          .catch(err => {
            alert(err)
          })
      } else { 
        let user = await AuthService_Online.signIn(this.credentials.email, this.credentials.password)

        // Access the authentication token
        const authToken = user?.access_token;
        this.$store.commit('setToken', authToken)
        router.push('/Dashboard')
      }
    }

  },

  onClickHidePassword() {
    this.hidePassword = !this.hidePassword;
  }
} 
</script>
  