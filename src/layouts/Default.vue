<script setup>
import { defineAsyncComponent } from "vue";
import { useNetwork } from "@vueuse/core";
const { isOnline } = useNetwork();

const Navbar = defineAsyncComponent(() => import("@/components/Navbar.vue"));
const OfflineBanner = defineAsyncComponent(() =>
  import("@/components/layout/OfflineBanner.vue")
);
const Footer = defineAsyncComponent(() => import("@/components/Footer.vue"));
</script>
<template>
  <v-app>
    <v-main>
      <Navbar />
      <OfflineBanner v-if="!isOnline" />
      <router-view keep-alive class="mb-12"></router-view>
      <Footer />
    </v-main>
  </v-app>
</template>
