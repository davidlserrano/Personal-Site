<template>
  <div class="hobbies">
      <Display v-bind:options="options" />
  </div>
</template>

<script>
     import Display from '@/components/Display';
    
export default {
  name: 'Hobbies',
  components: {
    Display
  },
    data(){
        return{
            options: [
                {id: 1, name: "Art"}, 
                {id: 2, name: "Graphic Design"}, 
                {id: 3, name: "Photography"}
            ]
        }
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hobbies{
        height: 100vh;
    }
</style>