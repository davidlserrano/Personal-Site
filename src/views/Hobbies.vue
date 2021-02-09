<template>
  <div class="hobbies">
      <Display v-bind:options="options" :current="current"/>
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
            current: "Hobbies",
            options: [
                {id: 1, name: "Art"}, 
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