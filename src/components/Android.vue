<template>
	<div id="layout">
		<div class="project">	
			<AndroidProject :side="left" :title="SimpleTweet"/>
		</div>
		<div class="project">	
			<AndroidProject :side="right" :title="InstagramClone"/>
		</div>
		<div id="spacing"></div>

	</div>
</template>

<script>
    import AndroidProject from '@/components/AndroidProject';

    export default {
		name: 'Android',
		components: {
			AndroidProject
		},
		data(){
			return{
				left: "L",
				right: "R",
				SimpleTweet: "SimpleTweet",
				InstagramClone: "Instagram Clone",
				Groupchat: "Groupchat"
			}	
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#layout{
		overflow-y: scroll;
		height: 100vh;
	}

	.project{
		border-bottom: .1px solid black;
		position: relative;
	}

	::-webkit-scrollbar {
		display: none;
	}

	html {
		-ms-overflow-style: none; 
		scrollbar-width: none;  
	}

	#spacing{
		height: 80px;
	}
    
</style>