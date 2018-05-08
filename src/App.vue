<template>
  <div id="app">
    <div>
      <span v-if="isGuest">Hi guest! You can login </span>
      <span v-else>Hi {{ $protect.user.name }}! You can logout </span>
      <button @click="toggleAuth">here</button>.
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/protected">Protected</router-link>
      <span v-if="!isGuest"> |
        <router-link :to="{ name: 'profile', params: { id: $protect.user.id }}">Profile</router-link>
      </span>
    </div>
    <router-view/>
  </div>
</template>
<script>
  import { USER_TYPE_GUEST, USER_TYPE_REGISTERED } from "./constants";

  export default {
    computed: {
      isGuest() {
        return this.$protect.user.type === USER_TYPE_GUEST;
      }
    },
    methods: {
      toggleAuth() {
        let user;
        if (this.$protect.user.type === USER_TYPE_GUEST) {
          user = {
            type: USER_TYPE_REGISTERED,
            name: "George",
            id: "1234"
          }
        } else {
          user = {
            type: USER_TYPE_GUEST
          };
        }
        this.$protect.user = user;
      }
    }
  }
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
