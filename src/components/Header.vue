<template>
  <div>
    <div id="nav">
        <span id="name"><router-link to="/">David Serrano</router-link></span>

        <span class="link"><router-link to="/">Home</router-link></span>
        <span class="link"><router-link to="/about">Resume</router-link></span>
        <span class="link"><router-link to="/projects">Projects</router-link></span>
        <span class="link"><router-link to="/hobbies">Hobbies</router-link></span>
        <span class="link"><router-link to="/contact">Contact</router-link></span>
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
    #name{
        font-family: Didot;
        color: #353535;
        font-weight: 100;
        font-size: 40px;
        padding: 0px 25px 0px 20px; 
    }

    #name a {
        color: #353535;
        text-decoration: none;
    } 

    #nav{
        border-bottom: 1px #353535 solid;
    }

    .link a {
        color: #353535;
        text-decoration: none;
        font-size: 13.5px;
    }

    .link a:hover {
        font-weight: bolder;
    }


    .link a.router-link-exact-active {
        color: #8A897C;
        font-weight: bold;
    }
    

    .link{
        padding: 0px 3px 0px 3px;
    }


</style>
