<script setup>
import { useTitle } from "@vueuse/core";
import "chart.js/auto";
import { defineAsyncComponent } from "vue";
import { Bar, Doughnut, Line } from "vue-chartjs";
import colors from "vuetify/lib/util/colors";

useTitle("Default Dashboard");

// components
const numberpane = defineAsyncComponent(() =>
  import("@/components/dash/numberpane")
);
const feed = defineAsyncComponent(() => import("@/components/dash/dailyfeed"));
const timeline = defineAsyncComponent(() => import("@/components/timeline"));
const salestable = defineAsyncComponent(() =>
  import("@/components/dash/salestable")
);
// data
let revenue = {
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales ($)",
        fill: false,
        backgroundColor: "#d64937",
        borderColor: "#d64937", //find what this is
        data: [2015, 1465, 1487, 1796, 1387, 2123],
      },
      {
        label: "Orders",
        fill: false,
        backgroundColor: "#757575",
        borderColor: "#757575",
        data: [928, 734, 626, 893, 921, 1202],
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
let weeklySales = {
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales ($)",
        fill: true,
        backgroundColor: [
          colors.red.darken1,
          colors.pink.darken1,
          colors.purple.darken1,
          colors.indigo.darken1,
          colors.blue.darken1,
          colors.cyan.darken1,
          colors.teal.darken1,
        ],
        borderColor: "transparent", //find what this is
        data: [2015, 1465, 1487, 1796, 1387, 2123],
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
        intersect: false,
      },
      hover: {
        intersect: true,
      },
    },
  },
};
let sales = {
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales Revenue Data",
        fill: true,
        backgroundColor: [
          colors.red.darken1,
          colors.pink.darken1,
          colors.purple.darken1,
          colors.indigo.darken1,
          colors.blue.darken1,
          colors.cyan.darken1,
          colors.teal.darken1,
        ],
        data: [10, 20, 30, 40, 50, 60, 70],
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
let dailyfeed = [
  {
    avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
    title: "Brunch this weekend?",
    subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
  },
  { divider: true, inset: true },
  {
    avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
    title: "Summer BBQ",
    subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
  },
  { divider: true, inset: true },
  {
    avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
    title: "Oui oui",
    subtitle:
      '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  { divider: true, inset: true },
  {
    avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    title: "Birthday gift",
    subtitle:
      '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
  { divider: true, inset: true },
  {
    avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
    title: "Recipe to try",
    subtitle:
      '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
  },
];
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Welcome back, John Doe!</h1>
      </v-col>
    </v-row>
    <numberpane />
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="7" lg="7" xl="7">
        <v-card flat border class="mb-3">
          <v-card-title class="d-flex">
            Total Revenue <v-spacer></v-spacer>
            <v-chip small color="primary">Monthly</v-chip>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <Line
              :data="revenue.data"
              :options="revenue.options"
              style="height: 400px"
            />
          </v-card-text>
        </v-card>
        <v-card flat border class="mb-3">
          <v-card-title>Calendar</v-card-title>
          <v-divider></v-divider>
          <v-card-text>Currenly not available</v-card-text>
          <!-- <calendar elevation="0" /> -->
        </v-card>
        <v-card flat border>
          <v-card-title>Sales / Revenue</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <Bar
              :data="sales['data']"
              :options="sales['options']"
              style="height: 400px"
            />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="5" lg="5" xl="5">
        <feed />
        <v-card flat border class="mb-3">
          <v-card-title>Weekly Sales</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <Doughnut
              :data="weeklySales['data']"
              :options="weeklySales['options']"
              style="height: 300px"
            />
          </v-card-text>
        </v-card>
        <v-card flat border>
          <v-card-title>Appointments</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="py-0">
            <timeline />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <v-card flat border>
          <v-card-title>Latest Projects</v-card-title>
          <v-divider></v-divider>
          <salestable />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
