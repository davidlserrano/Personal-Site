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
    #app {
      font-family: 'Montserrat',Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: left;
      color: #353535;
    }
    /*og bg: #BDBBB0*/
    body{
        background-color: #F2F5F8;
        overflow: hidden;
    }

    footer{
      font-size: 12px;

    }

</style>
