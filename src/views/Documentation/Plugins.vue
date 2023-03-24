<script setup>
import { useTitle } from "@vueuse/core";
useTitle("Plugins Page");
const plugins = [
  {
    name: "Vuetify",
    link: "https://vuetifyjs.com/en/introduction/why-vuetify/",
  },
  {
    name: "Vue i18n",
    link: "https://vue-i18n.intlify.dev/guide/",
  },
  {
    name: "VueUse",
    link: "https://vueuse.org/guide/",
  },
  {
    name: "Chart.js",
    link: "https://www.chartjs.org/",
  },
  {
    name: "ApexCharts",
    link: "https://apexcharts.com/",
  },
];
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Plugins</h1>
      </v-col>
      <v-col cols="12">
        <v-card border flat>
          <v-card-text>
            Thanks to all these following libraries/plugins, etc. for their
            respective code. We use these code to build VuetifyDash.
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text class="pa-0">
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Documentation / Website</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="plugin in plugins">
                  <td>{{ plugin.name }}</td>
                  <td>
                    <a
                      :href="plugin['link']"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {{ plugin.link }}
                    </a>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
