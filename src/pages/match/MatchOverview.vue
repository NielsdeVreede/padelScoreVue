<template>
  <div v-for="match in matches" :key="match.id" class="center">
    <v-card class="v-card" shaped elevation="2">
      <div>
        <div style="font-size: xx-large">
          <span style="float: left;">{{match.homeUser.name}}</span>
          <span style="float: right;">{{match.awayUser.name}}</span>
        </div>
        <br/>
        <br/>
        <br/>
        <div style="font-size: xx-large">
          <span style="float: left;"> {{match.homeScore}}</span>
          <span style="float: right;"> {{match.awayScore}}</span>
        </div>
      </div>
      <br>
      <br>
      <br>
      <p>Gespeeld op : {{ this.getDate(match.playedAt) }}</p>
    </v-card>
    <br/>
  </div>
</template>

<script>

  import {User} from "@/models/user";
  import axios from "axios";
  import {Match} from "@/models/match";
  import {useDate} from "vuetify";

  export default {
    data() {
      return {
        matches: []
      }
    },
    methods: {
      getDate(inputDate) {
        const date = useDate()
        return date.format(inputDate, "keyboardDateTime")
      }
    },
    created() {
      axios.get('http://188.90.201.138:8080' +  '/match')
      .then((response) => {
        console.log(response.data)
        response.data.forEach(item => {
          this.matches.push(new Match(
            item.id,
            new User(item.homeUser.id, item.homeUser.name, item.homeUser.score),
            new User(item.awayUser.id, item.awayUser.name, item.awayUser.score),
            item.homeScore,
            item.awayScore,
            item.playedAt
          ))
        })
      })
    }
  }
</script>

<style>
.center {
  margin: auto;
  padding: 10px;
}
</style>
