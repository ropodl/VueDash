<script setup>
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useTheme } from "vuetify";

const theme = useTheme();
const { locale } = useI18n();

onMounted(() => {
  let dark = localStorage.getItem("isDarkMode") === "true";
  theme.global.name.value = dark ? "dark" : "light";

  let language = localStorage.getItem("isLanguage")
    ? localStorage.getItem("isLanguage") === "us"
    : true;
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
