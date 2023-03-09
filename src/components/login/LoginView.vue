<template>
 <div class="container login-page">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5">Login</h2>
        <div class="card my-5">

          <form class="card-body cardbody-color p-lg-5" @submit.prevent="login">

            <div class="mb-3">
              <input v-model="input.username" type="email" class="form-control" id="email" aria-describedby="emailHelp"
                placeholder="User Email">
            </div>
            <div class="mb-3">
              <input v-model="input.password" type="password" class="form-control" id="password" placeholder="password">
            </div>
            <div class="text-center"><button type="submit" class="btn btn-color px-5 mb-5 w-100">Login</button></div>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoginView',
  data () {
    return {
      input: {
        username: "",
        password: ""
      },
      output: "",
      loading: false
    }
  },
  methods: {
    async login () {
      //make sure username OR password are not empty
      if (this.input.username != "" || this.input.password != "") {
        this.output = "Authentication complete"
      } else {
        this.output = "Username and password can not be empty"
        return
      }

      try {
        this.loading = true
        await this.$store.dispatch('auth/login', this.input)

      } catch (err) {
        console.error(err)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style lang="scss">
.login-page {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.btn-color{
  background-color: #0e1c36;
  color: #fff;
  
}

.profile-image-pic{
  height: 200px;
  width: 200px;
  object-fit: cover;
}



.cardbody-color{
  background-color: #ebf2fa;
}

a{
  text-decoration: none;
}
</style>