<script setup>
import {
  mdiCheckboxMarkedCircle,
  mdiMessage,
  mdiChevronDown,
  mdiPlusCircle,
} from "@mdi/js";
let skills = [
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
let items = [
  {
    title: "Action",
    route: "/",
  },
  {
    title: "Another Action",
    route: "/",
  },
  {
    title: "Something else here",
    route: "/",
  },
];
</script>
<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Profile</h1>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
        <v-card border flat>
          <v-card-title>Profile Details</v-card-title>
          <v-divider></v-divider>
          <v-list color="transparent" density="compact">
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
                <v-btn block border class="text-capitalize">
                  <v-icon start :icon="mdiMessage"></v-icon>
                  Message
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
          <v-divider></v-divider>
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
            <ul class="list-style-none pl-0">
              <li class="mb-3">
                <a
                  class="text-decoration-none"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-icon start size="small" icon="fa:fas fa-globe"></v-icon>
                  staciehall.co
                </a>
              </li>
              <li class="mb-3">
                <a
                  class="text-decoration-none"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-icon start size="small" icon="fa:fab fa-twitter"></v-icon>
                  Twitter
                </a>
              </li>
              <li class="mb-3">
                <a
                  class="text-decoration-none"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-icon start size="small" icon="fa:fab fa-facebook"></v-icon>
                  Facebook
                </a>
              </li>
              <li class="mb-3">
                <a
                  class="text-decoration-none"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-icon
                    start
                    size="small"
                    icon="fa:fab fa-instagram"
                  ></v-icon>
                  Instagram
                </a>
              </li>
              <li class="mb-3">
                <a
                  class="text-decoration-none"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-icon start size="small" icon="fa:fab fa-linkedin"></v-icon>
                  LinkedIn
                </a>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
        <v-card border flat>
          <v-card-title class="d-flex justify-space-between">
            Activities
            <v-menu offset-y>
              <template v-slot:activator="{ props }">
                <v-btn
                  icon
                  color="white"
                  variant="text"
                  size="x-small"
                  v-bind="props"
                >
                  <v-icon :icon="mdiChevronDown"></v-icon>
                </v-btn>
              </template>
              <v-list density="compact">
                <v-list-item v-for="item in items">
                  <v-list-item-title>{{ item["title"] }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
