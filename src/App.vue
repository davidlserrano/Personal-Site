<template>
  <div id="app">
      <Header/>
  </div>
</template>


<script>
    import Header from '@/components/Header';
    
export default { 
    name: "app",
    components:{
      Header
    }
}
</script>

<style>
/* ABSOLUTELY DO NOT TOUCH THE TEXT ALIGN */
/* PLS */
    #app {
      font-family: 'Montserrat',Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: left;
      color: rgb(64, 61, 77);
    }
    body{
        background-color: #F2F5F8;
        overflow: hidden;
    }

    footer{
      font-size: 12px;

    }

</style>
