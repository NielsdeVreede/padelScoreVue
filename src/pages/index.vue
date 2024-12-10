<template>
  <div v-for="user in users">
    <v-card  class="center">
      <p>{{user.name}}</p>
      <p>Huidige score: {{user.score}}</p>
      <v-btn @click="history(user.id)">Zie score geschiedenis</v-btn>
    </v-card>
    <br>
    <br>

  </div>
<!--  <p v-for="user in users">{{ user.name }} - {{ user.score }}</p>-->
  <v-btn @click="this.create()">Nieuwe wedstrijd invullen</v-btn>
  <br>
  <br>
  <v-btn @click="this.matchOverview()">Overzicht alle gespeelde wedstrijden</v-btn>
</template>



<script>
import axios from 'axios';
import {User} from '@/models/user';
import {baseUrl} from "@/models/config";

export default {
  data() {
    return {
      users: []
    }
  },
  mounted() {
    axios.get(baseUrl+ '/users')
        .then(res => {
          res.data.forEach(item => {this.users.push(new User(item.id, item.name, item.score.toFixed(3)))})
        })
  },
  methods: {
    create() {
      this.$router.push('/create')
    },
    matchOverview() {
      this.$router.push('/match')
    },
    history(userId) {
      this.$router.push('/history/'+userId)
    }
  }
};
</script>
<style>
.center {
  margin: auto;
  padding: 10px;
}
</style>
