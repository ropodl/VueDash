<script setup>
import { useTitle } from "@vueuse/core";
useTitle("Reset Password Page");
</script>
<template>
  <v-container class="h-100">
    <v-row justify="center" class="h-100">
      <v-col cols="12" md="5" class="h-100">
        <div class="d-flex align-center justify-center h-100 w-100">
          <div class="w-100">
            <v-card variant="text" class="mb-6">
              <v-card-title class="text-center text-h4">
                Reset password
              </v-card-title>
              <v-card-subtitle class="text-center">
                Enter your email to reset your password.
              </v-card-subtitle>
            </v-card>
            <v-card border>
              <v-card-text class="pb-0">
                <v-text-field placeholder="Email Address"></v-text-field>
              </v-card-text>
              <v-btn block size="x-large" class="text-capitalize" rounded="0">
                Reset Password
              </v-btn>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
