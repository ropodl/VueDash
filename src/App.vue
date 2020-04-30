<template>
  <v-app>
    <v-content>
      <Navbar v-if="!$route.meta.hidenav"></Navbar>
      <router-view class="mb-12"></router-view>
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