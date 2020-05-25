<template>
  <v-app>
    <v-content>
      <Navbar v-if="!$route.meta.hidenav"></Navbar>
      <keep-alive>
        <router-view class="mb-12"></router-view>
      </keep-alive>
      <Footer></Footer>
    </v-content>
  </v-app>
</template>
<script>
  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer";
  export default {
    name: "App",
    components: {
      Navbar,
      Footer
    },
    data() {
      return {
        dark: null
        }
    },
    mounted() {
      this.checkifdark();
    },
    methods: {
      checkifdark(){
        let isdark = localStorage.getItem('dark')
        // console.log(isdark)
        if( isdark ){
          // this.dark = isdark
          this.$vuetify.theme.dark = isdark
        } else {
          // this.dark = isdark
          this.$vuetify.theme.dark = isdark
        }
      }
    },
    watch: {
      dark(){
        this
      }
    }
  }
</script>
<style scoped>

</style>