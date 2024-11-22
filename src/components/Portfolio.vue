<template>
  <div class="portfolioFeed">
    <div class="slide"> 
      <div>
        <h2>Portfolio</h2>
        <p>I created this website from scratch because I refuse to use Squarespace :] </p>
      </div>
    <div style="display: flex; flex-direction: row; width:80%; margin: auto;"> 
      <div style="flex: 1;">
        <dl>
          <dt>○ <b>Domain Management</b></dt>
          <dd>Dynadot</dd>
          <dt>○ <b>Web Management</b></dt>
          <dd>Netlify</dd>
          <dt>○ <b>Programming Tools</b>:</dt>
          <dd>Vue JS Framework, NPM, Git</dd>
          <dt>○ <b>Database</b></dt>
          <dd>Salesforce</dd>
        </dl>

      </div>
      <div style="flex: 1;">
        <dl>
          <dt><b>Resources</b></dt>
          <dd>○ Brandfetch - logos</dd>
        </dl>
      </div>
    </div>
    <div style="height: 1px; background: black; width: 90%; margin: 3% auto;"></div>
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
    width: 100vh;
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
  
  dt{
    line-height: 150%;
  }


</style>