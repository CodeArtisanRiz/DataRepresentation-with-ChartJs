const dataChart = document.querySelector("#mycanvas").getContext("2d");

// Gradient
let gradient = dataChart.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(58,123,213,1)");
gradient.addColorStop(1, "rgba(0,210,255,0.3)");

const labels = ["2015", "2016", "2017", "2018", "2019", "2020"];

const data = {
  labels,
  datasets: [
    {
      data: [107, 271, 184, 461, 309, 384],
      label: "Sales Record",
      fill: true,
      backgroundColor: gradient,
      pointBackgroundColor: "#fff",
      tension: 0.3,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    radius: 7,
    hitRadius: 30,
    hoverRadius: 12,
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return "₹" + value + "Cr";
          },
        },
      },
    },
  },
};

const myChart = new Chart(dataChart, config);
