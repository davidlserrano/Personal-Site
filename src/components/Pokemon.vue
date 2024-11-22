<template>
  <div class="pokemonDisplay">

<!-- SLIDE -->

    <div class="slide" id="slide1"> 
      <img id="loginIMG" src="@/assets/imgs/pkmn/login.png">
      <div id="text1">
        <h2>Pokemon: East Bay</h2>
        <h3>May 2020</h3>
        <!-- <div id="description"> -->
          <p>Semester long group project following the Agile framework</p>
          <p>My role required both development and project management skills to ensure to the team's overall success</p>
          <!-- </div> -->
        <a href="https://github.com/davidlserrano/Pokemon-East-Bay" target="_blank" id="button">Github Repo</a>
      </div>
    </div>
  <br/>
<!-- SLIDE -->

    <div class="slide" > 
      <div id="slide2">
        <div id="list1">
          <h3>Roles & Responsibilities</h3>
          <dl>
            <dt>○ <b>Client & Game GUI</b></dt>
            <dd>Co-developed the overall game's interface and functionality</dd>
            <dt>○ <b>Player</b></dt>
            <dd>Implemented database management, user movement, and NPC interactions  </dd>
            <dt>○ <b>Player Menu</b></dt>
            <dd>Provided an in-game menu giving players the ability to interact with their game data</dd>
          </dl>
        </div>
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
    </div>
    <br/>
<!-- SLIDE -->

    <div class="slide" id="slide5">
          <h4 id="ingameText">In-Game Images</h4>
          <carousel>
            <slide>
              <img src="@/assets/imgs/pkmn/ingame.png" class="ingameIMG">
            </slide>
            <slide>
              <img src="@/assets/imgs/pkmn/menu.png" class="ingameIMG">
            </slide>
            <slide>
              <img src="@/assets/imgs/pkmn/bag.png" class="ingameIMG">
            </slide>
            <slide>
              <img src="@/assets/imgs/pkmn/itemUse.png" class="ingameIMG">
            </slide>
            <slide>
              <img src="@/assets/imgs/pkmn/merchant.png" class="ingameIMG">
            </slide>
            <slide>
              <img src="@/assets/imgs/pkmn/nurse.png" class="ingameIMG">
            </slide>
            <slide>
              <img src="@/assets/imgs/pkmn/pokeBattle.png" id="pokebattle" class="ingameIMG">
            </slide>
          </carousel>
    </div>
    <br/>
    <!-- SLIDE -->
     
      <div class="slide" id="slide3"> 
          <div id="uml">
          <h4>UML Design</h4>
          <a href="https://i.imgur.com/wUKPbrM.png" target="_blank" id="button">Full Image</a>
          </div>
          <div id="umlContainer">
            <!-- <image-zoom 
  regular="/assets/imgs/pkmn/UML.png" >				
</image-zoom> -->

            <img id="umlIMG" src="@/assets/imgs/pkmn/UML.png" preview>
          </div>
        </div>

    <!-- SLIDE -->
    <br/>
    <div class="slide" id="slide4">
      <div id="reqTxt"><h4>Requirements Documentation</h4></div>
      <div id="reqIMGS">
        <img src="@/assets/imgs/pkmn/reqs1.png" class="reqs">
        <img src="@/assets/imgs/pkmn/reqs2.png" class="reqs">
      </div>
    </div>

<!-- SLIDE 

    <div class="slide" id="slide5">
      <img id="ingameIMG" src="@/assets/imgs/pkmn/ingame.png">
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
      <img id="movementCode" src="@/assets/imgs/pkmn/movementCode.png">
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
import { Carousel, Slide } from 'vue-carousel';

Vue.use(VueCarousel);

// import imageZoom from 'vue-image-zoomer'
  export default {
    name: 'Pokemon',
    components: {
      Carousel,
      Slide,
      // imageZoom
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
    /* font-family: Courier New; */
    font-weight: bold;
    color: white;
  }

  .pokemonDisplay{
    overflow: scroll;
    height: 100vh;
  }

  .pokemonDisplay::-webkit-scrollbar{
    display: none;
  }

  .space-buffer_small{
    height: 1%;
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
    padding: 1%;
    max-width: 85vw;
    color: rgb(64, 61, 77);
    margin: auto;
    background: #e1e1e182;
  }

  #loginIMG{
    max-height: 400px;
    border-radius: 5px;
  }

  /* slide 1 - ab project */
  #slide1{
    display: flex;
    flex-direction: row;
    vertical-align: top;
  }

    /* slide 3 - roles & resps */
  #slide2{
    display: flex;
    flex-direction: row;
    vertical-align: top;
    justify-content: left;
    border-radius: 5px;
    width: 90%; 
    margin: auto;

  }

  /* slide 3 - UML */
  #slide3{
    margin-top: 1%;
    border-radius: 5px;
  }


    /* slide 4 - req chart */
  #slide4{
    min-height: 800px;
    height: 100vh;
    max-height: 800px;
    margin-top: 20px;
    border-radius: 5px;
  }

      /* slide 5 - in-game images */
  #slide5{
    min-height: 800px;
    height: 100vh;
    max-height: 800px;
    margin-top: 20px;
    border-radius: 5px;
  }

  #text1{
    padding: 10px;
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
  }

</style>