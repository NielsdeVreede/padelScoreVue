

<template>
  <Bar
    v-if="loaded"
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>


<script setup>
import { Bar } from 'vue-chartjs'
</script>


<script>
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

import {baseUrl} from "@/models/config";
import axios from "axios";

export default {
  data() {
    return {
      loaded: false,
      userData: [],
      dates: [],

      chartOptions: {
        responsive: true
      }
    }
  },
  methods: {

  },
  mounted() {
    this.chartData.labels = ['2023'];
    axios.get(baseUrl +  '/history/'+this.$route.params.id).then((response) => {
      response.data.forEach(item => {
        console.log(item)
        this.dates.push(item.timestamp);
        this.userData.push(item.score)
       })
    })
    this.loaded = true;
  }
};
</script>
