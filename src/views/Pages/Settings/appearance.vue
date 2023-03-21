<script setup>
import { ref, onMounted } from "vue";
import { useTheme } from "vuetify";
import { useI18n } from "vue-i18n";
const theme = useTheme();
const { t, locale } = useI18n();
let language = [
  {
    title: "English",
    abbr: "us",
  },
  {
    title: "Nepali",
    abbr: "np",
  },
];
let currentLanguage = ref("");
let isDarkMode = ref(false);
let primaryColor = ref("");
onMounted(() => {
  // theme check
  isDarkMode.value = localStorage.getItem("isDarkMode") === "true";
  theme.global.name.value = isDarkMode.value ? "dark" : "light";
  // language check
  let language = localStorage.getItem("isLanguage") ?? true;
  locale.value = language ? "us" : "np";
  currentLanguage.value = language ? "us" : "np";
  // primary color check (not working currently, more research needed)
  let color = localStorage.getItem("isPrimaryColor") ?? "#d64937"; //default color #2d2d2d
  console.log(color);
  theme.global.current.value.colors.primary = color;
});
const changeColorMode = () => {
  isDarkMode.value = localStorage.getItem("isDarkMode") !== "true";
  localStorage.setItem("isDarkMode", isDarkMode.value);
  theme.global.name.value = isDarkMode.value ? "dark" : "light";
};
const changeLanguage = () => {
  locale.value = currentLanguage.value;
  localStorage.setItem("isLanguage", currentLanguage.value);
};
const changePrimaryColor = () => {
  theme.global.current.value.colors.primary = primaryColor.value;
  console.log(primaryColor);
};
</script>
<template>
  <v-card border flat>
    <v-list lines="three" density="default" class="py-0">
      <v-list-item>
        <v-list-item-title>Dark Mode</v-list-item-title>
        <v-list-item-subtitle>
          Simple to eyes but dark on day.
        </v-list-item-subtitle>
        <template v-slot:append>
          <v-list-item-action start>
            <v-switch
              v-model="isDarkMode"
              hide-details
              @change="changeColorMode"
            ></v-switch>
          </v-list-item-action>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>Primary Color</v-list-item-title>
        <v-list-item-subtitle>
          What is your favourite color?
          {{ primaryColor }}
        </v-list-item-subtitle>
        <template v-slot:append>
          <input
            v-model="primaryColor"
            type="color"
            style="width: 100px"
            @change="changePrimaryColor"
          />
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>Primary Language</v-list-item-title>
        <v-list-item-subtitle>
          What is your favourite language?
        </v-list-item-subtitle>
        <template v-slot:append>
          <v-select
            single-line
            hide-details
            v-model="currentLanguage"
            :items="language"
            @update:modelValue="changeLanguage"
            density="compact"
            style="width: 180px"
            item-title="title"
            item-value="abbr"
          ></v-select>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>
