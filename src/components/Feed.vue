<template>
  <div>
      <div class="display">
            <div v-if="option === '' && current === 'Projects'"><Pokemon/></div>
            <div v-if="option === 'Photography'" id="photography"><Photography/></div>
            <div v-if="option === 'Pokemon: East Bay'" id="Pokemon"><Pokemon/></div>
            <div v-if="option === '' && current === 'Hobbies'"><Art/></div>
            <div v-if="option === 'Art'"><Art/></div>
            <div v-if="option === 'Graphic Design'"><GraphicDesign/></div>
            <div v-if="option === 'Codepath'"><Android/></div>
    </div>
  </div>
</template>

<script>            
    import Photography from '@/components/Photography';
    import Pokemon from '@/components/Pokemon';
    import Art from '@/components/Art';
    import GraphicDesign from '@/components/GraphicDesign';
    import Android from '@/components/Android';


    export default {
        name: 'Display',
        components: {
            Photography,
            Pokemon,
            Art,
            GraphicDesign,
            Android
        },
        props: ['option', 'current']

    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .display{
        width: inherit;
        margin-left: 1%; 
        margin-top: 1.8%;
        
    }


</style>