<template>
  <div class="pie-chart">
    <canvas id="myChart" width="150" height="100"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "PieChart",
  watch: {
    chores: function() {
      this.createChart("myChart", this.pieChartData);
    }
  },
  methods: {
    newChart() {
      this.pieChartData = {
        type: "pie",
        data: {
          labels: this.profiles,
          datasets: [
            {
              label: "% of Chores",
              data: this.chores,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false
          }
        }
      };
    },
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    }
  },
  mounted() {
    this.newChart();
    var ctx = document.getElementById("myChart");
    this.createChart("myChart", this.pieChartData);
  },
  computed: {
    profiles() {
      let arr = [];
      let pro = this.$store.state.profiles;
      for (let i = 0; i < pro.length; i++) {
        const elem = pro[i];
        arr.push(elem.name);
      }
      return arr;
      myChart.Update();
    },
    chores() {
      let arr = [];
      let pct = [];
      let count = 0;
      let houseId = this.$route.params.id;
      let houseChores = this.$store.state.houseChores;
      let profiles = this.$store.state.profiles;
      if (houseId == this.$store.state.activeHouse._id) {
        for (let i = 0; i < houseChores.length; i++) {
          let profile = houseChores[i];
          for (let i = 0; i < profiles.length; i++) {
            const prof = profiles[i];
            if (prof._id == profile.profileId) {
              for (let prop in profile) {
                let type = typeof profile[prop];
                if (type === "number") {
                  count += profile[prop];
                }
              }
            }
          }
          arr.push(count);
          count = 0;
        }
        let total = arr.reduce((a, b) => a + b, 0);
        for (let i = 0; i < arr.length; i++) {
          const elem = arr[i];
          pct.push(Math.round((elem / total) * 100));
        }
        return pct;
      }
      myChart.Update();
    }
  }
};
</script>

<style scoped></style>
