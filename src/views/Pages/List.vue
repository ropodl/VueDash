<script setup>
import { useTitle } from "@vueuse/core";
useTitle("Project List");
let todos = [
  {
    id: "1",
    title: "Landing Page Redesign",
    status: "Finished",
    desc: "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
    avatars: [
      {
        src: "https://appstack.bootlab.io/img/avatars/avatar.jpg",
      },
      {
        src: "https://appstack.bootlab.io/img/avatars/avatar-2.jpg",
      },
      {
        src: "https://appstack.bootlab.io/img/avatars/avatar-3.jpg",
      },
    ],
    progress: 100,
  },
  {
    id: "2",
    cover_image:
      "https://images.unsplash.com/photo-1587666146633-78b032acb7c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: "Fix Form Validation",
    status: "In Progress",
    desc: "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
    avatars: [
      {
        src: "https://appstack.bootlab.io/img/avatars/avatar.jpg",
      },
      {
        src: "https://appstack.bootlab.io/img/avatars/avatar-2.jpg",
      },
      {
        src: "https://appstack.bootlab.io/img/avatars/avatar-3.jpg",
      },
      {
        src: "https://appstack.bootlab.io/img/avatars/avatar.jpg",
      },
      {
        src: "https://appstack.bootlab.io/img/avatars/avatar-2.jpg",
      },
      {
        src: "https://appstack.bootlab.io/img/avatars/avatar-3.jpg",
      },
    ],
    progress: 75,
  },
];

const getColor = (progress) => {
  if (progress < 100) return "warning";
  else return "success";
};
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Project List</h1>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4" v-for="todo in todos">
        <v-card border flat>
          <template v-if="todo['cover_image']">
            <v-img cover height="150" :src="todo['cover_image']">
              <div class="w-100 h-100 d-flex flex-column">
                <v-card-text class="d-flex justify-end">
                  <v-chip
                    variant="flat"
                    size="small"
                    :color="getColor(todo['progress'])"
                  >
                    {{ todo["status"] }}
                  </v-chip>
                </v-card-text>
              </div>
            </v-img>
            <v-progress-linear
              :color="getColor(todo['progress'])"
              height="6"
              :model-value="todo['progress']"
              striped
            ></v-progress-linear>
          </template>
          <v-card-title>{{ todo["title"] }}</v-card-title>
          <v-card-text class="pt-0">
            {{ todo["desc"] }}
          </v-card-text>
          <v-card-text class="d-flex align-center pt-0">
            <template v-for="(avatar, i) in todo['avatars'].slice(0, 3)">
              <v-avatar class="mr-1" size="40">
                <v-img :src="avatar['src']"></v-img>
              </v-avatar>
            </template>
            +20 more available
            <v-spacer></v-spacer>
          </v-card-text>
          <v-card-text class="pt-0">
            <div class="d-flex justify-space-between body-1">
              <span> Progress </span>
              <span>{{ todo["progress"] }}% </span>
            </div>
          </v-card-text>
          <v-card-text class="pa-0">
            <v-progress-linear
              :color="getColor(todo['progress'])"
              height="6"
              :model-value="todo['progress']"
              striped
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
