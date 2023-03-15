<script setup>
let carddetails = [
  {
    id: "1",
    icon: "fas fa-shopping-cart",
    title: "25",
    text: "Sales Today",
    summary: "-25",
    class: "card-icon primary--text pl-3",
  },
  {
    id: "2",
    icon: "fas fa-heartbeat",
    title: "17.212",
    text: "Visitors Today",
    summary: "+35",
    class: "card-icon warning--text pl-3",
  },
  {
    id: "3",
    icon: "fas fa-dollar-sign",
    title: "$ 24.300",
    text: "Total Earnings",
    summary: "+15",
    class: "card-icon success--text pl-3",
  },
  {
    id: "4",
    icon: "fas fa-shopping-bag",
    title: "43",
    text: "Pending Orders",
    summary: "+22",
    class: "card-icon error--text pl-3",
  },
];
</script>
<template>
  <v-row>
    <v-col
      cols="12"
      xs="12"
      sm="6"
      md="6"
      lg="3"
      xl="3"
      v-for="carddetail in carddetails"
      :key="carddetail.id"
    >
      <v-card border class="py-4">
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
