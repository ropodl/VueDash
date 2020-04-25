<template>
  <v-app>
    <v-content>
      <Navbar v-if="!$route.meta.hidenav"></Navbar>
      <!-- <v-fade-transition> -->
      <router-view></router-view>
      <!-- </v-fade-transition> -->
      <Footer></Footer>
    </v-content>
  </v-app>
</template>
<script>
  import Navbar from './components/Navbar'
  import Footer from './components/Footer'
  export default {
    name: 'App',
    components: {
      Navbar,
      Footer
    },
    data() {
      return {

      }
    }
  }
</script>
<style scoped>
</style>