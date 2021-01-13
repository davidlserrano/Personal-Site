<template>
  <div class="view">
      <Display v-bind:options="options"/>
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
            options: [
                {id: 1, name: "Pokemon: East Bay"}, 
                {id: 2, name: "Graphic Design"},
                {id: 3, name: "Personal Website"}
                
            ]
        }
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>