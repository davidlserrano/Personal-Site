<template>
	<div class="pokemonDisplay">

<!-- SLIDE -->

		<div class="slide" id="slide1"> 
			<img id="loginIMG" src="@/assets/imgs/login.png">
			<div id="text1">
				<h1>Pokemon: East Bay</h1>
				<p>A semester long group project intended to reproduce the software development life cycle.</p>
				<p>From documentation to software testing, my role involved both programming and project management capabilities to help ensure the success of the project.</p>
			</div>
		</div>

<!-- SLIDE -->

		<div class="slide" id="slide2"> 
			<div id="list1">
				<h2>Roles & Responsibilities</h2>
				<dl>
					<dt>○ <b>Client & Game GUI</b></dt>
					<dd>→ Connected the front-end and back-end systems</dd>
					<dt>○ <b>Player</b></dt>
					<dd>→ Implemented database management, user movement, and user interactions  </dd>
					<dt>○ <b>Player Menu</b></dt>
					<dd>→ Implemented a menu for users to look at their data and be able to save it</dd>
					<dt>○ <b>NPCs</b></dt>
					<dd>→ Implemented the GUI and functionality for a nurse and merchant NPC</dd>
				</dl>
			</div>

<!-- SLIDE -->

			<div id="list2">
				<h2>Dependencies Used</h2>
				<dl>
					<dt>○ <b>Maven</b> for package management</dt>
					<dt>○ <b>JavaFx</b> for the GUI framework</dt>
					<dt>○ Google’s <b>Firebase Realtime Database</b></dt>
					<dd>→ To store user’s account information</dd>
					<dd>→ Allow online Player versus Player</dd>
					<dt>○ NPCs</dt>
					<dd>→ <b>JUnit</b> for our test suite</dd>
				</dl>
			</div>
		</div>

<!-- SLIDE -->

		<div class="slide" id="slide3">
			<h2>UML Design</h2>
			<li
			v-for="(image, index) in media"
			:key="index"
			style="display: inline-block"
			>
				<img
				v-lazy="image.src"
				style="height: 100px"
				@click="openGallery(index)"
				>
			</li>

			<LightBox
			ref="lightbox"
			:media="media"
			:show-caption="true"
			:show-light-box="false"
			/>
		</div>

<!-- SLIDE -->

		<div class="slide" id="slide4">
			<h2>Requirements Documentation</h2>
		</div>

<!-- SLIDE -->

		<div class="slide" id="slide5">
			<img id="ingameIMG" src="@/assets/imgs/ingame.png">
			<div id="text2">
				<h1>Player Movement</h1>
			</div>
		</div>

<!-- SLIDE -->

		<div class="slide" id="slide6">
			<div id="text3">
				<h2>Handle Method</h2>
				<p>By default the JavaFx handle method runs a million times per second, causing sporadic behavior in the player's movement. </p>
				<p>We added two variables, <span class="code">elapsedNanoSeconds</span> and <span class="code">elapsedSeconds</span>, that allowed us to have a method which updates the player movement at a more steady pace.
				</p>
			</div>
			<img id="movementCode" src="@/assets/imgs/movementCode.png">
		</div>

<!-- SLIDE -->

		<div class="slide" id="slide7">
			<h1 id="text4">Pokemon Battles</h1>
		</div>


	</div>
</template>

<script>
	import LightBox from 'vue-image-lightbox'

	export default {
		name: 'GraphicDesign',
		components: {
			LightBox,
		},
		data () {
			return {
				media: [
				{
					thumb: '@/assets/imgs/UML.png',
					src: '@/assets/imgs/UML.png',
					caption: 'Pokemon: East Bay UML Design',
				}]
			}
  }
	}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1{
		font-weight: bolder;
		font-size: 6em;
		margin-top: 0px;
		margin-bottom: 0px;
	}
	
	h2{
		font-size: 3em;
		margin-top: 0px;
		margin-bottom: 0px;
	}

	p{
		font-size: 1.6em;
		color: #adadad;
	}

	dt{
		font-size: 1.6em;
		padding-top: 10px;
	}

	dd{
		font-size: 1.2em;
	}

	.code{
		font-family: Courier New;
		font-weight: bold;
		color: white;
	}

	.pokemonDisplay{
		overflow: scroll;
		width: 89.9%;
		min-width: 1000px;
		max-width: 1360px;
		height: 92%;
		background: #212121;
		position: fixed;
		border-radius: 5px;
	}

	.pokemonDisplay::-webkit-scrollbar{
		display: none;
	}

	.before-enter{
		opacity: 0.2;
		transform: translateX(70px);
		transition: all 2s ease-out;
	}

	.enter{
		opacity: 1;
		transform: translateX(0px);
	}

	.slide{
		display: block;
		width: 100%;
		color: white;
	}

	#loginIMG{
		width: 50%;
		min-width: 650px;
		padding: 25px 25px 25px 25px;
		border-radius: 35px;
	}

	#slide1{
		display: flex;
		flex-direction: row;
		vertical-align: top;
	}

	#slide2{
		display: flex;
		flex-direction: row;
		vertical-align: top;
		padding: 25px 0px 0px 25px;
	}


	#text1{
		padding: 0px 10px 0px 0px;
	}

	#list1{
		border-right: solid 1px white;
		width: 47.5%;
		min-width: 650px;
	}

	#list2{
		padding: 0px 0px 0px 25px;
	}

	#slide3{
		background: pink;
	}

	#slide4{
		background: orange;
		height: 100px;
	}

	#slide5{
		display: flex;
		flex-direction: row;
		vertical-align: bottom;
	}

	#text2{
		padding: 410px 0px 0px 0px;
		vertical-align: bottom;
	}

	#ingameIMG{
		width: 50%;
		min-width: 650px;
		padding: 25px 0px 0px 0px;
	}

	#slide6{
		display: flex;
		flex-direction: top;
		vertical-align: bottom;
		padding: 25px 0px 0px 0px;
	}


	#text3{
		padding: 0px 25px 0px 38px;
	}

	#movementCode{
		padding: 15px 25px 25px 0px;
		width: 50%;
	}

	#slide7{
		background: url("pokebattle.png") no-repeat center;
		height: 765px;
		background-size: 100%;
	}

	#text4{
		padding: 45px 0px 0px 35px;
		width: 200px;
	}


</style>