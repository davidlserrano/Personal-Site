<template>
  <div class="display">
      <h3>Certifications</h3>
      <div style="text-align: center; width: 100%; padding: 1%;">
        <img class="badge" src="@/assets/imgs/certs/admin.png">
        <img class="badge" src="@/assets/imgs/certs/dev1.png">
        <img class="badge" src="@/assets/imgs/certs/dev2.png">
        <img class="badge" src="@/assets/imgs/certs/javascript.png">
      </div>
      <div style="height: 1px; background: black; width: 85%; margin: 3% auto;"></div>

      <div class="orghealth">
        
        <!-- 
        Apex Test Class Covereage
        Total Users
        Async Calls
        Storage
        # of Integrations
        -->
      </div>
  </div>
</template>


<script>
// import Vue from 'vue';
// import VueCarousel from 'vue-carousel';
// Vue.use(VueCarousel);
// import { Carousel, Slide } from 'vue-carousel';

</script>

<style scoped>
  .badge{
    width: 15%; 
    height: 15%;
    padding: 1%;
    opacity: .9;
    -webkit-filter: grayscale(80%); 
    filter: grayscale(80%);
  }

  .orghealth
  {
    height: 150px;
    border: 1px solid black;
    border-radius: 10px;
    width: 80%;
    margin: auto;
  }

  
  .code{
    font-weight: bold;
    color: white;
  }

  .display{
    overflow: scroll;
    /* background: linear-gradient(to left, rgba(153, 168, 194,.1), rgba(64, 61, 77, 0.4)); */
    position: fixed;
    height: 100vh;
    width: 100vw;
  }

  .display::-webkit-scrollbar{
    display: none;
  }

  .before-enter{
    opacity: 0.2;
    transform: translateX(70px);
    transition: all 2s ease-out;
  }

  .enter{
    opacity: 1;
    transform: translateX(0px);
  }

  .slide{
    padding: 15px;
    display: block;
    max-width: 100%;
    /* color: white; */
    color: rgb(64, 61, 77);
    float: none;
    clear: both;
  }

  #loginIMG{
    max-height: 500px;
    border-radius: 5px;
    /* border: 0px solid rgb(64, 61, 77, .4); */
  }
  
</style>