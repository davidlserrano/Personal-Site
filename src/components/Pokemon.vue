<template>
  <div class="display">
	<text>cock</text>
   </div>
</template>

<script>
    export default {
        name: 'Pokemon'   
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
        background: #353535;

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