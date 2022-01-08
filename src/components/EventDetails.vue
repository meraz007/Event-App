<template>
    <div class="row justify-content-md-center mt-5">
        <div class="col-4">
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">{{event.title}}</h5>
                    <h6>{{ event.location }}</h6>
                    <h6>{{ event.organizer }}</h6>
                    <p class="card-text">@ {{ event.time }} on {{ event.date }}</p>
                    <p class="card-text">{{event.description}}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
export default {
     data(){
    return{
      event:null
    }
    },
    created(){
      axios
      .get('https://my-json-server.typicode.com/meraz007/Event-App/events/'+ this.$route.params.id)
        .then(response =>{
          this.event=response.data
        })
    }

}
</script>

<style>

</style>