<script setup>
import { useTitle } from "@vueuse/core";
useTitle("404 Error Page");
</script>
<template>
  <v-container class="h-100">
    <v-row justify="center" class="h-100">
      <v-col cols="12" md="5" class="h-100">
        <div class="d-flex align-center text-center h-100">
          <div>
            <div class="text-h1 font-weight-medium">404</div>
            <div class="text-h4 mb-3">Page not found.</div>
            <div class="mb-3">
              The page you are looking for might have been removed.
            </div>
            <v-btn variant="tonal" size="large" class="text-capitalize" to="/"
              >Return to Website</v-btn
            >
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
