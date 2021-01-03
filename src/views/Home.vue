<template>
  <div class="home">
     <img id="img1" src="@/assets/imgs/me.png">
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
}

</script>

<style scoped>
	#img1{
		opacity: 0.9;
		height: 50vh;
		background: pink;
		margin-top: 1%;
		margin-left: 1.5%;
		border-radius: 8px;
	}
</style>