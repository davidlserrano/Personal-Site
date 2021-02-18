<template>
	<div class="home">
		<div id="display">
			<div id="text">
				<h1><em>Creativity Meets Code</em></h1>
				<p>Aspiring engineering professional with an interest in the software life cycle, full stack development, and project management.</p>
				<a href="https://drive.google.com/file/d/1EQOc_svNS0sbJN7YKNJf1a8GjH-lDz2w/view?usp=sharing" target="_blank" id="button">View Resume</a>
				<div id="socials"><Socials/></div>
				<div id="footer">Copyright © 2021 David Serrano. All rights reserved.</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Socials from '@/components/Socials';
    
    export default {
        name: 'Home',
        components: {
            Socials
        }
    }

</script>

<style scoped>

	h1{
		font-weight: lighter;
		font-size: 5em;
		margin-bottom: 0px;
		margin-top: 0px;
	}

	p{
		padding: 0px 150px 10px 10px;
	}

	.home{
		position: fixed;
		height: auto;
		width: 99.3%;
	}

	#display{
		position: fixed;
		width: 94%;
		height: 100vh;
		max-height: 690px;
		min-height: 690px;
		margin-top: .5%;
		display: flex;
		flex-direction: column;
		padding: 0px 25px 0px 35px;
		background: url(gradient.png) no-repeat top left;
		background-size: cover;
		justify-content: center;
	}

	#text{
		position: absolute;
		width: 500px;
	}

	#button{
		text-decoration: none;
		border: none;
		background: #353535;
		color: white;
		font-weight: bolder;
		width: 110px;
		height: auto;
		border-radius: 5px;
		margin-left: 10px;
		margin-bottom: 100px;
		padding: 2px 5px 2px 5px;
	}

	#socials{
		margin-top: 15%;
		padding: 0px 100px 0px 0px;
	}

	#footer{
		position: absolute;
		margin-top: 20%;
		margin-left: -7%;
		font-size: 0.7em;
	}
</style>