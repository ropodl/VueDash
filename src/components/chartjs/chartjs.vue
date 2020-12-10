<template>
  <canvas :id="id" :type="type" :data="data"></canvas>
</template>

<script>
// var config = {
// 	type: 'line',
// 	data: {
// 		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
// 		datasets: [{
// 			label: 'My First dataset',
// 			backgroundColor: window.chartColors.red,
// 			borderColor: window.chartColors.red,
// 			fill: false,
// 			data: [
// 				randomScalingFactor(),
// 				randomScalingFactor(),
// 				randomScalingFactor(),
// 				randomScalingFactor(),
// 				randomScalingFactor(),
// 				randomScalingFactor(),
// 				randomScalingFactor()
// 			],
// 		}, {
// 			label: 'My Second dataset',
// 			backgroundColor: window.chartColors.blue,
// 			borderColor: window.chartColors.blue,
// 			fill: false,
// 			data: [
// 				randomScalingFactor(),
// 				randomScalingFactor(),
// 				randomScalingFactor(),
// 				randomScalingFactor(),
// 				randomScalingFactor(),
// 				randomScalingFactor(),
// 				randomScalingFactor()
// 			],
// 		}]
// 	},
// 	options: {
// 		responsive: true,
// 		title: {
// 			display: true,
// 			text: 'Chart.js Line Chart - Logarithmic'
// 		},
// 		scales: {
// 			xAxes: [{
// 				display: true,
// 			}],
// 			yAxes: [{
// 				display: true,
// 				type: 'logarithmic',
// 			}]
// 		}
// 	}
// };

// window.onload = function() {
// 	var ctx = document.getElementById('canvas').getContext('2d');
// 	window.myLine = new Chart(ctx, config);
// };

// document.getElementById('randomizeData').addEventListener('click', function() {
// 	config.data.datasets.forEach(function(dataset) {
// 		dataset.data = dataset.data.map(function() {
// 			return randomScalingFactor();
// 		});

// 	});

// 	window.myLine.update();
// });

import Chart from "chart.js";
export default {
  props: ["id", "type", "data"],
  data() {
    return {};
  },
  mounted() {
    var ctx = document.getElementById(this.id);
    var chartjs = new Chart(ctx, {
      labels: this.data.label,
      type: this.type,
      data: this.data,
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
    chartjs.render();
    // totalrevenue.render();
    // var ctx2 = document.getElementById("weeklysales");
    // var weeklysales = new Chart(ctx2, {
    //   type: "pie",
    //   data: {
    //     labels: [
    //       "Section A",
    //       "Section B",
    //       "Section C",
    //       "Section D",
    //       "Section E",
    //       "Section F",
    //     ],
    //     datasets: [
    //       {
    //         label: "# of Students",
    //         data: [120, 190, 30, 50, 59, 30],
    //         backgroundColor: "rgba(255, 99, 132, 0.1)",
    //         borderColor: "rgba(255, 99, 132, 1)",
    //         borderWidth: 2,
    //       },
    //       {
    //         options: {},
    //       },
    //     ],
    //   },
    // });
    // weeklysales.render();
  },
};
</script>

<style></style>
