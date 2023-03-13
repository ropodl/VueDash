<template>
  <v-app>
    <v-main>
      <router-view />
      <!-- <Navbar v-if="!$route.meta.hidenav"></Navbar>
      <keep-alive>
        <router-view class="mb-12"></router-view>
      </keep-alive>
      <Footer></Footer> -->
    </v-main>
  </v-app>
</template>
<script>
  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer";
  export default {
    name: "App",
    components: {
      Navbar,
      Footer,
    },
    data() {
      return {
        dark: localStorage.getItem("dark"),
      };
    },
  };
</script>
<style lang="scss"></style>
