<template>
  <div class="chartFeed">
  
    <!-- MODAL - START -->
    <div v-if="displayNewPostModal">
      <div style="width: 100vw; height: 100vh; z-index: 20; position: absolute;">
        <dialog open class="modal">
          <!-- <p>Greetings, one and all!</p> -->
          <form method="dialog">
            <label for="pName">Name</label>
            <input type="text" id="pName" name="pName" v-model="postName" ><br><br>
            
            <label for="post">Message</label>
            <input type="text" id="post" name="post" v-model="postMessage" size="1"><br><br>
            
            <div style="text-align: center;">
              <button class="modalButton" @click="newPost">Post</button>
              <button class="modalButton"  @click="displayNewPostModal = false">Nevermind</button>
            </div>

          </form>
        </dialog>
      </div>
    </div>
    <!-- MODAL - END -->
    <div :class="container">
      <div class="patientChart">
          <div class="slds-grid" style="width: 100%; border-bottom: 1px solid #798ca1">
            <div style="width: 50%; padding: 1px 10px">
              <h2 style="color: white;" >don't be shy, say hi! :]</h2>
            </div>
          </div>

          <div style="border-left: 1px solid #798ca1">
            <div style="background: none; width: 100%; min-height: 350px">
              <div class="board" >

                <div class="post" v-for="(item, index) in posts" :key="index">
                <p style="width: 100%; overflow-y: scroll; height: 40px;">{{ item.body }}</p>

                <div style="text-align: right; width: 100%; line-height: 0px; overflow-wrap: break-word;">
                  <b>{{ item.name }}</b>
                  <p style="font-size:.9em;">{{ item.createdDate }}</p>
                </div>
                </div>
        
              </div>
            </div>
          </div>
      </div>
   </div>

  <button class="newNoteButton" @click="newPostModal" v-if="out">+</button>

  <button class="chartButton" @click="togglePatientChart" style="text-align: center; line-height: 0;">
    <p style="font-size: 2em;">🐰</p>
    <b style="color: white; font-size: .9em;">try me!</b>
  </button>
    
    <div style="padding: 1%;">
      <div> 
          <p id="text">Patient Chart</p>
          <p style="width:80vw;">The Patient Chart is a Lightning Web Component that provided teams across different departments a custom way to communicate with each other</p>
      </div>
      
      <div style="display: flex; flex-direction: row; min-width: 500px; max-width: 800px; margin: auto;">
        <div id="list1">
          <h3 style="text-align: left;">Features</h3>
          <dl>
            <dt>○ Unread Notifications</dt>
            <dt>○ Case Wrap Upne</dt>
            <dt>○ Player Menu</dt>
            <dt>○ Filters</dt>
          </dl>
        </div>
        <div id="list2">
          <h3 style="opacity: 0;">ok </h3>
          <dl>
            <dt>○ Record Management</dt>
            <dt>○ Pin/Highlight</dt>
            <dt>○ Color Blind Friendly UI</dt>
          </dl>
        </div>
      </div>
      <div style="text-align: center;">
        <img src="@/assets/imgs/projects/chart.gif" class="chartgif">
      </div>
    </div>

    <div style="height: 50vh;"></div>

  </div>
</template>

