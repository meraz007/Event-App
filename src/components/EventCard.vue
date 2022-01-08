<template>
  <div class="row justify-content-md-center">
    <div class="col-md-4">
      <div class="card my-4">
        <div class="card-body">
          <h5 class="card-title">{{ event.title}}</h5>
          <p class="card-text">@ {{ event.time }} on {{ event.date }}</p>
          <router-link :to="{ path: '/event/'+ event.id }">
            <a class="btn btn-info">Deatils Here</a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props:{
    event: Object
  }
};
</script>


<style scoped>
.card:hover{
     transform: scale(1.05);
     transition-duration: 0.5s;
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}

</style>
