<script setup>
import { defineAsyncComponent } from "vue";
import { useNetwork } from "@vueuse/core";
const { isOnline } = useNetwork();

const Navbar = defineAsyncComponent(() =>
  import("@/components/layout/Navbar.vue")
);
const OfflineBanner = defineAsyncComponent(() =>
  import("@/components/layout/OfflineBanner.vue")
);
const Footer = defineAsyncComponent(() =>
  import("@/components/layout/Footer.vue")
);
</script>
<template>
  <v-app>
    <v-layout>
      <Navbar />
      <OfflineBanner v-if="!isOnline" />
      <v-main>
        <router-view></router-view>
      </v-main>
      <Footer />
    </v-layout>
  </v-app>
</template>
