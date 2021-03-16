<template>
  <div>
    <h1 id="title">Login</h1>
    <input v-model="username"  type="text" id="input-username" />
    <input v-model="password" type="password" id="input-password" />
    <button id="btn-sign-in" @click="login">Sign In</button>
    <br/>
    <div v-if="error" id="msg-error">{{ error }}</div>

  

    <br/>
    <br/>

    <div>=====================================================</div>
    <input v-model="pin"  type="text" id="input-pin" />

    <button id="btn-sign-in-text" @click="modetextchange">search action </button>

    <div id="msg-text-ok">{{ message }}</div>

  </div>
</template>

<script>
import api from '@/lib/api';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: 'ok',
      message: '',
      pin: ''
    };
  },
  methods: {
    modetextchange() {
        if (!this.pin) {
        this.message = "data is empty";
        return;
      }
      api.getPin(this.pin).then((res) => {
        console.log(res)
        this.message = res.data.media[0].titles.en;
      })
    },

    login() {
      if (!this.username) {
        this.error = 'Username is required';
        return;
      } else if (!this.password) {
        this.error = 'Password is required';
        return;
      }

      api
        .login(this.username, this.password)
        .then((res) => {
           if (res.errorcode) {
              this.error = 'Login failed';
              this.$router.push('/error');

              return;
           }
            console.log("success case",res)
          this.$router.push('/success');
        })
        .catch((err) => {
          console.log(err)
          this.error = 'Login failed';
          this.$router.push('/error');

        });
    },
  },
};
</script>
