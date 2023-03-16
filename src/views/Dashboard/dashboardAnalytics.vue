<script setup>
import { onMounted } from "vue";
import { mdiChevronDown } from "@mdi/js";

import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world-merc.js";

let carddetails = [
  {
    title: "Visitors",
    badgetext: "Today",
    number: "17.212",
    percentage: "57",
    color: "primary",
  },
  {
    title: "Bounce",
    badgetext: "Annual",
    number: "2.364",
    percentage: "82",
    color: "warning",
  },
  {
    title: "Real-Time",
    badgetext: "Monthly",
    number: "1.856",
    percentage: "64",
    color: "blue darken-4",
  },
  {
    title: "Activity",
    badgetext: "Yearly",
    number: "57.300",
    percentage: "32",
    color: "success",
  },
];
let languageHeader = [
  {
    title: "Language",
    align: "start",
    key: "language",
  },
  {
    title: "Users",
    align: "start",
    key: "users",
  },
  {
    title: "Users in %",
    align: "center",
    key: "userpercent",
  },
];
let languages = [
  {
    language: "en-us",
    users: "735",
    userpercent: "43",
  },
  {
    language: "en-gb",
    users: "223",
    userpercent: "27",
  },
  {
    language: "fr-fr",
    users: "181",
    userpercent: "22",
  },
  {
    language: "es-es",
    users: "132",
    userpercent: "16",
  },
  {
    language: "de-de",
    users: "118",
    userpercent: "15",
  },
  {
    language: "ru-ru",
    users: "98",
    userpercent: "13",
  },
];
let trafficheader = [
  {
    title: "Source",
    align: "start",
    value: "source",
  },
  {
    title: "Users",
    align: "center",
    value: "users",
  },
  {
    title: "Sessions",
    align: "center",
    value: "sessions",
  },
  {
    title: "Bounce Rate",
    align: "center",
    value: "bouncerate",
  },
  {
    title: "Avg. Session Duration",
    align: "end",
    value: "sessionduration",
  },
];
let traffic = [
  {
    source: "Google",
    users: "1023",
    sessions: "1265",
    bouncerate: "27.23",
    sessionduration: "00:06:18",
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
let sourceHeader = [
  {
    title: "Source",
  },
  {
    title: "Revenue",
  },
  {
    title: "Value",
  },
];
// Source 	Revenue 	Value
// Direct 	$ 2602 	+43%
// Affiliate 	$ 1253 	+13%
// E-mail 	$ 541 	+24%
// Other 	$ 1465 	+11%
let source = [{}];

var markers = [
  { name: "Egypt", coords: [26.8206, 30.8025] },
  { name: "Russia", coords: [61.524, 105.3188] },
  { name: "Canada", coords: [56.1304, -106.3468] },
  { name: "Greenland", coords: [71.7069, -42.6043] },
  { name: "Brazil", coords: [-14.235, -51.9253] },
];
onMounted(() => {
  new jsVectorMap({
    map: "world_merc",
    selector: "#map",
    zoomButtons: false,
    zoomOnScroll: true,
    regionStyle: {
      initial: {
        fill: "#d1d5db",
      },
    },
    labels: {
      markers: {
        render: (marker) => marker.name,
      },
    },
    markersSelectable: true,
    selectedMarkers: markers.map((marker, index) => {
      var name = marker.name;

      if (name === "Russia" || name === "Brazil") {
        return index;
      }
    }),
    markers: markers,
    markerStyle: {
      initial: { fill: "#5c5cff" },
      selected: { fill: "#ff5050" },
    },
    markerLabelStyle: {
      initial: {
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: 13,
      },
    },
  });
});
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Welcome back, John Doe!</h1>
      </v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12" sm="6" v-for="carddetail in carddetails">
            <v-card border>
              <v-card-title class="d-flex justify-space-between">
                {{ carddetail.title }}
                <v-chip size="small" :color="carddetail['color']">
                  {{ carddetail["badgetext"] }}
                </v-chip>
              </v-card-title>
              <v-card-text>
                <v-flex class="d-flex align-center justify-space-between">
                  <span class="headline font-weight-bold">
                    {{ carddetail["number"] }}
                  </span>
                  <span class="title font-weight-light">
                    {{ carddetail["percentage"] }}%
                  </span>
                </v-flex>
              </v-card-text>
              <v-card-text class="pa-0">
                <v-progress-linear
                  height="6"
                  rounded="0"
                  :color="carddetail['color']"
                  :model-value="carddetail['percentage']"
                  striped
                ></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
        <v-card border>
          <v-card-title class="d-flex justify-space-between">
            Total Revenue
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                  icon
                  color="white"
                  variant="text"
                  size="small"
                  v-bind="props"
                >
                  <v-icon :icon="mdiChevronDown"></v-icon>
                </v-btn>
              </template>
              <v-list density="compact">
                <v-list-item v-for="item in items">
                  <v-list-item-title>{{ item.title }} </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-divider></v-divider>
          <!-- <v-card-text class="px-0"> -->
          <div id="map"></div>
          <!-- </v-card-text> -->
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
        <v-card border>
          <v-card-title class="d-flex justify-space-between">
            Languages
            <v-menu offset-y>
              <template v-slot:activator="{ props }">
                <v-btn
                  icon
                  color="white"
                  variant="text"
                  size="small"
                  v-bind="props"
                >
                  <v-icon :icon="mdiChevronDown"></v-icon>
                </v-btn>
              </template>
              <v-list density="compact">
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title @click="alert('awdaw')"
                    >{{ item.title }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-0">
            <v-data-table
              hide-default-footer
              :headers="languageHeader"
              :items="languages"
            >
              <!-- <template v-slot:item.userpercent="{ item }">
                <v-progress-linear
                  color="primary"
                  height="20"
                  :model-value="item.raw['userpercent']"
                  rounded
                >
                </v-progress-linear>
                {{ item.userpercent }}%
              </template> -->

              <template v-slot:item.userpercent="{ item }">
                <v-chip color="error">
                  {{ item.raw.calories }}
                </v-chip>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card border>
          <v-card-title class="d-flex justify-space-between">
            Mobile / Desktop
            <v-menu offset-y>
              <template v-slot:activator="{ props }">
                <v-btn
                  icon
                  color="white"
                  variant="text"
                  size="small"
                  v-bind="props"
                >
                  <v-icon :icon="mdiChevronDown"></v-icon>
                </v-btn>
              </template>
              <v-list density="compact">
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title @click="alert('awdaw')"
                    >{{ item.title }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text> Insert bar chart jokes here </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card border>
          <v-card-title class="d-flex justify-space-between">
            Interests
            <v-menu offset-y>
              <template v-slot:activator="{ props }">
                <v-btn
                  icon
                  color="white"
                  variant="text"
                  size="small"
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
          <v-card-text> Insert Radar chart jokes here </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card border>
          <v-card-title class="d-flex justify-space-between">
            Source / Medium
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                  icon
                  color="white"
                  variant="text"
                  size="small"
                  v-bind="props"
                >
                  <v-icon :icon="mdiChevronDown"></v-icon>
                </v-btn>
              </template>
              <v-list density="compact">
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title v-text="item['title']"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text> Insert Pie chart jokes here </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="8">
        <v-card border>
          <v-card-title class="d-flex justify-space-between">
            Traffic
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                  icon
                  color="white"
                  variant="text"
                  size="small"
                  v-bind="props"
                >
                  <v-icon :icon="mdiChevronDown"></v-icon>
                </v-btn>
              </template>
              <v-list density="compact">
                <v-list-item v-for="item in items">
                  <v-list-item-title v-text="item['title']"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-0">
            <v-data-table :headers="trafficheader" :items="traffic">
              <template v-slot:item.bouncerate="{ item }">
                <span class="error--text"> {{ item.bouncerate }}% </span>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style>
#map {
  width: 100%;
  height: 300px;
}
</style>
