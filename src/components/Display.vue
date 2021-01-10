<template>
  <div class="layout">

    <div id="menu"><Menu v-bind:options="options" @option-clicked="clicked.option = $event.name" /></div>
    <div id="feed"><Feed :option = "clicked.option"/></div>

  </div>
</template>

<script>
    import Menu from '@/components/Menu';
    import Feed from '@/components/Feed';
    
    export default {
        name: 'Display',
        props: ['options', 'option'],
        components: {
          Menu, 
          Feed
      },
        data() {
           return {
             clicked: {
               option: ''
             }
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