<script setup>
import { useTitle } from "@vueuse/core";
useTitle("500 Error Page");
</script>
<template>
  <v-container class="h-100">
    <v-row justify="center" class="h-100">
      <v-col cols="12" md="5" class="h-100">
        <div class="d-flex align-center text-center h-100">
          <div>
            <div class="text-h1 font-weight-medium">500</div>
            <div class="text-h4 mb-3">Internal server error.</div>
            <div class="mb-3">
              The server encountered something unexpected that didn't allow it
              to complete the request.
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
