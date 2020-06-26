<template>
  <div class="menu">
      <div id="options">
        Option<br>
        Option<br>
        Option<br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #options{
        color: white;
        width: inherit;
        height: 150px;
        margin-top: 10px;
        margin-left: 25px;
        border-right: 1px white solid;
        font-size: 16px;
    }
    
</style>