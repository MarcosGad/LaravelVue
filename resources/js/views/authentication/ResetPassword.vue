<template>
  <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Password Recovery</h3></div>
                                    <div class="card-body">
                                        <form v-on:submit.prevent="onSubmit">
                                            <div class="form-group">
                                                <label class="small mb-1" for="email">Email</label>
                                                <input class="form-control py-4" id="email" v-model="user.email" type="email" aria-describedby="emailHelp" placeholder="Enter email address" />
                                                <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                                            </div>
                                            <div class="form-group">
                                                <label class="small mb-1" for="verification_code">Verification Code</label>
                                                <input class="form-control py-4" id="verification_code" v-model="user.verification_code" type="text" />
                                                <div class="invalid-feedback" v-if="errors.verification_code">{{errors.verification_code[0]}}</div>
                                            </div>
                                            <div class="form-group">
                                                <label class="small mb-1" for="email">Password</label>
                                                <input class="form-control py-4" id="password" v-model="user.password" type="password" />
                                                <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                                            </div>
                                            <div class="form-group">
                                                <label class="small mb-1" for="email">Confirm Password</label>
                                                <input class="form-control py-4" id="password_confirmation" v-model="user.password_confirmation" type="password" />
                                                <div class="invalid-feedback" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</div>
                                            </div>
                                            <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <router-link class="small" to="/login">Return to login</router-link>
                                                <button type="submit" class="btn btn-primary" ref="btnSubmit">Reset Password</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center">
                                        <router-link class="small" to="/register">Need an account? Need an account? Sign up!</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
</template>

<script>
  import * as auth from '../../services/auth_service';
  export default {
    name: 'ResetPasswordRequest',
    data() {
      return {
         user: {
           email:'',
           verification_code: '',
           password: '',
           password_confirmation: '',
         },
         btnOldHtml: '',
         errors: {}
      }
    },
    created() {
      document.querySelector('body').style.backgroundColor = '#343a40';
    },
    beforeRouteEnter(to, from, next){
      next(vm => {
         vm.user.email = to.params.email
      });
    },
    methods: {
      onSubmit: async function() {
        try {
          this.disableSubmission(this.$refs.btnSubmit);
          this.errors = {};
          const response = await auth.resetPassword(this.user);
          this.flashMessage.success({
              message: response.data.message,
              time: 5000
          });
          this.$router.push('/login');
        } catch (error) {
          switch (error.response.status){
            case 422:
                this.errors = error.response.data.errors;
                break;
            case 401:
                this.errors = error.response.data.errors;
                break;
            default:
                this.flashMessage.error({
                    message: 'Error!',
                    time: 5000
                });
              break;
          }
          this.enableSubmission(this.$refs.btnSubmit);
        }
      },
      disableSubmission(btn) {
        btn.setAttribute('disabled', 'disabled');
        this.btnOldHtml = btn.innerHTML;
        btn.innerHTML = '<span class="fa fa-spinner fa-spin"></span> Please wait .....';
      },
      enableSubmission(btn) {
        btn.removeAttribute('disabled');
        btn.innerHTML = this.btnOldHtml;
      }
    }
  };
</script>