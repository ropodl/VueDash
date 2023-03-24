<script setup>
import { useTitle } from "@vueuse/core";
useTitle("Editors Example Page");
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Editor</h1>
      </v-col>
      <v-col cols="12">
        <v-card border flat>
          <v-card-title>Quill</v-card-title>
          <v-card-text>
            Modern WYSIWYG editor built for compatibility and extensibility.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