<script>
  import Vue from 'vue';
  import vmodal from 'vue-js-modal'
  Vue.use(vmodal)
  export default 
    {
      name: 'PatientChart',
      // props: ['options', 'option', 'current'],
      components: {

      },
      data() {
          return {
            container: 'container',
            out: false,
            xyz: '',
            displayNewPostModal: false,
            postName: '',
            postMessage: '',
            posts: [
            // { body: 'Foo', id: '1', name: 'diva', createdDate: '11.21.21' },
            //  { body: 'Bar',  id: '2' },
            //  { message: 'Foo', id: '1' }, 
            //  { message: 'Bar',  id: '2' },
            //  { message: 'Foo', id: '1' }, 
            //  { message: 'Bar',  id: '2' }
            ]

          }
      },
      methods: 
      {
        togglePatientChart()
        {
          this.container = 'container';
          this.container = this.out ? this.container + ' slide-out' : this.container  + ' slide-in'; 
          this.out = !this.out;
          this.generateToken('getposts');
        },
        newPostModal()
        {
          this.displayNewPostModal = !this.displayNewPostModal
          this.$modal.show('');

        },
        getPosts(x)
      {
        var JSONResponse = '';
        // var JsonBody = '';
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
            this.posts = JSON.parse(xhr.responseText).posts;
          }
        };

        xhr.send();
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
        generateToken(x)
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
                  if(x == 'newpost')
                    this.createPost(response.access_token);
                  else if(x == 'getposts')
                    this.getPosts(response.access_token);
                }
              }
            }
          }
          else
          {
            if(x == 'newpost')
              this.createPost(this.xyz);
            else if(x == 'getposts')
              this.getPosts(this.xyz);
          }
        },
        newPost() 
        {
          this.generateToken('newpost');
        },
        createPost(x)
        {
          this.postName = this.postName ? this.postName : 'anon';
          if(this.postMessage)
          {
            let post = {
              body: this.postMessage,
              name: this.postName
            }            

            var JSONResponse = '';
            var JsonBody = JSON.stringify(post);
            var xhr = new XMLHttpRequest();
            xhr.open('GET', process.env.baseUrl + process.env.newNote , true);

            xhr.setRequestHeader('Authorization','Bearer ' + x );
            xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
            xhr.setRequestHeader('Accept', 'application/json');

            xhr.onload = () =>
            {
              JSONResponse = xhr.responseText;
              if(xhr.responseText)
              {
                this.posts = JSON.parse(xhr.responseText).posts;
                this.displayNewPostModal = false;
                this.postMessage = '';
                this.postName = '';
              }
            };

            xhr.send(JsonBody);
            setTimeout(function()
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
          else
          {
            this.displayNewPostModal = false;
          }


        }
      }
    
    }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 label { display:block }
 input {
      resize: horizontal;
      width: 98%;
  }

  #post{
    height: 50px;
  }
  .post{
    background:  rgb(64, 61, 77);
    color: white;
    border: 1px solid white;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    /* background: linear-gradient( rgb(64, 61, 77), rgba(153, 168, 194, 0.761)); */
    /* max-width: 100px; */
    height: 100px;
    /* flex: 1 3 20%; */
    flex: 1 0 25%;
  }
  .board{
    padding: 1%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .chartFeed{
    overflow: scroll;
    /* background: linear-gradient(to left, rgba(153, 168, 194,.1), rgba(64, 61, 77, 0.4)); */
    position: fixed;
    height: 100vh;
    width: 100vw;
    /* opacity: .5; */
  }

  .chartFeed::-webkit-scrollbar{
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


  #list1{
    /* border-right: solid 1px  rgb(64, 61, 77, .5); */
    width: 45%;
    padding-right: 10px;
  }

  #list2{
    padding: 0px 0px 0px 25px;
  }

  #text
  {
    font-size: 2em; 
    font-weight: 500;
    line-height: 0;
  }
    
  .chartButton {
    background: rgb(64, 61, 77);
    min-height: 70px;
    width: 70px;
    border-radius: 10% 0 0 10%;
    border: none;
    position: fixed;
    right: 0;
    z-index: 15;
    opacity: 0.8;
    transition: 0.2s;
    margin-bottom: 5%;
    bottom: 0;
    border-right: 0;
  }

  .chartButton:hover {
    border-right: 0;
    background: rgb(64, 61, 77);
    min-height: 70px;
    width: 70px;
    border-radius: 10% 0 0 10%;
    border: none;
    position: fixed;
    right: 0;
    z-index: 15;
    opacity: 1;
    transition: 0.2s;
    transform: scale(1.2);
    margin-bottom: 5%;
    bottom: 0;
  }

