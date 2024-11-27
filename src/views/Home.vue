<template>
	<div class='home'>
		<div id='display'>
			<div id='text'>
				<!-- <div id='canvas2'></div> -->
				<div id='canvas'>
					<div id='inner-line'>
						{{bg}}
					</div>																																																		
				</div>
		
			</div>
		</div>
		<div id='contact'>
			<div id='socials'><Socials/></div>
			<div id='footer'>Copyright © 2024 David Serrano. All rights reserved.</div>
		</div>
	</div>
</template>
		
<script>
	import Socials from '@/components/Socials';
	
	export default 
	{
		name: 'Home',
		components: 
		{
			Socials
		},
		data()
		{
			return {
				bg: '',
				xyz: '',
			}
		},
		mounted() {
			this.fetchData();
		},
		methods: 
		{
			fetchData() 
			{
				console.log('fetching');
				if(!this.xyz)
				{
					var encodedUNP = btoa(process.env.client_id + ':' + process.env.client_secret);
					var client = new XMLHttpRequest();
					client.open('POST', process.env.baseURL + process.env.blah, true);
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
				console.log('getting');
				var JSONResponse = '';
				var JsonBody = '';
				var xhr = new XMLHttpRequest();
				// xhr.open('GET', 'https://conejo-dev-ed.develop.my.salesforce.com/services/apexrest/grabBack', true);
				xhr.open('GET', process.env.baseUrl + process.env.grabBack , true);
				xhr.setRequestHeader('Authorization','Bearer ' + x );
				xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
				xhr.setRequestHeader('Accept', 'application/json');
				xhr.onload = () =>
				{
					console.log('got');
					JSONResponse = xhr.responseText;
					this.bg = JSON.parse(xhr.responseText).message;
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
			}
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
	/* margin-top: -30px; */
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
	
	::-webkit-scrollbar {
	display: none;
	}
	
	html {
	-ms-overflow-style: none; 
	scrollbar-width: none;  
	}
	
	#text{
	margin: auto;
	color: white;
	}
	
	#canvas
	{
	/* border-radius: 0 100% 0 100%; */
	z-index: -1;
	/* border-radius: 50% 50% 0% 0%; */
	/* width: 99vw; */
	height: 70vw;
	background: linear-gradient( rgb(64, 61, 77), rgba(153, 168, 194, 0.761));
	/* background-repeat: none; */
	overflow:hidden;
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


</style>