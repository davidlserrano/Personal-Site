<template>
  <div class="layout">
    <div id="menu"><Menu/></div>
    <div id="feed"><Feed/></div>
  </div>
</template>

<script>
    import Menu from '@/components/Menu';
    import Feed from '@/components/Feed';
    
    export default {
      name: 'Display',
      components: {
          Menu, 
          Feed
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .layout{
        display: flex;

    }
    
    #menu{
        width: 135px;
    }

    
</style>