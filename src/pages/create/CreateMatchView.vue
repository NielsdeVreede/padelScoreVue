
<template>
  <div style="display: flex;">
    <div style="width: 45%; padding-right: 2%">
      <v-select label="Thuis speler"
                v-model="request.homeUserId"
                :items="users"
                item-value="id"
                item-title="name"
      ></v-select>
      <v-select label="Uit speler"
                v-model="request.awayUserId"
                :items="users"
                item-value="id"
                item-title="name"
      ></v-select>
    </div>
    <div style="width: 45%">
      <v-text-field label="Score thuis" v-model="request.homeScore"></v-text-field>
      <v-text-field label="Score uit" v-model="request.awayScore"></v-text-field>
    </div>
  </div>
  <v-btn @click="createMatch">Verzenden</v-btn>
</template>
<script>
import {createMatchRequest} from "@/models/createMatchRequest";
import axios from "axios";
import {User} from "@/models/user";

export default {
  data() {
    return {
      request: new createMatchRequest(null,null,null,null),
      users: []
    }
  },
  created() {
    axios.get('http://188.90.201.138:8080'+ '/users').then(res => {
      res.data.forEach(item => {
        this.users.push(new User(item.id, item.name, item.score))
      })
    })
  },
  methods: {
    createMatch() {
      axios.post('http://188.90.201.138:8080' + '/match', this.request).then(res => {
        this.$router.push('/match')
      })
    }
  }
}

</script>


