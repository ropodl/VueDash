<script setup>
import { onMounted } from "vue";
import { useTheme } from "vuetify";
const theme = useTheme();
onMounted(() => {
  let dark = localStorage.getItem("isDarkMode") === "true";
  theme.global.name.value = dark ? "dark" : "light";
});
</script>
<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
