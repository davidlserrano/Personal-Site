<template>
  <div class="pokemonDisplay">

<!-- SLIDE -->

    <div class="slide" id="slide1"> 
      <img id="loginIMG" src="@/assets/imgs/login.png">
      <div id="text1">
        <h2>Pokemon: East Bay</h2>
        <h3>May 2020</h3>
        <!-- <div id="description"> -->
          <p>Semester long group project following the Agile framework</p>
          <p>My role required both development and project management skills to ensure to the teams overall success</p>
          <!-- </div> -->
        <a href="https://github.com/davidlserrano/Pokemon-East-Bay" target="_blank" id="button">Github Repo</a>
      </div>
    </div>

<!-- SLIDE -->

    <div class="slide" id="slide2"> 
      <div id="list1">
        <h3>Roles & Responsibilities</h3>
        <dl>
          <dt>○ <b>Client & Game GUI</b></dt>
          <dd>Connected both front and back end systems</dd>
          <dt>○ <b>Player</b></dt>
          <dd>Implemented database management, user movement, and NPC interactions  </dd>
          <dt>○ <b>Player Menu</b></dt>
          <dd>Provided an in-game menu giving players the ability to navigate their game data</dd>
          <dt>○ <b>NPCs</b></dt>
          <dd>Co-developed the overall game's interface and functionality</dd>
        </dl>
      </div>

<!-- SLIDE -->

      <div id="list2">
        <h3>Dependencies</h3>
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

    <div class="slide" id="slide5">
          <h4 id="ingameText">In-Game Images</h4>
          <carousel>
            <slide>
              <img src="@/assets/imgs/ingame.png" class="ingameIMG">
            </slide>
            <slide>
              <img src="@/assets/imgs/menu.png" class="ingameIMG">
            </slide>
            <slide>
              <img src="@/assets/imgs/bag.png" class="ingameIMG">
            </slide>
            <slide>
              <img src="@/assets/imgs/itemUse.png" class="ingameIMG">
            </slide>
            <slide>
              <img src="@/assets/imgs/merchant.png" class="ingameIMG">
            </slide>
            <slide>
              <img src="@/assets/imgs/nurse.png" class="ingameIMG">
            </slide>
            <slide>
              <img src="@/assets/imgs/pokeBattle.png" id="pokebattle" class="ingameIMG">
            </slide>
          </carousel>
    </div>

    <!-- SLIDE -->
     
      <div class="slide" id="slide3"> 
          <div id="uml">
          <h4>UML Design</h4>
          <a href="https://i.imgur.com/wUKPbrM.png" target="_blank" id="button">Full Image</a>
          </div>
          <div id="umlContainer">
            <img id="umlIMG" src="@/assets/imgs/UML.png">
          </div>
        </div>

    <!-- SLIDE -->

    <div class="slide" id="slide4">
      <div id="reqTxt"><h4>Requirements Documentation</h4></div>
      <div id="reqIMGS">
        <img src="@/assets/imgs/reqs1.png" class="reqs">
        <img src="@/assets/imgs/reqs2.png" class="reqs">
      </div>
    </div>

<!-- SLIDE 

    <div class="slide" id="slide5">
      <img id="ingameIMG" src="@/assets/imgs/ingame.png">
      <div id="text2">
        <h1>Player Movement</h1>
      </div>
    </div>

SLIDE 

    <div class="slide" id="slide6">
      <div id="text3">
        <h4>Handle Method</h4>
        <p>By default the JavaFx handle method runs a million times per second, causing sporadic behavior in the player's movement. </p>
        <p>We added two variables, <span class="code">elapsedNanoSeconds</span> and <span class="code">elapsedSeconds</span>, that allowed us to have a method which updates the player movement at a more steady pace.
        </p>
      </div>
      <img id="movementCode" src="@/assets/imgs/movementCode.png">
    </div>



    <div class="slide" id="slide7">
      <h1 id="text4">Pokemon Battles</h1>
    </div>
-->

  </div>
</template>

