<template>
  <div class="view">
      <Display v-bind:options="options"  :current="current"/>
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
        return {
            current: "Work",
            options: [
                {id: 0 , name: "Salesforce", suboptionsEnabled: true,
                      suboptions: [
                      {id: 0, name :"Checkout Modal"},
                      {id: 1, name :"Round Robin"}, 
                      {id: 2, name :"Patient Chart"}]},
                {id: 1, name: "Misc Projects", class: "disabled-option", suboptionsEnabled: true, 
                    suboptions: [{id: 0, name :"Pokemon: East Bay"}, {id: 1, name :"Portfolio"}]}
            ]
        }
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>