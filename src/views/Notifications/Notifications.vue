<script setup>
import { ref } from "vue";
import { useTitle } from "@vueuse/core";
useTitle("Notifications Example Page");

let snackbar = ref(false);
let x = ref("center");
let y = ref("bottom");
let location = ref("");
let type = "";
let duration = "";
let timeout = "6000";
let types = ["Primary", "Error", "Success", "Warning"];
let durations = ["2.5s", "5s", "7.5s", "10s"];

const showsnackbar = () => {
  location.value = x.value + " " + y.value;
  console.log(location.value);
  snackbar.value = true;
};

const getLocation = () => {
  console.log("y", x);
  console.log("y", y);
};
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Notifications</h1>
      </v-col>
      <v-col cols="12">
        <v-card border flat>
          <v-card-title>Snackbar Notifications</v-card-title>
          <v-card-text> Simple JavaScript toast notifications</v-card-text>
          <v-form ref="form" @submit.prevent="showsnackbar">
            <v-row>
              <v-col cols="12" md="6" class="py-0">
                <v-card-text>
                  <v-text-field
                    label="Enter a title"
                    outlined
                    dense
                  ></v-text-field>
                  <v-text-field label="Message" outlined dense></v-text-field>
                  <v-select
                    label="Type"
                    v-model="type"
                    :items="types"
                    outlined
                    dense
                  ></v-select>
                  <v-select
                    label="Duration"
                    v-model="duration"
                    :items="durations"
                    outlined
                    dense
                  ></v-select>
                  <v-checkbox
                    label="Progress bar"
                    value="John"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    label="Close button"
                    value="John"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    label="Newest on top"
                    value="John"
                    hide-details
                  ></v-checkbox>
                </v-card-text>
              </v-col>
              <v-col cols="12" md="6" class="py-0">
                <v-card-title class="pb-0">Position X</v-card-title>
                <v-card-text>
                  <v-radio-group v-model="x" hide-details density="compact">
                    <v-radio
                      density="compact"
                      label="Right"
                      value="right"
                    ></v-radio>
                    <v-radio
                      density="compact"
                      label="Center"
                      value="center"
                    ></v-radio>
                    <v-radio
                      density="compact"
                      label="Left"
                      value="left"
                    ></v-radio>
                  </v-radio-group>
                </v-card-text>
                <v-card-title>Position Y</v-card-title>
                <v-card-text>
                  <v-radio-group v-model="y" hide-details density="compact">
                    <v-radio label="Top" value="top"></v-radio>
                    <v-radio
                      density="compact"
                      label="Bottom"
                      value="bottom"
                    ></v-radio>
                  </v-radio-group>
                </v-card-text>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn class="px-5" color="primary" type="submit"
                >Show notification</v-btn
              >
              <v-btn text class="px-5">Clear all</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-snackbar
    v-model="snackbar"
    :timeout="timeout"
    :location="location"
  >
    Hello world
  </v-snackbar>
</template>
