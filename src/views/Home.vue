<template>
<div class="home">
	<div id="display">
		<div id="text">
			<div id="canvas2"></div>
			<div id="canvas">
				<div id="inner-line">
					<!-- <stars></stars> -->
				<!-- <iframe  src="@/assets/stars.txt"></iframe> -->
				<!-- <embed type="text/html" src="@/assets/stars.txt" width="800" height="400"> -->
			</div>																																																		
			</div>
	
		</div>
	</div>
	<div id="contact">
		<div id="socials"><Socials/></div>
		<div id="footer">Copyright © 2024 David Serrano. All rights reserved.</div>
	</div>
</div>
</template>


<script setup>
import { onMounted } from 'vue'
// import x from '/stars.html'
// import x from './stars.txt';

onMounted(() => {
  console.log(`the component is now mounted.`);
	//   const reader = new FileReader();
	// fetch("stars.html")
	//   .then((res) => res.text())
	//   .then((text) => {
	//    })
	//   .catch((e) => console.error(e));
})
</script>

<script>
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from "firebase/database";
// import { getDatabase, ref, onValue, set } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpbP0eYPaka9VbN1uSYKPgy0HIxgGUEIw",
  authDomain: "boots-diva.firebaseapp.com",
  databaseURL: "https://boots-diva-default-rtdb.firebaseio.com",
  projectId: "boots-diva",
  storageBucket: "boots-diva.firebasestorage.app",
  messagingSenderId: "1029841498328",
  appId: "1:1029841498328:web:6c7ea67f926284a23767ad"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// set(ref(db, 'users/userId'), {
//     username: 'david',
//     email: 'email'
//   });
  
const starCountRef = ref(db, 'users/userId');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log('snapshotdata:: ', data);
//   updateStarCount(postElement, data);
});

// console.log('database:: ',JSON.stringify(database));
// import html from "eslint-plugin-html"
import Socials from '@/components/Socials';
export default {
	name: 'Home',
	components: {
		Socials
	},
	files: ["**/*.html"],
	// plugins: { html },
} 


// const example = new Vue({
//   data: () => ({ file: null, content: null }),
//   template: `
//     <div style="border-style:solid">
//       <input type="file" ref="doc" @change="readFile()" />
//       <div>{{content}}</div>
//     </div>
//   `,
//   methods: {
//     readFile() {
//       this.file = this.$refs.doc.files[0];
//       const reader = new FileReader();
//       if (this.file.name.includes(".txt")) {
//         reader.onload = (res) => {
//           this.content = res.target.result;
//         };
//         reader.onerror = (err) => console.log(err);
//         reader.readAsText(this.file);
//       } else {
//         this.content = "check the console for file output";
//         reader.onload = (res) => {
//           console.log(res.target.result);
//         };
//         reader.onerror = (err) => console.log(err);
//         reader.readAsText(this.file);
//       }
//     }
//   }
// });
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

.test {
font-family: 'Montserrat', sans-serif;
}
#display{
	display: flex;
	flex-direction: column;
	/* background: pink; */
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
	margin: 3% auto;
	color: white;
}

#canvas
{
	/* border-radius: 0 100% 0 100%; */
	z-index: -1;
	border-radius: 50% 50% 0% 0%;
	width: 99vw;
	height: 100vw;
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



/* #inner-line
{
	position:absolute;
	border-radius: 50% 50% 20% 20%;
	width: 90%;
	height: 90%;
	border: 2px solid #F2F5F8;
	overflow:hidden;
	margin:auto;
} */

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