<template>
  <div class="chartFeed">
    <div style="padding: 10px; width: 80%;"> 
        <p id="text">Patient Chart</p>
        <p>The Patient Chart is a Lightning Web Component that provided teams across different departments a custom way to communicate with each other</p>
    </div>
    
    <div style="display: flex; flex-direction: row; width: 75%; margin:5%;">
      <div id="list1">
        <h3>Features</h3>
        <dl>
          <dt>○ Unread Notifications</dt>
          <dt>○ Case Wrap Up</dt>
          <dt>○ Player Menu</dt>
          <dt>○ Filters</dt>
        </dl>
      </div>
      <div id="list2">
        <h3 style="opacity: 0;">ok </h3>
        <dl>
          <dt>○ Record Management</dt>
          <dt>○ Pin/Highlight</dt>
          <dt>○ Color Blind Friendly UI</dt>
        </dl>
      </div>
    </div>

  </div>
</template>

<script>
  // import Vue from 'vue';
  // import VueCarousel from 'vue-carousel';
  // Vue.use(VueCarousel);
  // import { Carousel, Slide } from 'vue-carousel';
  export default {
    name: 'Patient Chart',
    components: {
      // Carousel,
      // Slide
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .chartFeed{
    overflow: scroll;
    /* background: linear-gradient(to left, rgba(153, 168, 194,.1), rgba(64, 61, 77, 0.4)); */
    position: fixed;
    height: 100vh;
    width: 100vw;
    /* opacity: .5; */
  }

  .chartFeed::-webkit-scrollbar{
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


  #list1{
    /* border-right: solid 1px  rgb(64, 61, 77, .5); */
    width: 45%;
    padding-right: 10px;
  }

  #list2{
    padding: 0px 0px 0px 25px;
  }

  #text
  {
    font-size: 2em; 
    font-weight: 500;
    line-height: 0;;
  }
</style>