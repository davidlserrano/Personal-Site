<template>
  <div class="layout">
    <div id="menu"><Menu v-bind:options="options" v-on:option-clicked="updateFeed" /></div>
    <div id="feed"><Feed/></div>
  </div>
</template>

<script>
    import Menu from '@/components/Menu';
    import Feed from '@/components/Feed';
    
    export default {
        name: 'Display',
        props: ['options'],
        components: {
          Menu, 
          Feed
      },
        method: {
            updateFeed: function(){
                alert("emit worked properly")
            }
            
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .layout{
        display: flex;
        height: inherit;
        width: inherit;
    }
    
    #menu{
        width: 115px;
        margin-top: 10px;
        margin-left: 17px;
    }
    
    #feed{
        width: 100%;
        padding: 0px 0px 0px 0px;
    }

    
</style>