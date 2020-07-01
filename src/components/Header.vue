<template>
  <div>
    <div id="nav">
        <span id="name">David Serrano</span>

        <span id="link"><router-link to="/">Home</router-link></span>
        <span id="link"><router-link to="/about">About</router-link></span>
        <span id="link"><router-link to="/projects">Projects</router-link></span>
        <span id="link"><router-link to="/hobbies">Hobbies</router-link></span>
        <span id="link"><router-link to="/contact">Contact</router-link></span>
    </div>
    <router-view/>
  </div>
</template>


<script>
export default { 
    name: "Header",
    components:{
        
    }
}
</script>

<style>
    #nav{
        border-bottom: 1px white solid;
    }

    #nav a {
        color: white;
        text-decoration: none;
        font-size: 13.5px;
    }
     #nav a:hover {
        font-weight: bolder;
    }


    #nav a.router-link-exact-active {
      color: #8A897C;
        font-weight: bold;
    }
    
    #name{
        font-family: Didot;
        color: white;
        font-weight: 100;
        font-size: 40px;
        padding: 0px 25px 0px 20px; 
    }
    
    #link{
        padding: 0px 3px 0px 3px;
    }


</style>
