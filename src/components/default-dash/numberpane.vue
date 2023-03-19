<script setup>
let carddetails = [
  {
    icon: "fa:fas fa-shopping-cart",
    title: "25",
    text: "Sales Today",
    summary: "-25",
    class: "card-icon text-primary pl-3",
  },
  {
    icon: "fa:fas fa-heartbeat",
    title: "17.212",
    text: "Visitors Today",
    summary: "+35",
    class: "card-icon text-warning pl-3",
  },
  {
    icon: "fa:fas fa-dollar-sign",
    title: "$ 24.300",
    text: "Total Earnings",
    summary: "+15",
    class: "card-icon text-success pl-3",
  },
  {
    icon: "fa:fas fa-shopping-bag",
    title: "43",
    text: "Pending Orders",
    summary: "+22",
    class: "card-icon text-error pl-3",
  },
];
</script>
<template>
  <v-row>
    <v-col cols="12" sm="6" lg="3" v-for="carddetail in carddetails">
      <v-card flat border class="py-4">
        <v-icon :class="[carddetail.class]" style="">{{
          carddetail.icon
        }}</v-icon>
        <v-card-title
          class="text-h4 font-weight-bold"
          v-text="carddetail['title']"
        ></v-card-title>
        <v-card-title v-text="carddetail['text']"> </v-card-title>
        <v-card-text class="py-0">
          <v-chip
            :color="carddetail.summary.includes('-') ? 'error' : 'success'"
          >
            {{ carddetail["summary"] }}%
          </v-chip>
          Since last week
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.card-icon {
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 100px;
  transform: skewY(20deg);
}
</style>
