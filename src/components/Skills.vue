<template>
	<div id="skilslDisplay">
		<div class="skillsList" id="languages">
			<h2>Languages</h2>
			<p>Java</p>
			<p>C++</p>
			<p>Python</p>
			<p>Javascript</p>
		</div>
	
		<div class="skillsList" id="languages">
			<h2>Technoligies</h2>
			<p>Java</p>
			<p>C++</p>
			<p>Python</p>
			<p>Javascript</p>
					<p>Javascript</p>
							<p>Javascript</p>
									<p>Javascript</p>
		</div>
		<div class="skillsList" id="languages">
			<h2>Languages</h2>
			<p>Java</p>
			<p>C++</p>
			<p>Python</p>
			<p>Javascript</p>
		</div>
	</div>
</template>

<script>
    export default {
      name: 'Skills'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#skillDisplay{
		margin: 0 auto;
		background: pink;
	}

	.skillsList{
		border: 1px solid black;
		display: inline-block;
		vertical-align: top;
		margin: 50px;
	}	

	#languages{
		width: auto;
		padding: 20px;
		border-radius: 5px;
	}

	p{
		margin: auto;
		text-align: center;
	}

	h2{
		margin: 0px 0px 20px 0px;
	}

</style>