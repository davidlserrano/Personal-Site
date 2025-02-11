<template>
	<div class='home'>
		<div id='display'>
			<div id='text' class="inner-line">
				<div style="height: 100 vh; width: 100vw;  display: flex; flex-direction: row;">
					<div style=" min-width: 850px; height: 1100px;">
						<div class='canvas'>
							{{bg1}}																																								
						</div>
					</div>
					<div style=" min-width: 850px; height: 1100px;">
						<div class='canvas'>
							{{bg}}																																									
						</div>
					</div>
					<div style="min-width: 850px; height: 1100px;"></div>
				</div>
				<!-- <div class='canvas inner-line'>
						{{bg}}																																									
				</div> -->
		
			</div>
		</div>
		<!-- <div id='contact'>
			<div id='socials'><Socials/></div>
			<div id='footer'>Copyright © 2024 David Serrano. All rights reserved.</div>
		</div> -->
	</div>
</template>
		
<script>
	// import Socials from '@/components/Socials';
	
	export default 
	{
		name: 'Home',
		components: 
		{
			// Socials
		},
		data()
		{
			return {
				bg: '',
				bg1: '',
				xyz: '',
				stars: '',
				count: '',
				count2: '',
			}
		},
		mounted() {
			this.fetchData();
		},
		methods: 
		{
			fetchData() 
			{
				if(!this.xyz)
				{
					var encodedUNP = btoa(process.env.client_id + ':' + process.env.client_secret);
					var client = new XMLHttpRequest();
					client.open('POST', process.env.baseUrl + process.env.blah, true);
					client.setRequestHeader('Authorization', 'Basic ' + encodedUNP);
					client.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
					let test = 'grant_type=client_credentials&client_id=' + process.env.client_id + '&client_secret=' + process.env.client_secret + '&response_type=token'

					client.send(test);

					client.onreadystatechange = ()=>
					{
						if(client.readyState == 3) {
							let response = JSON.parse(client.response);
							if (response.access_token) {
								this.xyz = response.access_token;
								this.getTextArt(response.access_token);
							}
						}
					}
				}
			},
			getTextArt(x)
			{
				var JSONResponse = '';
				var JsonBody = '';
				var xhr = new XMLHttpRequest();
				xhr.open('GET', process.env.baseUrl + process.env.grabBack , true);

				xhr.setRequestHeader('Authorization','Bearer ' + x );
				xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
				xhr.setRequestHeader('Accept', 'application/json');

				xhr.onload = () =>
				{
					JSONResponse = xhr.responseText;
					if(xhr.responseText)
					{
						this.bg = JSON.parse(xhr.responseText).message;
						this.bg1 = JSON.parse(xhr.responseText).message;
						this.bg = JSON.parse(xhr.responseText).stars[2];
						this.bg1 = JSON.parse(xhr.responseText).stars[0];
						this.stars =JSON.parse(xhr.responseText).stars;
						this.animate(JSON.parse(xhr.responseText).stars);
						// this.animateReverse(JSON.parse(xhr.responseText).stars);
					}
				};

				xhr.send(JsonBody);
				setTimeout( function()
				{
					if(xhr.status == 404){     
						//                
					}
					else if(xhr.status == 401){
						//
					}
					else if(xhr.status == 500){
						//
					}
					else if(xhr.status == 200)
					{
						let obj1 = JSON.parse(JSONResponse );
						for(var x=0;x< obj1.length;x++)
						{
							// var singleEle = obj1[x];
						}
					}
				}, 2000);	
			},
			animate()
			{
				
				console.log('finna animate this hoe');
				this.count = 0;
				this.count2 = this.stars.length-1;
				setInterval(() => {
					if(this.count >= this.stars.length)
					{
						this.count = 0;
					}
					this.bg = this.stars[this.count];
					this.count++;

					if(this.count2 < 0 )
					{
						this.count2 = this.stars.length - 1;
					}
					this.bg1 = this.stars[this.count2];
					this.count2--;
				}, 500);
			},

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
	width: 100.5vw;
	display: block;
	/* overflow-y: scroll; */
	margin-left: -10px;
	/* margin-top: -30px; */
	}

	.inner-line {
		opacity: 1;
		animation-name: fadeInOpacity;
		animation-iteration-count: 1;
		animation-timing-function: ease-in;
		animation-duration: 1.5s;
	}

	@keyframes fadeInOpacity {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	
	.test {
	font-family: 'Montserrat', sans-serif;
	}
	/* #display{
	display: flex;
	flex-direction: column;
	background-size: cover;
	justify-content: center;
	} */
	
	::scrollbar {
	display: none;
	}
	
	html {
	-ms-overflow-style: none; 
	scrollbar-width: none;  
	}
	
	#text{
		color: white;
	}
	
	.canvas
	{
	/* border-radius: 0 100% 0 100%; */
	z-index: -1;
	/* border-radius: 50% 50% 0% 0%; */
	/* width: 99vw; */
	height: 100vh;
	background: linear-gradient( rgb(64, 61, 77), rgba(153, 168, 194, 0.761));
	/* background-repeat: none; */
	overflow:hidden;
	/* background-clip: text;
	text-fill-color: transparent; */
	animation: colored 5s infinite linear(0, 1, 0);
	background-image: linear-gradient(180deg, rgb(64, 61, 77), rgba(153, 168, 194, 0.761));

	}
	
	#canvas2
	{
	position: fixed;
	z-index: 0;
	/* border-radius: 0 100% 0 100%; */
	width: 100vw;
	height: 150vw;
	background: linear-gradient( rgba(255, 255, 255, 0), rgba(242, 245, 248, .5));
	/* background-repeat: none; */
	/* overflow:hidden; */
	}
	
	#button{
	text-decoration: none;
	border: none;
	background: rgb(64, 61, 77);
	color: white;
	font-weight: 900;
	width: 110px;
	height: auto;
	border-radius: 5px;
	font-size: .7em;
	padding:5px 10px 5px 10px;
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

	@keyframes colored 
	{
		from {
			filter: hue-rotate(300deg);
		}
		to {
			filter: hue-rotate(450deg);
		}
	}


</style>