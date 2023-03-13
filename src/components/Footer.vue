<template>
  <v-footer class="d-flex">
    <!-- <v-container class="py-0">
      <v-row>
        <v-col cols="12" class="ma-0 pa-0"> -->
    <!-- <v-spacer></v-spacer> -->
    <div>&copy; {{ new Date().getFullYear() }} - AppDash</div>
    <v-spacer></v-spacer>
    <v-btn variant="text" class="text-capitalize" v-for="link in footerlinks" :to="link['href']">
      {{ link.text }}
    </v-btn>
    <!-- </v-col>
      </v-row>
    </v-container> -->
  </v-footer>
</template>
<script>
  export default {
    name: "Footer",
    data() {
      return {
        footerlinks: [
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
        ],
      };
    },
  };
</script>
<!-- <style scoped>
  .v-application a {
    text-decoration: none !important;
    color: none;
  }
</style> -->
