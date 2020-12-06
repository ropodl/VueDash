<template>
  <canvas id="weeklysales"></canvas>
</template>

<script>
import Chart from "chart.js";
export default {
  data() {
    return {};
  },
  mounted() {
    var ctx = document.getElementById("totalrevenue");
    var totalrevenue = new Chart(ctx, {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      type: "line",
      data: {
        datasets: [
          {
            label: "Sales ($)",
            fill: true,
            backgroundColor: "transparent",
            borderColor: "#d64937", //find what this is
            data: [
              2015,
              1465,
              1487,
              1796,
              1387,
              2123,
              2866,
              2548,
              3902,
              4938,
              3917,
              4927,
            ],
          },
          {
            label: "Orders",
            fill: true,
            backgroundColor: "transparent",
            borderColor: "#2d2d2d",
            borderDash: [4, 4],
            data: [
              928,
              734,
              626,
              893,
              921,
              1202,
              1396,
              1232,
              1524,
              2102,
              1506,
              1887,
            ],
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
    });
    totalrevenue.render();
    var ctx2 = document.getElementById("weeklysales");
    var weeklysales = new Chart(ctx2, {
      type: "pie",
      data: {
        labels: [
          "Section A",
          "Section B",
          "Section C",
          "Section D",
          "Section E",
          "Section F",
        ],
        datasets: [
          {
            label: "# of Students",
            data: [120, 190, 30, 50, 59, 30],
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 2,
          },
          {
            options: {},
          },
        ],
      },
    });
    weeklysales.render();
  },
};
</script>

<style></style>
