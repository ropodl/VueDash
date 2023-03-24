<script setup>
import { useTitle } from "@vueuse/core";
useTitle("Sign Up Page");
</script>
<template>
  <v-container class="h-100">
    <v-row justify="center" class="h-100">
      <v-col cols="12" md="6" class="h-100">
        <div class="d-flex align-center justify-center h-100">
          <div>
            <v-card variant="text" class="mb-6">
              <v-card-title class="text-center text-h4">
                Get started
              </v-card-title>
              <v-card-subtitle class="text-center">
                Start creating the best possible user experience for you
                customers.
              </v-card-subtitle>
            </v-card>
            <v-card border>
              <v-card-text class="pb-0">
                <v-text-field placeholder="Full Name"></v-text-field>
                <v-text-field placeholder="Company Name"></v-text-field>
                <v-text-field placeholder="Email Address"></v-text-field>
                <v-text-field placeholder="Password"></v-text-field>
              </v-card-text>
              <v-btn block size="x-large" class="text-capitalize" rounded="0">
                Sign Up
              </v-btn>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
