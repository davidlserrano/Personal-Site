<template>
  <div class="roundRobinFeed">
    <div style="padding: 1% 1%">
      <carousel>
            <slide>
              <div style="display: flex; flex-direction: column;">
                <b>Workcenter</b>
                <img src="@/assets/imgs/projects/roundrobin_workcenter.png" class="carousel-img">
              </div>
            </slide>
            <slide>
              <div style="display: flex; flex-direction: column;">
                <b>Agents Tab</b>
                <img src="@/assets/imgs/projects/roundrobin_agents.png" class="carousel-img">
              </div>
            </slide>
            <slide>
              <div style="display: flex; flex-direction: column;">
                <b>Schedule Tab</b>
                <img src="@/assets/imgs/projects/roundrobin_schedule.png" class="carousel-img">
              </div>
            </slide>
            <slide>
              <div style="display: flex; flex-direction: column;">
                <b>Queue Tab</b>
                <img src="@/assets/imgs/projects/roundrobin_queue.png" class="carousel-img">
              </div>
            </slide>
            <slide>
              <div style="display: flex; flex-direction: column;">
                <b>Assignments Tab</b>
                <img src="@/assets/imgs/projects/roundrobin_assignments.png" class="carousel-img">
              </div>
            </slide>
            <slide>
              <div style="display: flex; flex-direction: column;">
                <b>Batch Tab</b>
                <img src="@/assets/imgs/projects/roundrobin_batches.png" class="carousel-img">
              </div>
            </slide>
          </carousel>
    </div>
    <div class="about">
      <p class="title" style="font-weight: bolder;">Round Robin</p>
      <div>
          <p class="mobile-p">The Round Robin tool is designed to distribute both standard and custom object records across multiple agents and teams. The tool aims to optimize this process by considering factors such as agent availability, weighting, and capacity.</p>
          <div> 
            <p class="mobile-h3"><b>Features</b></p>
            <dl class="mobile-p">
              <dt>○ <b>Agent Management</b>: Manages the list of users who act as agents in a distribution, allowing managers to add/remove users and adjust their weightings.</dt>
              <dt>○ <b>Record Distribution</b>: Routes records to designated agents based on pre-set rules and constraints.</dt>
              <dt>○ <b>Frequency Control</b>: Allows managers to set the frequency at which the distribution runs (daily/weekly), along with specific times of day</dt>
            </dl>
          </div>
        </div>
    </div>
    <div style="height: 20%">
    
    
    </div>

  </div>
</template>
<script>
import Vue from 'vue';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
import { Carousel, Slide } from 'vue-carousel';
  export default {
    name: 'Round Robin',
    components: {
      Carousel,
      Slide
    }
  }
</script>

<style scoped>

  .about{
    padding: 0px 10px;
    max-width: 80vw;
    line-break: normal;
  }
  .roundRobinFeed
  {
    overflow: scroll;
    position: absolute;
    height: 100vh;
    width: 100vw;
  }

  .roundRobinFeed::scrollbar
  {
    display: none;
  }

  .gay
  {
    position: absolute; 
    z-index: 0;
  }

  #gradient
  {
    position: absolute; 
    z-index: 1;
  }
  
  #container {
    position: relative;
    width: 75px;
    height: 75px;
    overflow: hidden;
    margin: 10% auto;
  }

  #gradient
  {
    opacity: .9;
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.1));
  }


  .carousel-img{
    max-height: 450px;

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

  .title{
    color: rgb(64, 61, 77);
    font-size: 2em; 
    font-weight: 500;
    line-height: 0;;
  }

  dt{
    line-height: 150%;
  }

@media (max-width: 500px) 
{
  .mobile-p
  {
    font-size: 1.2em;
  }
  
  .mobile-h3
  {
    font-size: 1.5em;
  }
  
  .banner
  {
    height: 300px;
  }

  .carousel-img{
    max-height: 450px;
  }

  #gradient
  {
    opacity: 0;
  }
  .about{
    padding: 0px 10px;
    max-width: 60vw;
  }
}
</style>