<script setup>
import { onMounted } from "vue";
import { useTheme } from "vuetify";
import { useI18n } from "vue-i18n";

const theme = useTheme();
const { locale } = useI18n();

onMounted(() => {
  let dark = localStorage.getItem("isDarkMode") === "true";
  theme.global.name.value = dark ? "dark" : "light";
  let language = localStorage.getItem("isLanguage") === "us";
  locale.value = language ? "us" : "np";
});
</script>
<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
