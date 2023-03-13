<script setup>
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
  <v-footer class="border-t d-flex">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6" class="py-0">
          <div>&copy; {{ new Date().getFullYear() }} - VueDash</div>
        </v-col>
        <v-col cols="12" md="6" class="py-0">
          <div class="d-flex">
            <v-spacer></v-spacer>
            <v-btn variant="text" color="white" class="text-capitalize" v-for="link in footerlinks" :to="link['href']">
              {{ link.text }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
