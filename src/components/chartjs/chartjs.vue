<template>
  <canvas :id="id" :type="type" :data="data"></canvas>
</template>

<script>
// import Chart from "chart.js";
export default {
  props: ["id", "type", "data"],
  data() {
    return {};
  },
  // mounted() {
  //   var ctx = document.getElementById(this.id);
  //   var chartjs = new Chart(ctx, {
  //     labels: this.data.label,
  //     type: this.type,
  //     data: this.data,
  //     options: {
  //       maintainAspectRatio: true,
  //       legend: {
  //         display: true,
  //         position: "bottom",
  //       },
  //       tooltips: {
  //         intersect: false,
  //       },
  //       hover: {
  //         intersect: true,
  //       },
  //     },
  //   });
  //   chartjs.render();
  // },
};
</script>

<style></style>
