<template>
  <div id="socialsDisplay">
		<a href="lol"><img id="mylogo" class="icon" src="@/assets/imgs/DS.png"></a>
		<a href="https://github.com/davidlserrano"><img class="icon" src="@/assets/imgs/github.png"></a>
		<a href="https://www.linkedin.com/in/davidleoserrano/"><img class="icon" src="@/assets/imgs/linkedin.png"></a>
		<a href="mailto: davidleoserrano@gmail.com"><img class="icon" src="@/assets/imgs/email.png"></a>
  </div>
</template>

<script>
    
    export default {
        name: 'Socials',
        components: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#socialsDisplay{
		display: flex;
		flex-direction: row;
		border: solid 1px #252525;
		border-radius: 5px;
		position: relative;
		width: 200px;
		margin: auto;
		justify-content: center;
		margin-top: 1%;
	}

	.icon{
		position: relative;
		max-height: 25px;
		width: auto;
		padding: 5px 5px 5px 5px;
		vertical-align: middle;
	}

	#mylogo{
		border-radius: 30px;
	}
    
</style>