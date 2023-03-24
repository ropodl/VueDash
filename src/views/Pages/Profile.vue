<script setup>
import { useTitle } from "@vueuse/core";
import { mdiCheckboxMarkedCircle, mdiMessage, mdiPlusCircle } from "@mdi/js";
useTitle("Profile Page");
const skills = [
  {
    name: "HTML",
    icon: "fa:fa-brands fa-html5",
  },
  {
    name: "JavaScript",
    icon: "fa:fab fa-js",
  },
  {
    name: "Sass",
    icon: "fa:fab fa-sass",
  },
  {
    name: "Angular",
    icon: "fa:fab fa-angular",
  },
  {
    name: "Vue",
    icon: "fa:fab fa-vuejs",
  },
  {
    name: "React",
    icon: "fa:fab fa-react",
  },
  {
    name: "UI/UX",
    icon: "fa:fas fa-pencil-alt",
  },
];
const elsewhere = [
  {
    title: "staciehall.co",
    link: "https://staciehall.co",
    icon: "fa:fas fa-globe",
  },

  {
    title: "Twitter",
    link: "https://twitter.com",
    icon: "fa:fab fa-twitter",
  },
  {
    title: " Facebook",
    link: "https://",
    icon: "fa:fab fa-facebook",
  },
  {
    title: "Instagram",
    link: "https://",
    icon: "fa:fab fa-instagram",
  },
  {
    title: "LinkedIn",
    link: "https://",
    icon: "fa:fab fa-linkedin",
  },
];
</script>
<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Profile</h1>
      </v-col>
      <v-col cols="12" md="4">
        <v-card border flat>
          <v-card-title>Profile Details</v-card-title>
          <v-divider></v-divider>
          <v-list class="pb-0" color="transparent" density="compact">
            <v-list-item>
              <template v-slot:prepend>
                <v-avatar size="60">
                  <v-img
                    src="https://appstack.bootlab.io/img/avatars/avatar-4.jpg"
                  ></v-img>
                </v-avatar>
              </template>
              <v-list-item-title>Stacie Hall</v-list-item-title>
              <v-list-item-subtitle>Lead Developer</v-list-item-subtitle>
              <template v-slot:append>
                <v-btn icon variant="text">
                  <v-icon :icon="mdiCheckboxMarkedCircle"></v-icon>
                </v-btn>
              </template>
            </v-list-item>
          </v-list>
          <v-card-actions>
            <v-row>
              <v-col cols="6">
                <v-btn block border class="text-capitalize">
                  <v-icon start :icon="mdiPlusCircle"></v-icon>
                  Follow
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn
                  block
                  border
                  class="text-capitalize"
                  :to="{ name: 'Chat' }"
                >
                  <v-icon start :icon="mdiMessage"></v-icon>
                  Message
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
          <!-- <v-divider></v-divider> -->
          <v-card-title>Skills</v-card-title>
          <v-card-text>
            <v-btn
              size="small"
              variant="tonal"
              color="primary"
              class="text-capitalize mb-2 mr-2"
              v-for="skill in skills"
            >
              <v-icon start :icon="skill['icon']"></v-icon>
              {{ skill["name"] }}
            </v-btn>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-title>About</v-card-title>
          <v-card-text>
            <ul class="list-style-none pl-0">
              <li class="mb-3">
                <v-icon start size="small" icon="fa:fas fa-home"></v-icon>
                Lives in San Fransisco, SA
              </li>
              <li class="mb-3">
                <v-icon start size="small" icon="fa:fas fa-briefcase"></v-icon>
                Works at Github
              </li>
              <li class="mb-3">
                <v-icon
                  start
                  size="small"
                  icon="fa:fas fa-map-marker-alt"
                ></v-icon>
                From Boston
              </li>
            </ul>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-title>Elsewhere</v-card-title>
          <v-card-text>
            <ul class="list-style-none">
              <li class="mb-1" v-for="item in elsewhere">
                <v-btn
                  block
                  variant="text"
                  class="text-capitalize d-flex justify-start"
                >
                  <v-icon start :icon="item['icon']"></v-icon>
                  {{ item["title"] }}
                </v-btn>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="8">
        <v-card border flat>
          <v-card-title>Activities</v-card-title>
          <v-divider></v-divider>
          <v-card-text>News Feed here.</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