.newNoteButton {
  font-size: 2em;
  color: white;
  background: rgb(64, 61, 77);
  padding: 5px;
  transition: 0.2s;
  cursor: pointer;
  opacity: 0.7;
  right: 0;
  position: fixed;
  bottom: 0;
  right: 0;
  border-radius:  100px;
  margin-bottom: 12%;
  margin-right: 1%;
  z-index: 15;
  border: none;
  width: 50px;
  height: 50px;
}
.newNoteButton:hover {
  transform: scale(1.1em);
  font-size: 2em;
  color: white;
  background: rgb(64, 61, 77);
  padding: 5px;
  transition: 0.2s;
  cursor: pointer;
  opacity: 0.7;
  right: 0;
  position: fixed;
  bottom: 0;
  right: 0;
  border-radius:  100px;
  margin-bottom: 12%;
  margin-right: 1%;
  z-index: 15;
  border: 1px solid white;
  width: 50px;
  height: 50px;
}

.container {
  height: 90vh;
  z-index: 10;
  position: fixed;
  right: 0;
  bottom: 0;
  transform: translateX(100%);
  transition: 0.3s;
}

.patientChart {
  width: 100vh;
  height: 100%;
	background: linear-gradient( rgb(64, 61, 77), rgba(153, 168, 194, 0.761));
  border-radius: 5px 0px 0px 5px;
  z-index: 10;
  position: relative;
  /* overflow: visible; */
}

.navBtns {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0 1% 10% 0;
  z-index: 11;
}

h1 {
  font-size: 1.5em;
  font-weight: 800;
}

h2 {
  font-size: 1.2em;
  font-weight: 600;
}

h3 {
  font-size: 1.15em;
  font-weight: 500;
  text-align: center;
}

.hardDivider {
  height: 1px;
  width: 100%;
  background: darkgray;
  margin-top: 5px;
}


.noteCard {
  border: 1px solid lightgray;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  min-height: 150px;
  background: #ececec;
  padding: 10px;
  margin: 0% auto 20px auto;
}

.upButton {
  background: green;
}

.slide-in {
  animation: slide-in 0.5s forwards;
  -webkit-animation: slide-in 0.5s forwards;
}

.slide-out {
  animation: slide-out 0.5s forwards;
  -webkit-animation: slide-out 0.5s forwards;
}

@keyframes slide-in {
  100% {
    transform: translateX(0%);
  }
}

@-webkit-keyframes slide-in {
  100% {
    -webkit-transform: translateX(0%);
  }
}

@keyframes slide-out {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}

@-webkit-keyframes slide-out {
  0% {
    -webkit-transform: translateX(0%);
  }
  100% {
    -webkit-transform: translateX(100%);
  }
}

.textButtons {
  font-weight: 500;
}

.textButtons:hover {
  font-weight: 800;
  cursor: pointer;
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}

.columnFilter {
  width: auto;
  text-align: center;
  padding: 5px;
  font-size: 0.9em;
}

.columnMenu {
  position: relative;
  /* margin-top: -15px; */
}

li {
  padding: 5px;
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}
::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
}

.modal
{
  background-color: #F2F5F8; 
  margin-top: 20%; 
  padding: 15px; 
  border: none; 
  border-radius: 5px;
  width: 300px;
}
.modalButton
{
  padding: 5px;
  margin: 5px;
  width: 80px
}

.unreadBubble {
  background: #d94a43;
  color: white;
  font-weight: bold;
  border-radius: 100px;
  height: 25px;
  width: 25px;
  position: fixed;
  z-index: 16;
  transition: 0.2s;
  text-align: center;
  padding: 2px;
}
.chartgif
{
  border-radius: 5px; 
  max-height: 600px;
}

@media (max-width: 500px) 
{
  .patientChart {
    width: 90vw;
  }
  .chartgif
  {
    border-radius: 5px; 
    max-height: 250px;
  }
  #list1{
  width: 40%;
  }

}

</style>