<template>
 <div class="container login-page">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-start text-dark mt-5">Sign in</h2>
        <div class="my-5">

          <form @submit.prevent="login">

            <div class="mb-3">
              <input v-model="input.username" type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp"
                placeholder="User Email">
            </div>
            <div class="mb-3">
              <input v-model="input.password" type="password" name="psw" class="form-control" id="password" placeholder="password">
            </div>
            <div class="text-center">
              <button
                type="submit"
                class="btn btn-color px-5 w-100"
                :disabled="loading"
              >
                Login
              </button>
            </div>
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
        const { next, ...params } = this.$route.params
        this.$router.push({
          name: next || 'admin',
          params
        })
      } catch (err) {
        console.error(err)
        alert('Invalid authentication key or password')
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style lang="scss">
.login-page {
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .row {
    flex-grow: 1;
    flex-shrink: 0;
  }
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