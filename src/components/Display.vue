<template>
  <div>
    <div>
      <div class="hamby">
        <button id="hamb-menu" @click="hambyClicked">☰</button>
      </div>
      <div id="menu2" v-if="showMenu">
        <Menu 
          v-bind:options="options" 
          @option-clicked="clicked.option = $event.name"
          @op-clicked="opClicked"/>
      </div>
    </div>
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
  </div>
</template>

<script>
    import Menu from '@/components/Menu';
    import Feed from '@/components/Feed'; 
    
    export default 
    {
      name: 'Display',
      props: ['options', 'option', 'current'],
      components: {
        Menu, 
        Feed
      },
      methods: 
      {
        hambyClicked()
        {
          this.showMenu = !this.showMenu;
        },
        opClicked()
        {
          this.showMenu = false;
        }
      },
      data() {
          return {
            clicked: {
              option: '',
              display: false
            }, 
            showMenu: false
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
        /* width: 100%; */
        /* background: pink; */
    }
    .hamby
    {
        display: none;
    }

    #hamb-menu
    {
      font-size: 2em;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: 5px;
    }
    #hamb-menu:hover
    {
      font-size: 2em;
      border: none;
      background: lightgray;
      cursor: pointer;
      border-radius: 5px;
    }

    #menu{
        position: relative;
        border-right: 1px solid black;
    } 
    
    #feed{
        position: relative;
        width: 100%;
    }
    #menu2
    {
      display: none;
    }

    @media (max-width: 500px) 
    {
      .layout 
      {
        padding: 10px 0 0 0;
        /* flex-direction: column; */
        display: block;
      }

      .hamby
      {
          display: flex;
      }

      #menu {
        display: none;
      } 

      #feed{
        position: fixed;
      }
      #menu2 {
        display:block;
        position: absolute;
        /* background: rgba(202, 202, 202, 0.5); */
        background: linear-gradient(to right, rgba(243, 245, 248, 1), rgba(243, 245, 248, .5));
        border-radius: 5px;
        /* float: left; */
        z-index: 10;
        color: white;
        width: 100vw;
        height: 100vh;
      } 
    }
</style>