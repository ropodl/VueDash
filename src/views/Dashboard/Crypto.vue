<script setup>
import { ref, reactive, onMounted } from "vue";
import { useTitle } from "@vueuse/core";
import axios from "axios";

useTitle("Crypto Dashboard");

const markets = [
  {
    title: "Symbol",
    sortable: false,
    key: "symbol",
  },
  {
    title: "Volume",
    sortable: false,
    key: "volume",
  },
  {
    title: "Change",
    sortable: false,
    key: "priceChange",
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
let topPaneData = ref("");
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
// New remove old
let cryptoData = reactive([]);
let loading = ref(true);
onMounted(() => {
  topPaneCall();
});
const topPaneCall = async () => {
  await axios
    .get("https://data.binance.com/api/v3/ticker/24hr")
    .then((response) => {
      loading.value = false;
      cryptoData = response.data;
      console.log(cryptoData);
      topPaneData = response.data;
    });
};

const getColor = (percent) => {
  return percent.includes("-") ? "text-error" : "text-success";
};
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Welcome back, John Doe!</h1>
      </v-col>
      <v-col cols="12" md="3" v-for="(data, i) in topPaneData">
        <v-card flat border v-if="i < 4">
          <v-card-title>
            <!-- {{ data.currency }} -->
            {{ data["symbol"] }}
            <!-- <span class="body-1 error--text">{{ data.change }}%</span> -->
          </v-card-title>
          <!-- <v-card-text class="pb-0">
            <div class="font-weight-light mr-3">
              Market Cap: {{ data.market_cap }}
            </div>
            <div>Price/Unit: ${{ data.price }}</div>
          </v-card-text> -->
          <v-card-text class="pt-0">
            Volume: {{ data["volume"] }} BTC
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="5">
        <v-card flat border>
          <v-card-title>Markets</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-0">
            <v-data-table
              :loading="loading"
              :headers="markets"
              :items="cryptoData"
            >
              <template v-slot:item.priceChange="{ item }">
                {{ item.raw.priceChange.parseInt() }}
                <span
                  class="ml-1"
                  :class="getColor(item.raw.priceChangePercent)"
                >
                  {{ item.raw.priceChangePercent.includes("-") ? "" : "+" }}
                  {{ item.raw.priceChangePercent }}
                </span>
              </template>
            </v-data-table>
            <!-- <template v-slot:item.tech="{ item }">
              <v-chip color="error" small>{{ item.tech }}</v-chip>
            </template> -->
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
