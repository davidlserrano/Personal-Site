<template>
  <div id="photographyDisplay">
    <horizontal-scroll>

      <div class="slide">
        <img class="img" src="@/assets/imgs/bird.jpg">
        <p class="copyright">© 2012 David Serrano All Rights Reserved</p>
      </div>

      <div class="slide">
        <img v-scrollanimation class="img" src="@/assets/imgs/lavender.jpg">
        <p class="copyright">© 2012 David Serrano All Rights Reserved</p>
      </div>
      
      <div class="slide">
        <img v-scrollanimation class="img" src="@/assets/imgs/fish.jpg">
        <p class="copyright">© 2012 David Serrano All Rights Reserved</p>
      </div>

       <div class="slide">
        <img v-scrollanimation class="img" src="@/assets/imgs/FLY.png">
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
    #photographyDisplay{
      width: 98.9%;
      height: 80vh;
      position: fixed;
    }

    .slide{
      position: relative;
      display: inline-block;
      max-width: 95%;
      padding: 0px 3px 0px 0px;  
    }

    .img{
      max-height: 650px;
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