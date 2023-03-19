<script setup>
import { onMounted, ref, reactive } from "vue";
let windowSize = reactive({
  x: 0,
  y: 0,
});
let currentTab = ref("Appearance");
let tabs = [
  {
    title: "Appearance",
    link: "/settings/appearance",
  },
  {
    title: "Account",
    link: "/settings/account",
  },
  // {
  //   title: "Password",
  //   link: "/settings/password",
  // },
  {
    title: "Privacy and Safety",
    link: "/settings/privacy-safety",
  },
  {
    title: "Email and Notifications",
    link: "/settings/email-notifications",
  },
  {
    title: "Web Notifications",
    link: "/settings/web-notifications",
  },
  {
    title: "Widgets",
    link: "/settings/widgets",
  },
  // {
  //   title: "Your Data",
  //   link: "/settings/your-data",
  // },
  // {
  //   title: "Delete Account",
  //   link: "/settings/delete-account",
  // },
];
onMounted(() => {
  onResize();
});
const onResize = () => {
  windowSize.x = window.innerWidth;
  windowSize.y = window.innerHeight;
};
</script>
<template>
  <v-container>
    <v-row v-resize="onResize">
      <v-col cols="12" class="py-0">
        <h1>{{ currentTab }} Settings</h1>
      </v-col>
      <v-col cols="12" md="3">
        <v-card border flat>
          <v-tabs
            v-model="currentTab"
            :direction="windowSize.x >= 700 ? 'vertical' : 'horizontal'"
          >
            <v-tab
              class="text-capitalize"
              v-for="tab in tabs"
              :value="tab['title']"
              :to="tab['link']"
            >
              {{ tab["title"] }}
            </v-tab>
          </v-tabs>
        </v-card>
      </v-col>
      <v-col cols="12" md="9">
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>
