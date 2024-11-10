<template>
  <div class="pokemonDisplay">

<!-- SLIDE -->

    <div class="slide" id="slide1"> 
      <img id="loginIMG" src="@/assets/imgs/login.png">
      <div id="text1">
        <h2>Pokemon: East Bay</h2>
        <div id="description">
          <p>A semester long group project intended to experience the software development life cycle.</p>
          <p>From documentation to software testing, my role involved both programming and project management capabilities to help ensure the success of the project.</p>
          </div>
        <a href="https://github.com/davidlserrano/Pokemon-East-Bay" target="_blank" id="button">Github Repo</a>
      </div>
    </div>

<!-- SLIDE -->

    <div class="slide" id="slide2"> 
      <div id="list1">
        <h3>Roles & Responsibilities</h3>
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
        <h3>Dependencies Used</h3>
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

<!-- SLIDE -->

    <div class="slide" id="slide5">
          <h4 id="ingameText">In-Game Images</h4>
          <div id="ingameIMGcontainer">
            <img src="@/assets/imgs/ingame.png" class="ingameIMG">
            <img src="@/assets/imgs/menu.png" class="ingameIMG">
            <img src="@/assets/imgs/bag.png" class="ingameIMG">
            <img src="@/assets/imgs/itemUse.png" class="ingameIMG">
            <img src="@/assets/imgs/merchant.png" class="ingameIMG">
            <img src="@/assets/imgs/nurse.png" class="ingameIMG">
            <img src="@/assets/imgs/pokeBattle.png" id="pokebattle" class="ingameIMG">
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

  export default {
    name: 'Pokemon',
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
    color: white;
  }

  dt{
    font-size: 1em;
    padding-top: 10px;
  }

  dd{
    font-size: 1.2em;
    padding-right: 10px;
  }

  h3{
    font-size: 1.4em;
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
    width: 84%;
    min-width: 1024px;
    max-width: 89.9%;
    height: 86vh;
    background: #282923;
        /* background: linear-gradient(rgba(153, 168, 194,.1), rgba(64, 61, 77, 0.761)); */
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

/*------------------------slide------------------------*/

  .slide{
    display: block;
    width: 100%;
    color: white;
    float: none;
    clear: both;
    margin-bottom: 5%;
  }

  #loginIMG{
    min-width: 50%;
    max-width: 50%;
    height: auto;
    padding: 25px 25px 25px 25px;
    border-radius: 35px;
  }

  #slide1{
    display: flex;
    flex-direction: row;
    vertical-align: top;
    margin-top: 3%;
  }

  #slide2{
    display: flex;
    flex-direction: row;
    vertical-align: top;

    justify-content: center;
  }


  #text1{
    padding: 0px 10px 0px 0px;
  }

  #description{
    font-size: .87em;
  }

  #list1{
    border-right: solid 1px white;
    width: 50%;
    padding-right: 10px;
  }

  #list2{
    padding: 0px 0px 0px 25px;
  }

/*------------------------slide------------------------*/

  #slide3{
    width: 100%;
    min-height: 900px;
    height: 100vh;
    max-height: 900px;
  }

  #uml{
    padding: 20px 0px 0px 25px;
  }

  #umlIMG
  {
    margin:auto;
    width: 95%;
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
    background: #fff;
    color: #282923;
    font-weight: bolder;
    width: 110px;
    height: auto;
    border-radius: 5px;
    margin-left: 5px;
    margin-bottom: 100px;
    padding: 2px 5px 2px 5px;
  }


/*------------------------slide------------------------*/

  #slide4{
    min-height: 800px;
    height: 100vh;
    max-height: 800px;
    margin-top: 20px;
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
    height: 670px;
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
    max-height: 500px;
  }

  #pokebattle{
    border-radius: 10px;
    margin-bottom: 25px;
    width: 920px;
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