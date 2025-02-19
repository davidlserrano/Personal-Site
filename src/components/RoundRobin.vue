<template>
  <div class="roundRobinFeed">
    <div style="padding: 1% 1%">
      <carousel>
            <slide>
              <div style="display: flex; flex-direction: column; object-fit: contain">
                <b>Workcenter</b>
                <!-- <img src="@/assets/imgs/projects/roundrobin_workcenter.png" class="carousel-img"> -->
                <Imgzoom src="/imgs/roundrobin_workcenter.png" zoomScale=".4"/>


              </div>
            </slide>
            <slide>
              <div style="display: flex; flex-direction: column;">
                <b>Agents Tab</b>
                <Imgzoom src="/imgs/roundrobin_agents.png" zoomScale=".4"/>
              </div>
            </slide>
            <slide>
              <div style="display: flex; flex-direction: column;">
                <b>Schedule Tab</b>
                <Imgzoom src="/imgs/roundrobin_schedule.png" zoomScale=".4"/>
              </div>
            </slide>
            <slide>
              <div style="display: flex; flex-direction: column;">
                <b>Queue Tab</b>
                <Imgzoom src="/imgs/roundrobin_queue.png" zoomScale=".4"/>
              </div>
            </slide>
            <slide>
              <div style="display: flex; flex-direction: column;">
                <b>Assignments Tab</b>
                <Imgzoom src="/imgs/roundrobin_assignments.png" zoomScale=".4"/>
              </div>
            </slide>
            <slide>
              <div style="display: flex; flex-direction: column;">
                <b>Batch Tab</b>
                <Imgzoom src="/imgs/roundrobin_batches.png" zoomScale=".4"/>
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
              <dt class="dt-padding-small">○ <b>Agent Management</b>: Enables managing the list of users who act as agents in a distribution, allowing managers to add/remove users and adjust their weights easily.</dt>
              <dt class="dt-padding-small">○ <b>Record Distribution</b>: Routes records to designated agents based on pre-set rules and constraints.</dt>
              <dt class="dt-padding-small">○ <b>Frequency Control</b>: Allows managers to set the frequency at which the distribution runs (daily/weekly), along with specific times of day</dt>
            </dl>
          </div>
          <div style="display: flex; flex-direction: row;"> 
            <div style="flex: 1;">
              <p class="mobile-h3"><b>Technology Used</b></p>
              <dl class="mobile-p">
                <dt>○ Apex</dt>
                <dt>○ Lightning Web Components</dt>
                <dt>○ Chart.js</dt>
              </dl>
            </div>
            <div style="flex: 3;">
              <p class="mobile-h3"><b>Contributions</b></p>
              <dl class="mobile-p">
                <dt class="dt-padding-small">○ <b>Flow-to-Code Migration</b>: Architectured the migration of Flow implementation into back-end code, ensuring seamless integration and enhanced compatibility</dt>
                <dt class="dt-padding-small">○ <b>Scalability</b>: Leveraged Batch Apex to allow millions of records to be processed, a major improvement from the original 2,000 element break point it had</dt>
                <dt class="dt-padding-small">○ <b>Dynamic Back-end Logic</b>: Developed adaptable logic that supports new objects without disrupting existing processes, offering flexibility and future scalability </dt>
                <dt class="dt-padding-small">○ <b>Maintenance & Optimizations</b>: Collaborated with stakeholders to identify areas of improvement, including record entry criteria refactoring, scheduled job failure prevention measures, and user experience improvements.
                </dt>
              </dl>
            </div>
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
import { Carousel, Slide } from 'vue-carousel';
// import VueImageZoomer from 'vue-image-zoomer'
// import 'vue-image-zoomer/dist/style.css';
import Imgzoom from './imgzoom.vue';

Vue.use(VueCarousel);


  export default {
    name: 'RoundRobin',
    components: {
      Carousel,
      Slide,
      Imgzoom
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

  .dt-padding-small
  {
    padding: 5px;
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