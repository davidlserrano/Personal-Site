<template>
  <div class="pokemonDisplay">
     <img class="slide" src="@/assets/imgs/pokemon1.png">
     <img class="slide" src="@/assets/imgs/pokemon2.png">
     <img class="slide" src="@/assets/imgs/pokemon3.png">
     <div id ="pdfs">
     </div>
     <img class="slide" src="@/assets/imgs/pokemon4.png">
     <img class="slide" src="@/assets/imgs/pokemon5.png">
   </div>
</template>

<script>
    export default {
        name: 'Pokemon',
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .pokemonDisplay{
        overflow: scroll;
        width: inherit;
        height: 93%;
        background: #212121;
        position: fixed;
    }

    #pdfs{
        display: flex;
        flex-direction: row;
        overflow: scroll;
        height: 100%;
        width: 100%;
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
        width: 100%;
      }

</style>