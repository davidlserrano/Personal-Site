<template>
	<div class="layout">	
			<div id="container">
				<div class="btn"><h3>&#60;</h3></div>
				<div id="imageContainer">
					<img id="image" src="#">
				</div>
				<div class="btn"><h3>&#62;</h3></div>
			</div>
	</div>
</template>

<script>
    export default {
		name: 'ImageGallery',
		props: [ 'path' ],
		methods: {
			wig: function(){
				return window.alert("hello");
			}
		},
		mounted(){
			return document.getElementById('image').setAttribute("src", "https://imgur.com/x4hYDZk.gif");
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.btn{
		padding: 0 25px 0px 25px;
		margin: auto;
		font-weight: lighter;

	}
	/*<img src="@/assets/imgs/simpleTweet.png" id="img">*/
	.btn:hover{
		padding: 0 25px 0px 25px;
		margin: auto;
		font-weight: bolder; 
		background: #DBDDE0;
		border-radius: 50px;
		cursor: pointer;
	}

	#container{
		width: inherit;
		height: auto;
		margin: auto;
		display: flex;
		flex-direction: row;
	}

	#imageContainer{
		height: 20%;
	}

	#image{
		height: 600px;
		border-radius: 10px;
	}
</style>