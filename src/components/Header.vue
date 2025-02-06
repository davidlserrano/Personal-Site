<template>
  <div>
    <div id="nav">
        <span id="name"><router-link to="/">DS</router-link></span>
        <!-- <span class="link"><router-link to="/">Home</router-link></span> -->
        <span class="link"><router-link to="/projects">Work</router-link></span>
        <span class="link"><router-link to="/hobbies">Hobbies</router-link></span>
        <span class="link"><router-link to="/contact">Contact</router-link></span>
        <span id="right-menu">
            <a href="https://drive.google.com/file/d/1FjIcTFg1dEGLU8m_scX2ksj6yKhZIKMS/view?usp=sharing" target="_blank" id="button">Resume</a>
        </span>
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

#right-menu
{
    position: absolute;
    right: 0;
    margin-right: 1%;
}

#button{
	text-decoration: none;
	border: none;
	background: rgb(64, 61, 77);
	color: white;
	font-weight: bolder;
	border-radius: 5px;
	font-size: .9em;
	padding:2px 6px 2px 6px;
}

#name{
    color: rgb(64, 61, 77);
    font-size: 1.5em;
    padding: 0px 25px 0px 20px;
    letter-spacing: 0.25em; 
}

#name a {
    color: rgb(64, 61, 77);
    text-decoration: none;
}

#nav{
    border-bottom: 1px rgb(64, 61, 77) solid;
}

.link a {
    color: rgb(64, 61, 77);
    text-decoration: none;
}

.link a:hover {
    font-weight: bolder;
}


.link a.router-link-exact-active {
    /* color: #8A897C; */
    font-weight: bold;
}


.link{
    padding: 0px 3px 0px 3px;
}


</style>
