<script setup>
import { mdiBell } from "@mdi/js";
import { useTitle } from "@vueuse/core";
useTitle("Alerts Example Page");

let defaultalerts = [
  {
    color: "primary",
  },
  {
    color: "secondary",
  },
  {
    color: "success",
  },
  {
    color: "error",
  },
  {
    color: "warning",
  },
];
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Alerts</h1>
      </v-col>
      <v-col cols="12" md="6">
        <v-card border flat>
          <v-card-title>Default alerts</v-card-title>
          <v-card-subtitle
            >Alerts with contextual background color.</v-card-subtitle
          >
          <v-card-text>
            <v-alert
              v-for="defaultalert in defaultalerts"
              :color="defaultalert.color"
              dismissible
              class="mb-3"
            >
              Hello there! A simple {{ defaultalert.color }} alert — check it
              out!
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card border flat>
          <v-card-title>Icon Type alerts</v-card-title>
          <v-card-subtitle
            >Alerts with icon and background color.</v-card-subtitle
          >
          <v-card-text>
            <v-alert
              v-for="defaultalert in defaultalerts"
              :color="defaultalert.color"
              :type="defaultalert.color"
              dismissible
              class="mb-3"
            >
              Hello there! A simple {{ defaultalert.color }} alert — check it
              out!
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card border flat>
          <v-card-title>Icon alerts</v-card-title>
          <v-card-subtitle
            >Alerts with contextual outline color.</v-card-subtitle
          >
          <v-card-text>
            <v-alert
              v-for="defaultalert in defaultalerts"
              :color="defaultalert.color"
              variant="outlined"
              class="mb-3"
            >
              <v-icon
                start
                :color="defaultalert.color"
                :icon="mdiBell"
              ></v-icon>
              Hello there! A simple {{ defaultalert["color"] }} alert — check it
              out!
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
        <v-card border flat>
          <v-card-title>Dense alerts</v-card-title>
          <v-card-subtitle
            >Alerts with contextual outline color but dense.</v-card-subtitle
          >
          <v-card-text>
            <v-alert
              v-for="defaultalert in defaultalerts"
              :color="defaultalert.color"
              icon="notifications"
              outlined
              dismissible
              dense
            >
              Hello there! A simple {{ defaultalert.color }} alert—check it out!
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
        <v-card border flat>
          <v-card-title>Alerts with additional content</v-card-title>
          <v-card-subtitle>Alerts with large contents.</v-card-subtitle>
          <v-card-text>
            <v-alert
              v-for="defaultalert in defaultalerts"
              :key="defaultalert.id"
              :color="defaultalert.color"
              outlined
              dismissible
            >
              <div class="title">Well Done!</div>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
              <v-divider class="my-2"></v-divider>
              Whenever you need to, be sure to use margin utilities to keep
              things nice and tidy.
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
        <v-card border flat>
          <v-card-title>Alerts with buttons</v-card-title>
          <v-card-subtitle>Alerts with actions.</v-card-subtitle>
          <v-card-text>
            <v-alert
              v-for="defaultalert in defaultalerts"
              :color="defaultalert.color"
              outlined
              dismissible
            >
              <div class="title">Well Done!</div>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
              <v-divider class="my-2"></v-divider>
              <v-btn color="success" class="mr-2">Okay!</v-btn>
              <v-btn color="error">No thanks</v-btn>
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
