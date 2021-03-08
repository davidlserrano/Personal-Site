<template>
	<div class="display">

		<div class="layoutL" v-if="side === 'L'" >	
			<div id="projectText">
				<h1>{{title}}</h1>
				<a href="" target="_blank" id="button">Github Repo</a>
				<p>Project description</p>
			</div>
			<div id="imageGallery"><ImageGallery :path="title"/></div>
		</div>


		<div class="layoutR" v-if="side === 'R'" >	
			<div id="imageGallery"><ImageGallery :path="title"/></div>
			<div id="projectText">
				<h1>{{title}}</h1>
				<a href="" target="_blank" id="button">Github Repo</a>
				<p>Project description</p>
			</div>
		</div>


	</div>
</template>

<script>
	import ImageGallery from '@/components/ImageGallery'

    export default {
		name: 'AndroidProject',
		components: {
			ImageGallery
		},
		props: ['side', 'title'],
		data(){
			return{
				path: "twitterclone"
			}	
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	h1{
		padding: 20px 0px 0px 20px;
		margin-bottom: 0px;
	}

	p{
		padding: 20px 0px 0px 20px;
	}

	.layoutL{
		width: auto;
		min-height: 750px;
		height: 90vh;
		max-height: 750px;
		display: flex;
		flex-direction: row;
	}

	.layoutR{
		width: auto;
		min-height: 750px;
		height: 90vh;
		max-height: 750px;
		display: flex;
		flex-direction: row;
	}

	#projectText{
		width: 50%;
	}

	#imageGallery{
		width: 50%;
		margin: auto;
	}

	#button{
		text-decoration: none;
		border: none;
		background: #353535;
		color: white;
		font-weight: bolder;
		width: 90px;
		font-size: .8em;
		height: auto;
		border-radius: 5px;
		margin-left: 20px;
		padding: 2px 5px 2px 5px;
	}
    
</style>