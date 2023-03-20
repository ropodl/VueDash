<script setup>
import { ref, onMounted } from "vue";
import { useTheme } from "vuetify";
const theme = useTheme();
let language = [
  {
    title: "English",
    abbr: "en",
    src: "https://appstack.bootlab.io/img/flags/us.png",
  },
  {
    title: "Nepali",
    abbr: "np",
    src: "https://appstack.bootlab.io/img/flags/np.png",
  },
];
let currentLanguage = ref("");
let isDarkMode = ref(false);
onMounted(() => {
  isDarkMode.value = localStorage.getItem("isDarkMode") === "true";
  theme.global.name.value = isDarkMode.value ? "dark" : "light";
});
const changeColorMode = () => {
  isDarkMode.value = localStorage.getItem("isDarkMode") !== "true";
  localStorage.setItem("isDarkMode", isDarkMode.value);
  theme.global.name.value = isDarkMode.value ? "dark" : "light";
};
</script>
<template>
  <v-card border flat>
    <v-list lines="three" density="default" class="py-0">
      <v-list-item>
        <v-list-item-title>Dark Mode</v-list-item-title>
        <v-list-item-subtitle>
          Automatically add home screen widgets when downloads complete
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
        </v-list-item-subtitle>
        <template v-slot:append>
          <!-- <v-list-item-action start> -->
          <v-text-field
            hide-details
            density="compact"
            style="width: 180px"
          ></v-text-field>
          <!-- </v-list-item-action> -->
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>Primary Language</v-list-item-title>
        <v-list-item-subtitle>
          What is your favourite language?
        </v-list-item-subtitle>
        <template v-slot:append>
          <!-- <v-list-item-action start> -->
          <v-select
            v-model="currentLanguage"
            :items="language"
            hide-details
            return-object
            density="compact"
            style="width: 180px"
            item-title="title"
            item-value="abbr"
          >
            <template #prepend>
              <v-avatar rounded="0">
                <v-img :src="currentLanguage['src']"></v-img>
              </v-avatar>
            </template>
          </v-select>
          <!-- </v-list-item-action> -->
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>
