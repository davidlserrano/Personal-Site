<template>
  <div id="app">
      <Header/>
      <footer>
  <p>Copyright © 2019 David Serrano. All rights reserved.</p>
  
</footer>
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
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: left;
      color: #353535;
      height: 1000px;
    }
    /*og bg: #BDBBB0*/
    body{
        background-color: #F2F5F8;
        overflow: hidden;
    }

    footer{
      font-family: Times New Roman;
      font-size: 12px;
    }

</style>