<script>
  import Vue from 'vue';
  import VueCarousel from 'vue-carousel';
  Vue.use(VueCarousel);
  import { Carousel, Slide } from 'vue-carousel';
  export default {
    name: 'PatientChart',
    components: {
      Carousel,
      Slide
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    font-weight: bolder;
    font-size: 2em;
    /* margin-top: 0px;
    margin-bottom: 0px; */
  }
  
  h2{
    font-size: 2em;
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 0px;
    /* font-family: 'Montserrat',Avenir, Helvetica, Arial, sans-serif; */
  }


  p{
    font-size: 1.6em;
  }

  dt{
    font-size: 1.3em;
    padding-top: 10px;
  }

  dd{
    font-size: 1.5em;
    padding-right: 10px;
  }

  h3{
    font-size: 1.5em;
    margin-top: 0px;
    margin-bottom: 0px;
  }


  h4{
    font-size: 1.8em;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .code{
    font-family: Courier New;
    font-weight: bold;
    color: white;
  }

  .pokemonDisplay{
    overflow: scroll;
    font-family: 'Courier New', Courier, monospace;
    /* background: linear-gradient(to left, rgba(153, 168, 194,.1), rgba(64, 61, 77, 0.4)); */
    position: fixed;
    height: 100vh;
    width: 100vw;
    /* opacity: .5; */
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

/*------------------------slide------------------------*/

  .slide{
    padding: 15px;
    display: block;
    max-width: 100%;
    /* color: white; */
    color: rgb(64, 61, 77);
    float: none;
    clear: both;
  }

  #loginIMG{
    max-height: 500px;
    border-radius: 5px;
    /* border: 0px solid rgb(64, 61, 77, .4); */
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
    justify-content: left;
    background: #e1e1e182;
    border-radius: 5px;
  }


  #text1{
    /* padding: 20px 10px 50px 0px; */
    padding: 10px;
    width: 50%;
    border-radius: 0 5px 5px 0; 
    /* text-wrap: wrap; */
    background: #e1e1e182;
  }

  #description{
    /* font-size: .87em; */
  }

  #list1{
    /* border-right: solid 1px  rgb(64, 61, 77, .5); */
    width: 45%;
    padding-right: 10px;
  }

  #list2{
    padding: 0px 0px 0px 25px;
  }

/*------------------------slide------------------------*/

  #slide3{
    /* width: 100%; */
    /* min-height: 900px; */
    /* height: 100vh; */
    /* max-height: 900px; */
    margin-top: 1%;
    background: #e1e1e182;
    border-radius: 5px;
  }

  #uml{
    padding: 20px 0px 0px 25px;
  }

  #umlIMG
  {
    margin:auto;
    width: 95%;
    height: auto;
  }
  #umlIMG{
    height: 800px;
    /* margin-left: 1%; */
    display: flex;
    justify-content: center;
  }

  #button{
    text-decoration: none;
    border: none;
    /* background: #fff; */
    /* color: #282923; */
    color: white;
    background: rgb(64, 61, 77, .6);
    font-weight: bolder;
    width: 110px;
    height: auto;
    border-radius: 5px;
    font-size: 1.1em;;
    margin-left: 5px;
    margin-bottom: 100px;
    padding: 1px 20px 1px 20px;
  }


/*------------------------slide------------------------*/

  #slide4{
    min-height: 800px;
    height: 100vh;
    max-height: 800px;
    margin-top: 20px;
    background: #e1e1e182;
    border-radius: 5px;
  }

  #slide5{
    min-height: 800px;
    height: 100vh;
    max-height: 800px;
    margin-top: 20px;
    background: #e1e1e182;
    border-radius: 5px;
  }

  #reqTxt{
    padding-left: 12px;
  }

  #reqIMGS{
    display: flex;
    flex-direction: horizontal;
    justify-content: center;
    padding: 20px 0px 20px 0px;
  }

  .reqs{
    height: 80vh;
    padding: 0px 0px 0px 15px;
  }

  /*------------------------slide------------------------*/

  #ingameText{
    padding: 0px 0px 0px 25px;
  }
  #ingameIMGcontainer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    float: none;
    justify-content: center;
  }

  .ingameIMG{
    max-height: 700px;
  }

  #pokebattle{
    border-radius: 10px;
    height: 80%;
    margin: 0 1%;
    /* margin-bottom: 25px; */
    /* width: 920px; */
  }


  /*------------------------
  #slide5{ 
    display: flex;
    flex-direction: row;
    float: none;
  }

  #text2{
    padding: 410px 0px 0px 0px;
    vertical-align: bottom;
  }

  #ingameIMG{
    width: 50%;
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
    height: 100%;
    background-size: 100%;
    display: flex;
  }

  #text4{
    padding: 45px 0px 0px 35px;
    width: 200px;
    vertical-align: middle;
  }
------------------------*/

</style>