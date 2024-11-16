<template>
  <div class="view">
      <Display v-bind:options="options"  v-bind:suboptions="suboptions" :current="current"/>
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
            current: "Work",
            options: [
                {id: 0 , name: "Salesforce", suboptions: [{id: 0, name :"Patient Chart"},{id: 1, name :"Checkout Modal"}]},
                {id: 1, name: "Misc Projects", suboptions: [{id: 0, name :"Pokemon: East Bay"}]}
            ]
        }
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>