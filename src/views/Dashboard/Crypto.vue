<script setup>
import { useTitle } from "@vueuse/core";
import axios from "axios";
import { defineAsyncComponent, onMounted, reactive, ref } from "vue";

useTitle("Crypto Dashboard");

const candlestick = defineAsyncComponent(() =>
  import("@/components/dash/candlestick")
);
const salestable = defineAsyncComponent(() =>
  import("@/components/dash/salestable")
);

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
      <v-col cols="12" md="6">
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
                {{ item.raw.priceChange }}
                <span
                  class="ml-1"
                  :class="getColor(item.raw.priceChangePercent)"
                >
                  {{ item.raw.priceChangePercent.includes("-") ? "" : "+" }}
                  {{ item.raw.priceChangePercent }}
                </span>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card flat border>
          <v-card-title>LTC / BTC</v-card-title>
          <v-divider></v-divider>
          <candlestick />
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card border flat>
          <v-card-title>Sell Orders</v-card-title>
          <v-divider></v-divider>
          <salestable />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
