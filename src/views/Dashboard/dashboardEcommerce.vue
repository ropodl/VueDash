<template>
  <div class="dashboardEcommerce">
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="py-0">
          <h1>Welcome back, John Doe!</h1>
        </v-col>
        <v-col
          cols="12"
          xs="12"
          sm="6"
          md="3"
          lg="3"
          xl="3"
          v-for="carddetail in carddetails"
          :key="carddetail.id"
        >
          <v-card>
            <v-card-title class="d-flex justify-space-between"
              >{{ carddetail.title }}
              <v-chip small :color="carddetail.color" dark>
                {{ carddetail.badgetext }}
              </v-chip>
            </v-card-title>
            <v-card-text>
              <v-flex class="d-flex align-center justify-space-between">
                <span class="headline font-weight-bold">
                  {{ carddetail.number }}
                </span>
                <span class="title font-weight-light">
                  {{ carddetail.percentage }}%
                </span>
              </v-flex>
            </v-card-text>
            <v-card-text class="pa-0">
              <v-progress-linear
                :color="carddetail.color"
                height="6"
                :value="carddetail.percentage"
                rounded
                striped
              >
              </v-progress-linear>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
          <v-card>
            <v-card-title class="d-flex justify-space-between">
              Sales by State
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                </template>
                <v-list dense>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title @click="alert('awdaw')"
                      >{{ item.title }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              Insert Map jokes here
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
          <v-card>
            <v-card-title class="d-flex justify-space-between">
              Sales / Revenue
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                </template>
                <v-list dense>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title @click="alert('awdaw')"
                      >{{ item.title }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <chartjs
                :id="salesrevenuedata.id"
                :type="salesrevenuedata.type"
                :data="salesrevenuedata.data"
                :options="salesrevenuedata.option"
                height="350px"
              />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
          <v-card>
            <v-card-title class="d-flex justify-space-between">
              Order Activity
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                </template>
                <v-list dense>
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
              <timeline />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
          <v-card>
            <v-card-title class="d-flex justify-space-between">
              Top Selling Products
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                </template>
                <v-list dense>
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
              <v-data-table :headers="topsellingheader" :items="sales">
                <template v-slot:item.tech="{ item }">
                  <v-chip color="error" small>{{ item.tech }}</v-chip>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import chartjs from "@/components/chartjs/chartjs";
import timeline from "@/components/timeline";
export default {
  name: "EcommerceDashboard",
  components: { timeline, chartjs },
  data() {
    return {
      carddetails: [
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
      ],
      topsellingheader: [
        {
          text: "Name",
          align: "start",
          value: "name",
        },
        {
          text: "Tech",
          align: "center",
          value: "tech",
        },
        {
          text: "License",
          align: "center",
          value: "license",
        },
        {
          text: "Tickets",
          align: "center",
          value: "ticket",
        },
        {
          text: "Sales",
          align: "end",
          value: "sale",
        },
      ],
      sales: [
        {
          name: "Abel Theme",
          tech: "Angular",
          license: "Single License",
          ticket: "80",
          sale: "150",
        },
      ],
      items: [
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
      ],
      salesrevenuedata: {
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
      },
    };
  },
};
</script>
<style scoped></style>
