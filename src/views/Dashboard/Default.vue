<script setup>
import { defineAsyncComponent } from "vue";
import colors from "vuetify/lib/util/colors";
import { useTitle } from "@vueuse/core";
useTitle("Default Dashboard");
// components
const numberpane = defineAsyncComponent(() =>
  import("@/components/default-dash/numberpane")
);
// const calendar = defineAsyncComponent(() => import("@/components/calendar"));
const timeline = defineAsyncComponent(() => import("@/components/timeline"));
const chartjs = defineAsyncComponent(() =>
  import("@/components/chartjs/chartjs")
);
// data
let revenuedata = {
  id: "totalrevenue",
  type: "line",
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
    maintainAspectRatio: true,
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
};
let weeklysalesdata = {
  id: "weeklysales",
  type: "dougnut",
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
    maintainAspectRatio: true,
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
};
let salesrevenuedata = {
  id: "salesrevenue",
  type: "bar",
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
};
let header = [
  {
    title: "Name",
    align: "start",
    key: "name",
  },
  {
    title: "Start Date",
    align: "center",
    key: "startdate",
  },
  {
    title: "End Date",
    align: "center",
    key: "enddate",
  },
  {
    title: "Status",
    align: "center",
    key: "status",
  },
  {
    title: "Assignee",
    align: "center",
    key: "assignee",
  },
];
let project = [
  {
    name: "Project Apollo",
    startdate: "01/01/2018",
    enddate: "31/06/2018",
    status: "Done",
    assignee: "Carl Jenkins",
  },
  {
    name: "Project Fireball",
    startdate: "01/01/2018",
    enddate: "31/06/2018",
    status: "In Progress",
    assignee: "Carl Jenkins",
  },
  {
    name: "Project Hades",
    startdate: "01/01/2018",
    enddate: "31/06/2018",
    status: "Cancelled",
    assignee: "Carl Jenkins",
  },
  {
    name: "Project Nitro",
    startdate: "01/01/2018",
    enddate: "31/06/2018",
    status: "Pending",
    assignee: "Carl Jenkins",
  },
  {
    name: "Project Pheonix",
    startdate: "01/01/2018",
    enddate: "31/06/2018",
    status: "Done",
    assignee: "Carl Jenkins",
  },
  {
    name: "Project Romeo",
    startdate: "01/01/2018",
    enddate: "31/06/2018",
    status: "Done",
    assignee: "Carl Jenkins",
  },
  {
    name: "Project Wombat",
    startdate: "01/01/2018",
    enddate: "31/06/2018",
    status: "Done",
    assignee: "Carl Jenkins",
  },
  {
    name: "Project X",
    startdate: "01/01/2018",
    enddate: "31/06/2018",
    status: "In Progress",
    assignee: "Carl Jenkins",
  },
  {
    name: "Project Zirco",
    startdate: "01/01/2018",
    enddate: "31/06/2018",
    status: "Done",
    assignee: "Carl Jenkins",
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
// methods
const getColor = (status) => {
  if (status == "Done") return "success";
  else if (status == "Pending") return "primary";
  else if (status == "Cancelled") return "error";
  else if (status == "In Progress") return "warning";
};
</script>
<template>
  <div class="dashboardDefault">
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
              ChartJS is WIP.
              <!-- <Bar id="my-chart-id" :options="chartOptions" :data="chartData" /> -->
              <!-- <chartjs
                :id="revenuedata.id"
                :type="revenuedata.type"
                :data="revenuedata.data"
                :options="revenuedata.option"
              /> -->
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
              ChartJS is WIP.
              <!-- <chartjs
                :id="salesrevenuedata.id"
                :type="salesrevenuedata.type"
                :data="salesrevenuedata.data"
                :options="salesrevenuedata.option"
              /> -->
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="5" lg="5" xl="5">
          <v-card flat border class="mb-3">
            <v-card-title class="d-flex">
              Daily Feed <v-spacer></v-spacer>
              <v-chip color="info">Today</v-chip>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-list density="compact" lines="three">
                <template v-for="feed in dailyfeed">
                  <v-divider v-if="feed.divider"></v-divider>
                  <v-list-item v-else :key="feed.title">
                    <template v-slot:prepend>
                      <v-avatar size="60">
                        <v-img :src="feed.avatar"></v-img>
                      </v-avatar>
                    </template>
                    <v-list-item-title v-html="feed.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="feed.subtitle"
                    ></v-list-item-subtitle>
                    <template v-slot:append>
                      <span>3h ago</span>
                    </template>
                  </v-list-item>
                </template>
              </v-list>
            </v-card-text>
          </v-card>
          <v-card flat border class="mb-3">
            <v-card-title>Weekly Sales</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              ChartJS is WIP.
              <!-- <chartjs
                id="weeklysales"
                type="doughnut"
                :data="weeklysalesdata['data']"
                :options="weeklysalesdata['option']"
                height="200px"
              /> -->
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
            <v-data-table
              :headers="header"
              :items="project"
              :items-per-page="6"
            >
              <template v-slot:item.status="{ item }">
                <v-chip :color="getColor(item.raw.status)" small>
                  {{ item.raw.status }}
                </v-chip>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
