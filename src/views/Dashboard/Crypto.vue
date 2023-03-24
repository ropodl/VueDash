<script setup>
import { onMounted } from "vue";
import { useTitle } from "@vueuse/core";
// import axios from "axios";

useTitle("Crypto Dashboard");

let marketsheader = [
  {
    title: "Coin",
    sortable: false,
    key: "coin",
  },
  {
    title: "Price",
    sortable: false,
    key: "price",
  },
  {
    title: "Volume",
    sortable: false,
    key: "vol",
  },
  {
    title: "Change",
    sortable: false,
    key: "change",
  },
];
let markets = [
  {
    coin: "ETH",
    price: "0.03863405",
    vol: "1379.634",
    change: "+1.52",
  },
  {
    coin: "XRP",
    price: "0.00009313",
    vol: "270.805",
    change: "-3.30",
  },
  {
    coin: "XMR",
    price: "0.01292315",
    vol: "203.531",
    change: "+ 6.10",
  },
  {
    coin: "DASH",
    price: "0.02088992",
    vol: "84.034",
    change: "- 3.17",
  },
  {
    coin: "LTC",
    price: "0.00821501",
    vol: "80.566",
    change: "+ 3.00",
  },
  {
    coin: "STR",
    price: "0.00002948",
    vol: "58.981",
    change: "+ 2.58",
  },
  {
    coin: "DOGE",
    price: "0.00000061",
    vol: "46.849",
    change: "- 1.61",
  },
  {
    coin: "REP",
    price: "0.00223510",
    vol: "37.038",
    change: "+ 0.54",
  },
  {
    coin: "EOS",
    price: "0.00069000",
    vol: "35.040",
    change: "- 5.84",
  },
  {
    coin: "DGB",
    price: "0.00000277",
    vol: "34.840",
    change: "+ 0.36",
  },
  {
    coin: "ZEC",
    price: "0.01505000",
    vol: "32.326",
    change: "- 4.24",
  },
  {
    coin: "BURST",
    price: "0.00000098",
    vol: "25.590",
    change: "- 15.52",
  },
  {
    coin: "MAID",
    price: "0.00003724",
    vol: "20.556",
    change: "- 2.33",
  },
  {
    coin: "ETC",
    price: "0.00132249",
    vol: "19.633",
    change: "+ 4.19",
  },
  {
    coin: "STRAT",
    price: "0.00028587",
    vol: "17.557",
    change: "+ 4.40",
  },
];
let carddetails = [
  {
    id: "1",
    title: "HSR/BTC",
    change: "-5.28",
    price: "0.001416",
    currency: "16.61",
    vol: "2,692.47",
  },
  {
    id: "2",
    title: "BNB/BTC",
    change: "+2.61",
    price: "0.00022004",
    currency: "2.58",
    vol: "842.52",
  },
  {
    id: "3",
    title: "POWR/BTC",
    change: "-7.27",
    price: "0.00005806",
    currency: "0.68",
    vol: "393.03",
  },
  {
    id: "4",
    title: "TRX/BTC",
    change: "-4.98",
    price: "0.00000229",
    currency: "0.04",
    vol: "6,836.31",
  },
];
let sellorderheader = [
  {
    title: "Price",
    sortable: false,
    key: "price",
  },
  {
    title: "ETH",
    sortable: false,
    key: "eth",
  },
  {
    title: "BTC",
    sortable: false,
    key: "btc",
  },
  {
    title: "Sum (BTC)",
    sortable: false,
    key: "sum",
  },
];
let sellorder = [
  {
    price: "0.03892501",
    eth: "32.07831558",
    btc: "1.24864875",
    sum: "1.26329659",
  },
];
let buyorderheader = [
  {
    title: "Price",
    sortable: false,
    key: "price",
  },
  {
    title: "ETH",
    sortable: false,
    key: "eth",
  },
  {
    title: "BTC",
    sortable: false,
    key: "btc",
  },
  {
    title: "Sum (BTC)",
    sortable: false,
    key: "sum",
  },
];
let buyorder = [
  {
    price: "0.03892501",
    eth: "32.07831558",
    btc: "1.24864875",
    sum: "1.26329659",
  },
];
let topPaneData = null;
let seriesData = [
  {
    x: new Date(2016, 1, 1),
    y: [51.98, 56.29, 51.59, 53.85],
  },
  {
    x: new Date(2016, 2, 1),
    y: [53.66, 54.99, 51.35, 52.95],
  },
  {
    x: new Date(2016, 3, 1),
    y: [52.96, 53.78, 51.54, 52.48],
  },
  {
    x: new Date(2016, 4, 1),
    y: [52.54, 52.79, 47.88, 49.24],
  },
  {
    x: new Date(2016, 5, 1),
    y: [49.1, 52.86, 47.7, 52.78],
  },
  {
    x: new Date(2016, 6, 1),
    y: [52.83, 53.48, 50.32, 52.29],
  },
  {
    x: new Date(2016, 7, 1),
    y: [52.2, 54.48, 51.64, 52.58],
  },
  {
    x: new Date(2016, 8, 1),
    y: [52.76, 57.35, 52.15, 57.03],
  },
  {
    x: new Date(2016, 9, 1),
    y: [57.04, 58.15, 48.88, 56.19],
  },
  {
    x: new Date(2016, 10, 1),
    y: [56.09, 58.85, 55.48, 58.79],
  },
  {
    x: new Date(2016, 11, 1),
    y: [58.78, 59.65, 58.23, 59.05],
  },
  {
    x: new Date(2017, 0, 1),
    y: [59.37, 61.11, 59.35, 60.34],
  },
  {
    x: new Date(2017, 1, 1),
    y: [60.4, 60.52, 56.71, 56.93],
  },
  {
    x: new Date(2017, 2, 1),
    y: [57.02, 59.71, 56.04, 56.82],
  },
  {
    x: new Date(2017, 3, 1),
    y: [56.97, 59.62, 54.77, 59.3],
  },
  {
    x: new Date(2017, 4, 1),
    y: [59.11, 62.29, 59.1, 59.85],
  },
  {
    x: new Date(2017, 5, 1),
    y: [59.97, 60.11, 55.66, 58.42],
  },
  {
    x: new Date(2017, 6, 1),
    y: [58.34, 60.93, 56.75, 57.42],
  },
  {
    x: new Date(2017, 7, 1),
    y: [57.76, 58.08, 53.18, 54.71],
  },
  {
    x: new Date(2017, 8, 1),
    y: [54.8, 61.42, 53.58, 57.35],
  },
  {
    x: new Date(2017, 9, 1),
    y: [57.56, 63.09, 57.0, 62.99],
  },
  {
    x: new Date(2017, 10, 1),
    y: [62.89, 63.42, 59.72, 61.76],
  },
  {
    x: new Date(2017, 11, 1),
    y: [61.71, 64.15, 61.29, 63.04],
  },
  {
    x: new Date(2018, 0, 1),
    y: [59.37, 61.11, 59.35, 60.34],
  },
  {
    x: new Date(2018, 1, 1),
    y: [60.4, 60.52, 56.71, 56.93],
  },
  {
    x: new Date(2018, 2, 1),
    y: [57.02, 59.71, 56.04, 56.82],
  },
  {
    x: new Date(2018, 3, 1),
    y: [56.97, 59.62, 54.77, 59.3],
  },
  {
    x: new Date(2018, 4, 1),
    y: [59.11, 62.29, 59.1, 59.85],
  },
  {
    x: new Date(2018, 5, 1),
    y: [59.97, 60.11, 55.66, 58.42],
  },
  {
    x: new Date(2018, 6, 1),
    y: [58.34, 60.93, 56.75, 57.42],
  },
  {
    x: new Date(2018, 7, 1),
    y: [57.76, 58.08, 51.18, 54.71],
  },
  {
    x: new Date(2018, 8, 1),
    y: [54.8, 61.42, 53.18, 57.35],
  },
  {
    x: new Date(2018, 9, 1),
    y: [57.56, 62.09, 57.0, 61.99],
  },
  {
    x: new Date(2018, 10, 1),
    y: [62.89, 63.42, 59.72, 61.76],
  },
  {
    x: new Date(2018, 11, 1),
    y: [61.71, 64.15, 61.29, 63.04],
  },
];
let options = {
  chart: {
    // height: 450,
    // width: 580,
    type: "candlestick",
  },
  series: [
    {
      data: seriesData,
    },
  ],
  xaxis: {
    type: "datetime",
  },
  stroke: {
    width: 1,
  },
  responsive: [
    {
      breakpoint: undefined,
    },
  ],
};
onMounted(() => {
  // topPaneCall();
});
const topPaneCall = async () => {
  await axios
    .get(
      "https://api.nomics.com/v1/currencies/ticker?key=demo-26240835858194712a4f8cc0dc635c7a&ids=BTC,ETH,XRP,DASH&interval=1d,30d&convert=USD&per-page=100&page=1"
    )
    .then((response) => (topPaneData = response.data));
};
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Welcome back, John Doe!</h1>
      </v-col>
      <v-col cols="12" md="3" v-for="data in topPaneData">
        <v-card flat border>
          <v-card-title>
            {{ data.currency }} ({{ data.name }})
            <span class="body-1 error--text">{{ data.change }}%</span>
          </v-card-title>
          <v-card-text class="pb-0">
            <div class="font-weight-light mr-3">
              Market Cap: {{ data.market_cap }}
            </div>
            <div>Price/Unit: ${{ data.price }}</div>
          </v-card-text>
          <v-card-text class="pt-0">
            Volume: {{ data["1d"].volume }} BTC
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="5">
        <v-card flat border>
          <v-card-title>Markets</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-0">
            <v-data-table :headers="marketsheader" :items="markets">
              <template v-slot:item.tech="{ item }">
                <v-chip color="error" small>{{ item.tech }}</v-chip>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="7">
        <v-card flat border>
          <v-card-title>LTC / BTC</v-card-title>
          <v-divider></v-divider>
          <v-card-text>Candle Stick chart is WIP.</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card border flat>
          <v-card-title>Sell Orders</v-card-title>
          <v-divider></v-divider>
          <v-data-table :headers="sellorderheader" :items="sellorder">
            <template v-slot:item.tech="{ item }">
              <v-chip color="error" small>{{ item.tech }}</v-chip>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card border flat>
          <v-card-title>Buy Orders</v-card-title>
          <v-divider></v-divider>
          <v-data-table :headers="buyorderheader" :items="buyorder">
            <template v-slot:item.tech="{ item }">
              <v-chip color="error" small>{{ item.tech }}</v-chip>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
