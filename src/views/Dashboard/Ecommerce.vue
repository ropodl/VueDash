<script setup>
import { defineAsyncComponent } from "vue";

const timeline = defineAsyncComponent(() => import("@/components/timeline"));

let carddetails = [
  {
    id: "1",
    title: "Income",
    badgetext: "Today",
    number: "$37.500",
    percentage: "57",
    color: "primary",
  },
  {
    id: "2",
    title: "Orders",
    badgetext: "Annual",
    number: "3.282",
    percentage: "82",
    color: "warning",
  },
  {
    id: "3",
    title: "Activity",
    badgetext: "Monthly",
    number: "$82.400",
    percentage: "32",
    color: "blue darken-4",
  },
  {
    id: "4",
    title: "Revenue",
    badgetext: "Yearly",
    number: "$82.400",
    percentage: "32",
    color: "success",
  },
];
let topsellingheader = [
  {
    title: "Name",
    sortable: false,
    key: "name",
  },
  {
    title: "Tech",
    sortable: false,
    key: "tech",
  },
  {
    title: "License",
    sortable: false,
    key: "license",
  },
  {
    title: "Tickets",
    sortable: false,
    key: "ticket",
  },
  {
    title: "Sales",
    sortable: false,
    key: "sale",
  },
];
let sales = [
  {
    name: "Abel Theme",
    tech: "Angular",
    license: "Single License",
    ticket: "80",
    sale: "150",
  },
];
let salesrevenedata = {
  id: "salesrevenue",
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Last year",
        backgroundColor: "lightblue",
        borderColor: "blue",
        hoverBackgroundColor: "blue",
        hoverBorderColor: "blue",
        data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
        barPercentage: 0.325,
        categoryPercentage: 0.5,
      },
      {
        label: "This year",
        backgroundColor: "blue",
        borderColor: false,
        hoverBackgroundColor: "blue",
        hoverBorderColor: "blue",
        data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
        barPercentage: 0.325,
        categoryPercentage: 0.5,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    cornerRadius: 15,
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            stepSize: 20,
          },
          stacked: true,
        },
      ],
      xAxes: [
        {
          stacked: false,
          gridLines: {
            color: "transparent",
          },
          // stacked: true,
        },
      ],
    },
  },
};
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Welcome back, John Doe!</h1>
      </v-col>
      <v-col cols="12" sm="6" md="3" v-for="carddetail in carddetails">
        <v-card flat border>
          <v-card-title class="d-flex justify-space-between"
            >{{ carddetail.title }}
            <v-chip small :color="carddetail.color" dark>
              {{ carddetail.badgetext }}
            </v-chip>
          </v-card-title>
          <v-card-text>
            <div class="d-flex align-center justify-space-between">
              <span class="headline font-weight-bold">
                {{ carddetail.number }}
              </span>
              <span class="title font-weight-light">
                {{ carddetail.percentage }}%
              </span>
            </div>
          </v-card-text>
          <v-card-text class="pa-0">
            <v-progress-linear
              :color="carddetail.color"
              height="6"
              :model-value="carddetail.percentage"
              rounded
              striped
            >
            </v-progress-linear>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card border flat>
          <v-card-title>Sales by State</v-card-title>
          <v-divider></v-divider>
          <v-card-text>Insert Map jokes here</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card border flat>
          <v-card-title>Sales / Revenue</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            Chart JS not working for soon
            <!-- <chartjs
              :id="salesrevenuedata.id"
              :type="salesrevenuedata.type"
              :data="salesrevenuedata.data"
              :options="salesrevenuedata.option"
              height="350px"
            /> -->
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card border flat>
          <v-card-title>Order Activity</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="py-0">
            <timeline />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card border flat>
          <v-card-title>Top Selling Products</v-card-title>
          <v-divider></v-divider>
          <v-data-table :headers="topsellingheader" :items="sales">
            <template v-slot:item.tech="{ item }">
              <v-chip color="error" small>{{ item.raw.tech }}</v-chip>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
