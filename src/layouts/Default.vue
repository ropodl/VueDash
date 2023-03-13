<script setup>
  import { defineAsyncComponent } from "vue";

  const Navbar = defineAsyncComponent(() => import("@/components/Navbar.vue"));
  const Footer = defineAsyncComponent(() => import("@/components/Footer.vue"));
</script>
<template>
  <v-app>
    <v-main>
      <Navbar />
      <!-- v-if="!$route.meta.hidenav" -->
      <router-view keep-alive class="mb-12"></router-view>
      <Footer />
    </v-main>
  </v-app>
</template>
<style lang="scss"></style>
