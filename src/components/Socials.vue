<template>
  <div id="socialsDisplay">
		<img id="icon" src="@/assets/imgs/linkedin.png">
		<img id="icon" src="@/assets/imgs/email.png">
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
		background: pink;
		position: relative;
	}
    
</style>