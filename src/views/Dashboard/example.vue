<script>
    export default {
        name: 'awdaw',
        mounted() {

            // Line chart
            new Chart(document.getElementById("chartjs-dashboard-line"), {
                type: "line",
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov",
                        "Dec"],
                    datasets: [{
                        label: "Sales ($)",
                        fill: true,
                        backgroundColor: "transparent",
                        borderColor: window.theme.primary,
                        data: [2015, 1465, 1487, 1796, 1387, 2123, 2866, 2548, 3902, 4938, 3917, 4927]
                    }, {
                        label: "Orders",
                        fill: true,
                        backgroundColor: "transparent",
                        borderColor: window.theme.tertiary,
                        borderDash: [4, 4],
                        data: [928, 734, 626, 893, 921, 1202, 1396, 1232, 1524, 2102, 1506, 1887]
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    tooltips: {
                        intersect: false
                    },
                    hover: {
                        intersect: true
                    },
                    plugins: {
                        filler: {
                            propagate: false
                        }
                    },
                    scales: {
                        xAxes: [{
                            reverse: true,
                            gridLines: {
                                color: "rgba(0,0,0,0.05)"
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                stepSize: 500
                            },
                            display: true,
                            borderDash: [5, 5],
                            gridLines: {
                                color: "rgba(0,0,0,0)",
                                fontColor: "#fff"
                            }
                        }]
                    }
                }
            });
        }
    }
</script>