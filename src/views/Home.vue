<template>
  <div class="home">
    <h1>Event Card</h1> 
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import axios from 'axios'

export default {
  name: "Home",
  components: {
    EventCard,
  },
  data(){
    return{
      events:null
    }
    },
    created(){
      axios
        .get('https://my-json-server.typicode.com/meraz007/Event-App/events')
        .then(response =>{
          this.events=response.data
        })
        .catch(error =>{
          console.log(error)
        })
    }
};
</script>
