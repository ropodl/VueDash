<template>
  <v-app>
    <v-content>
      <Navbar v-if="!$route.meta.hidenav"></Navbar>
      <v-fade-transition>
      <router-view></router-view>
      </v-fade-transition>
    </v-content>
  </v-app>
</template>
<script>
  import Navbar from './components/Navbar'
  export default {
    name: 'App',
    components: {
      Navbar
    },
    data() {
      return {

      }
    }
  }
</script>
<style scoped>
</style>