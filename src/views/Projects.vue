<template>
  <div class="view">
      <Display v-bind:options="options" :current="current"/>
  </div>
</template>

<script>
    import Display from '@/components/Display';
    
    export default {
      name: 'Projects',
      components: {
          Display
      },
    data(){
        return{
            current: "Projects",
            options: [
                {id: 1, name: "Pokemon: East Bay"}, 
                {id: 2, name: "Graphic Design"}
                
            ]
        }
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>