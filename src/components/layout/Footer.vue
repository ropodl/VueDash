<script setup>
import { useThemeMode } from "@/composable/isDark";
import { useDark } from "@vueuse/core";
const footerlinks = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Settings",
    href: "/settings",
  },
  {
    text: "Profile",
    href: "/profile",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];
</script>
<template>
  <v-app-bar
    density="compact"
    order="1"
    location="bottom"
    class="border-t d-flex"
  >
    <v-container>
      <v-row align="center">
        <v-col cols="12" sm="6" class="py-0">
          <div>&copy; {{ new Date().getFullYear() }} - VueDash</div>
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <div class="d-flex">
            <v-spacer></v-spacer>
            <v-btn
              size="small"
              :active="false"
              variant="text"
              :color="useThemeMode() ? 'white' : 'grey-darken-5'"
              class="text-capitalize"
              v-for="link in footerlinks"
              :to="link['href']"
            >
              {{ link["text"] }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
