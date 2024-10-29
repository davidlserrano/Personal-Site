<template>
	<div class="home">
		<div id="display">
			<div id="text">
				<h1><em>Creativity Meets Code</em></h1>
				<p>Engineering professional with an interest in the software life cycle, full stack development, and project management.</p>
				<a href="https://drive.google.com/file/d/1Vu5KBG728VqV_6byaek3OKU5v0Fe_WSS/view?usp=sharing" target="_blank" id="button">View Resume</a>
			</div>
		</div>
		<div id="contact">
			<div id="socials"><Socials/></div>
			<div id="footer">Copyright © 2021 David Serrano. All rights reserved.</div>
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
		height: 100vh;
		width: 100.5%;
		display: block;
		overflow-y: scroll;
		margin-left: -10px;
	}

	#display{
		width: 100%;
		height: 90vh;
		/*max-height: 690px;
		min-height: 690px;*/
		display: flex;
		flex-direction: column;
		padding: 0px 25px 0px 35px;
		background: url(gradient.png) no-repeat top center;
		background-size: cover;
		justify-content: center;
	}

	::-webkit-scrollbar {
		display: none;
	}

	html {
		-ms-overflow-style: none; 
		scrollbar-width: none;  
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
		display: flex;
		justify-content: center;
		margin-top: 20px;
	}

	#page{
		height: 100vh;
		display: block;
		position: relative;
		margin: 0px;
		vertical-align: middle;
	}

	#skills{
		display: flex;
		justify-content: center;
		height: inherit;
		padding: 0px 0px 0px 0px;
		width: 98.9%;
	}

	#contact{
		background: #dbdfe5;
		height: 200px;
		width: 100%;
		position: absolute;
		vertical-align: middle;
	}

	#footer{
		margin-top: 20px;
		display: flex;
		justify-content: center;
		font-size: 0.7em;
	}

</style>