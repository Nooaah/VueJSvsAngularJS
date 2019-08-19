vm = new Vue({
  el: '#app',
  data: {
    message: 'Test',
    barre11: '44',
    barre12: '80',
    barre13: '88',
    barre14: '60',
    barre15: '47',
    barre16: '32',
    barre21: '2',
    barre22: '4',
    barre23: '20',
    barre24: '65',
    barre25: '86',
    barre26: '100',
  },
  methods: {
    changeBarre11: function () {
      myLineChart.data.datasets[0].data[0] = this.barre11;
      myLineChart.update();
    },
    changeBarre12: function () {
      myLineChart.data.datasets[0].data[1] = this.barre12;
      myLineChart.update();
    },
    changeBarre13: function () {
      myLineChart.data.datasets[0].data[2] = this.barre13;
      myLineChart.update();
    },
    changeBarre14: function () {
      myLineChart.data.datasets[0].data[3] = this.barre14;
      myLineChart.update();
    },
    changeBarre15: function () {
      myLineChart.data.datasets[0].data[4] = this.barre15;
      myLineChart.update();
    },
    changeBarre16: function () {
      myLineChart.data.datasets[0].data[5] = this.barre16;
      myLineChart.update();
    },
    changeBarre21: function () {
      myLineChart.data.datasets[1].data[0] = this.barre21;
      myLineChart.update();
    },
    changeBarre22: function () {
      myLineChart.data.datasets[1].data[1] = this.barre22;
      myLineChart.update();
    },
    changeBarre23: function () {
      myLineChart.data.datasets[1].data[2] = this.barre23;
      myLineChart.update();
    },
    changeBarre24: function () {
      myLineChart.data.datasets[1].data[3] = this.barre24;
      myLineChart.update();
    },
    changeBarre25: function () {
      myLineChart.data.datasets[1].data[4] = this.barre25;
      myLineChart.update();
    },
    changeBarre26: function () {
      myLineChart.data.datasets[1].data[5] = this.barre26;
      myLineChart.update();
    }
  }
})


//line
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
  type: 'line',
  data: {
    labels: ["2014", "2015", "2016", "2017", "2018", "2019"],
    datasets: [{
        label: "Utilisation d'AngularJS",
        data: [vm.barre11, vm.barre12, vm.barre13,
          vm.barre14, vm.barre15, vm.barre16],
        backgroundColor: [
          'rgb(53, 73, 94, .4)',
        ],
        borderColor: [
          'rgb(53, 73, 94, 1)',
        ],
        borderWidth: 2
      },
      {
        label: "Utilisation de VueJS",
        data: [vm.barre21, vm.barre22, vm.barre23, vm.barre24,
          vm.barre25, vm.barre26],
        backgroundColor: [
          'rgb(78, 184, 131, .3)',
        ],
        borderColor: [
          'rgb(78, 184, 131, 1)',
        ],
        borderWidth: 2
      }
    ]
  },
  options: {
    responsive: true
  }
});
