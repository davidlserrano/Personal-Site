<template>
  <div class="display">
      <img v-scrollanimation id="img1" src="@/assets/imgs/bird.jpg"><span class="copyright">© 2012 David Serrano All Rights Reserved</span>
      <img v-scrollanimation id="img1" src="@/assets/imgs/lavender.jpg"><span class="copyright">© 2012 David Serrano All Rights Reserved</span>
      <img v-scrollanimation id="img1" src="@/assets/imgs/fish.jpg"><span class="copyright">© 2012 David Serrano All Rights Reserved</span>
      <img v-scrollanimation id="img1" src="@/assets/imgs/FLY.png"><span class="copyright">© 2012 David Serrano All Rights Reserved</span>
    </div>
</template>

<script>
    export default {
        name: 'Photography',
        props: ['options', 'option'],
        components: {
   
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
    .display{
        display: flex;
        flex-direction: row;
        overflow: scroll;
        width: inherit;
        height: inherit;
        flex-basis: fit-content;
    }

    .display::-webkit-scrollbar{
        display: none;
    }

    #img1{
        width: auto;
        height: 65%;
        padding: 0px 3px 0px 15px;
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

    .copyright{
      font-family: Times New Roman;
      color: #353535;
      font-size: 11px;
      overflow: visible;
    }

</style>