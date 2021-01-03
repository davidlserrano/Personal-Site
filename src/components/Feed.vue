<template>
  <div>
      <div class="display">
            <div v-if="option === 'Photography'" id="photography"><Photography/></div>
            <div v-if="option === 'Pokemon'" id="Pokemon"><Pokemon/></div>
            <div v-if="option === 'Art'"><Art/></div>
    </div>
  </div>
</template>

<script>            
    import Photography from '@/components/Photography';
    import Pokemon from '@/components/Pokemon';
    import Art from '@/components/Art';

    export default {
        name: 'Display',
        components: {
            Photography,
            Pokemon,
            Art,
        },
        props: ['option']
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .display{
        height: 90vh;
        width: 91.5vh;
        margin: auto;
        margin-top: 1.45%;
    }


</style>