<script setup>
import { mdiClose, mdiWifiStrengthAlertOutline } from "@mdi/js";
</script>
<template>
  <v-banner
    sticky
    lines="one"
    :icon="mdiWifiStrengthAlertOutline"
    text="You are currently not connect to the internet."
  >
    <template v-slot:actions>
      <v-btn icon size="small" color="transparent">
        <v-icon color="white" :icon="mdiClose"></v-icon>
      </v-btn>
    </template>
  </v-banner>
</template>
<style>
.v-banner__content {
  align-content: center !important;
  display: grid !important;
}
</style>
