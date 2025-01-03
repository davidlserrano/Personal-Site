<template>
  <div id="photographyDisplay">
    <horizontal-scroll>
      <div class="slide">
        <img class="img" src="@/assets/imgs/photography/bird.jpg">
        <p class="copyright">© 2012 David Serrano All Rights Reserved</p>
      </div>

      <div class="slide">
        <img v-scrollanimation class="img" src="@/assets/imgs/photography/lavender.jpg">
        <p class="copyright">© 2012 David Serrano All Rights Reserved</p>
      </div>
      
      <div class="slide">
        <img v-scrollanimation class="img" src="@/assets/imgs/photography/fish.jpg">
        <p class="copyright">© 2012 David Serrano All Rights Reserved</p>
      </div>

       <div class="slide">
        <img v-scrollanimation class="img" src="@/assets/imgs/photography/FLY.png">
        <p class="copyright">© 2012 David Serrano All Rights Reserved</p>
      </div>

       <div class="slide">
        <div id="buffer"></div>
      </div>

    </horizontal-scroll>
  </div>
</template>

<script>
  import HorizontalScroll from 'vue-horizontal-scroll'
  import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'
    export default {
        name: 'Photography',
        props: ['options', 'option'],
        components: {
          HorizontalScroll
      },
        data() {
           return {
             clicked: {
               option: ''
             }
           }
        }

     
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    @media (max-width: 500px) 
    {
      .img
      {
        height: 35vh;
      }
    }

    #photographyDisplay{
      width: 100%;
      /* height: 100vh; */
      position: fixed;
    }

    .slide{
      position: relative;
      display: inline-block;
      /* max-width: 95%; */
      padding: 0px 3px 0px 0px;  
    }

    .img
    {
      max-height: 90vh;
    }

    .copyright{
      color: rgb(64, 61, 77);
      display: block;
      font-size: 11px;
      font-family: Times New Roman;
      padding: 0px 0px 0px 0px;
    }

    #buffer{
      height: 100px;
      width: 200px;
      color:red;
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
</style>