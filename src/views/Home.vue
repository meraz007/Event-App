<template>
  <div class="home">
    <h1>Event Card</h1> 
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "Home",
  components: {
    EventCard,
  },
  data(){
    return{
      events:[
        {
        id:123,
        title:'jinjira',
        time:'4pm',
        date:'6-1-2022'
      },
      {
        id:123,
        title:'jinjira',
        time:'4pm',
        date:'6-1-2022'
      }
      ]
      
    }
  }
};
</script>
