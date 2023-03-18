<script setup>
import { defineAsyncComponent } from "vue";
import { useNetwork } from "@vueuse/core";

const { isOnline } = useNetwork();

console.log(useNetwork());

const Navbar = defineAsyncComponent(() => import("@/components/Navbar.vue"));
const Footer = defineAsyncComponent(() => import("@/components/Footer.vue"));
</script>
<template>
  <v-app>
    <v-main>
      <Navbar />
      <v-banner
        v-if="isOnline"
        icon="mdi-wifi-strength-alert-outline"
        color="primary"
        :stacked="false"
        density="compact"
        class="d-flex"
      >
        <template v-slot:text>
          <div>No Internet connection</div>
        </template>

        <template v-slot:actions>
          <v-btn class="text-capitalize mr-3 px-4" variant="tonal">
            Dismiss
          </v-btn>
          <v-btn class="text-capitalize px-4" variant="tonal"> Retry </v-btn>
        </template>
      </v-banner>
      <router-view keep-alive class="mb-12"></router-view>
      <Footer />
    </v-main>
  </v-app>
</template>
<style>
div.v-banner-actions {
  margin: 0 !important;
}
</style>
