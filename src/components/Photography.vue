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
      height: 90vh;
      background: pink;
      position: fixed;
    }

    .slide{
      position: relative;
      display: table-cell;
      background: orange;
      max-width: 95%;
      padding: 0px 15px 0px 0px;
      height: auto;
    
    }

    .img{
      max-width: 100%;
      height: 200px!important;
     
    }

    .copyright{
      font-family: Times New Roman;
      color: #353535;
      font-size: 11px;
      display: block;
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