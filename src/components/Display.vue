<template>
  <div class="layout">

    <div id="menu">
      <Menu 
        v-bind:options="options" 
        @option-clicked="clicked.option = $event.name"/>
    </div>

    <div id="feed">
      <Feed 
        :option="clicked.option"
        :current="current"/>
    </div>

  </div>
</template>

<script>
    import Menu from '@/components/Menu';
    import Feed from '@/components/Feed';
    
    export default {
        name: 'Display',
        props: ['options', 'option', 'current'],
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
        flex-direction: row;
        height: inherit;
        position: fixed;
        width: 98.8%;
    }
    
    #menu{
        margin-top: .85%;
        margin-left: 1.5%; 
        position: relative;
    } 
    
    #feed{
        position: relative;
        width: 100%;
    }


    
</style>