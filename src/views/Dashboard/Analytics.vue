<script setup>
import { onMounted, ref } from "vue";
import { useTitle } from "@vueuse/core";
import { Bar, Radar } from "vue-chartjs";
import "chart.js/auto";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world-merc.js";
import * as Vibrant from "node-vibrant";

useTitle("Analytics Dashboard");

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
    sortable: false,
    key: "language",
  },
  {
    title: "Users",
    align: "start",
    sortable: false,
    key: "users",
  },
  {
    title: "Users in %",
    align: "center",
    sortable: false,
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
const device = {
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Data One",
        backgroundColor: "#f87979",
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      tooltips: {
        position: "average",
        intersect: false,
      },
      hover: {
        intersect: false,
      },
    },
  },
};
const interests = {
  data: {
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBackgroundColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(179,181,198,1)",
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      tooltips: {
        position: "average",
        intersect: false,
      },
      hover: {
        intersect: false,
      },
    },
  },
};
let trafficheader = [
  {
    title: "Source",
    sortable: false,
    key: "source",
  },
  {
    title: "Users",
    sortable: false,
    key: "users",
  },
  {
    title: "Sessions",
    sortable: false,
    key: "sessions",
  },
  {
    title: "Bounce Rate",
    sortable: false,
    key: "bounce",
  },
  {
    title: "Avg. Session Duration",
    sortable: false,
    key: "duration",
  },
];
let traffic = [
  {
    source: "Google",
    users: "1023",
    sessions: "1265",
    bounce: "27.23%",
    duration: "00:06:25",
  },
  {
    source: "Direct",
    users: "872",
    sessions: "1077",
    bounce: "32.70%",
    duration: "00:09:18",
  },
  {
    source: "Facebook",
    users: "812",
    sessions: "1003",
    bounce: "24.83%",
    duration: "00:05:56",
  },
  {
    source: "GitHub",
    users: "713",
    sessions: "881",
    bounce: "38.09%",
    duration: "00:06:19",
  },
  {
    source: "DuckDuckGo",
    users: "693",
    sessions: "856",
    bounce: "37.36%",
    duration: "00:09:12",
  },
  {
    source: "Pinterest",
    users: "623",
    sessions: "770",
    bounce: "52.81%",
    duration: "00:03:10",
  },
  {
    source: "Bing",
    users: "504",
    sessions: "623",
    bounce: "66.76%",
    duration: "00:04:42",
  },
  {
    source: "Twitter",
    users: "462",
    sessions: "571",
    bounce: "31.53%",
    duration: "00:08:05",
  },
];
let sourceHeader = [
  {
    title: "Source",
    sortable: false,
    key: "source",
  },
  {
    title: "Revenue",
    sortable: false,
    key: "revenue",
  },
  {
    title: "Value",
    sortable: false,
    key: "value",
  },
];
let source = [
  {
    source: "Direct",
    revenue: "$2602",
    value: "+43%",
  },
  { source: "Affiliate", revenue: "$ 1253", value: "+13%" },
  { source: "E-mail", revenue: "$ 541", value: "+24%" },
  { source: "Other", revenue: "$ 1465", value: "+11%" },
];
let sourceData = {
  labels: [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "My Second Dataset",
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
};
var markers = [
  { name: "Egypt", coords: [26.8206, 30.8025] },
  { name: "Russia", coords: [61.524, 105.3188] },
  { name: "Canada", coords: [56.1304, -106.3468] },
  { name: "Greenland", coords: [71.7069, -42.6043] },
  { name: "Brazil", coords: [-14.235, -51.9253] },
];
onMounted(() => {
  jsVectorMap({
    map: "world_merc",
    selector: "#map",
    zoomButtons: false,
    zoomOnScroll: false,
    showTooltip: false,
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

const colors = ref([
  {
    url: "https://lokeshdhakar.com/projects/color-thief/image-1.e59bc3bd.jpg",
    palette: null,
  },
  {
    url: "https://lokeshdhakar.com/projects/color-thief/image-1.e59bc3bd.jpg",
    palette: null,
  },
  {
    url: "https://lokeshdhakar.com/projects/color-thief/image-1.e59bc3bd.jpg",
    palette: null,
  },
]);

const extractColors = (image, index) => {
  new Vibrant(image) // pass an options object to set the quantizer option
    .getPalette()
    .then((palette) => {
      colors.value[index].palette = palette;
    })
    .catch((err) => {
      console.error(err);
    });
};
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
            <v-card border flat>
              <v-card-title class="d-flex justify-space-between">
                {{ carddetail.title }}
                <v-chip size="small" :color="carddetail['color']">
                  {{ carddetail["badgetext"] }}
                </v-chip>
              </v-card-title>
              <v-card-text>
                <div class="d-flex align-center justify-space-between">
                  <span class="headline font-weight-bold">
                    {{ carddetail["number"] }}
                  </span>
                  <span class="title font-weight-light">
                    {{ carddetail["percentage"] }}%
                  </span>
                </div>
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
        <v-card border flat>
          <v-card-title>Total Revenue</v-card-title>
          <v-divider></v-divider>
          <div id="map"></div>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
        <v-card border flat>
          <v-card-title>Languages</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-0">
            <v-data-table
              hide-default-footer
              :headers="languageHeader"
              :items="languages"
            >
              <template v-slot:item.userpercent="{ item }">
                <v-progress-linear
                  color="primary"
                  height="20"
                  :model-value="item.raw['userpercent']"
                  rounded
                >
                  {{ item.raw.userpercent }}%
                </v-progress-linear>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card border flat class="h-100">
          <v-card-title>Mobile / Desktop</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <Bar
              :data="device['data']"
              :options="device['options']"
              style="height: 426px"
            />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card border flat>
          <v-card-title>Interests</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <Radar
              :data="interests['data']"
              :options="interests['options']"
              style="height: 426px"
            />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card border flat>
          <v-card-title>Source / Medium</v-card-title>
          <v-divider></v-divider>
          <v-divider></v-divider>
          <v-data-table :headers="sourceHeader" :items="source"></v-data-table>
        </v-card>
      </v-col>
      <v-col cols="12" md="8">
        <v-card border flat>
          <v-card-title>Traffic</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-0">
            <v-data-table :headers="trafficheader" :items="traffic">
              <template v-slot:item.bouncerate="{ item }">
                <span class="error--text"> {{ item.raw.bouncerate }}% </span>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
#map {
  width: 100%;
  height: 300px;
}
</style>
