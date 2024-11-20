<template>
  <div class="portfolioFeed">
    <div class="slide"> 
      <div>
        <h2>Portfolio</h2>
        <p>This website</p>
      </div>
    <div style="display: flex; flex-direction: row;"> 
      <div style="flex: 1;">
        <p>Deets</p>
        <dl>
          <dt>○ <b>Domain Management</b>: Dynadot</dt>
          <dt>○ <b>Web Management</b>: Netlify</dt>
          <dt>○ <b>Programming Tools</b>:</dt>
          <dd>Vue JS Framework, NPM, Git</dd>
        </dl>

      </div>
      <div style="flex: 1;">
        <p>Sources</p>
        <dl>
          <dt>○ Brandfetch - logos</dt>
        </dl>
      </div>
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
    name: 'Portfolio',
    components: {
      // Carousel,
      // Slide
    }
  }
</script>

<style scoped>
  .portfolioFeed
  {
    overflow: scroll;
    position: fixed;
    height: 100vh;
    width: 100%;
    /* background: linear-gradient(to left, rgba(153, 168, 194,.1), rgba(64, 61, 77, 0.4)); */
  }

  .portfolioFeed::-webkit-scrollbar
  {
    display: none;
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


</style>