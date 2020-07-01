<template>
  <div>
      <div class="display">
          <h1>{{name}} was pressed</h1>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Display',
        components: {
        
        },
        props: ['name']
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .display{
        background: #353535;
        height: 90vh;
        width: 95%;
        border-radius: 7px;
        margin:auto;
        opacity: 0.7;
        color: white;
    }
</style>