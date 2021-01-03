<template>
  <div id="form">
    <h1 style="text-align:center;">Feel free to reach out!</h1>

        <form name="contact" method="POST" data-netlify="true">
            
        <label> Name: </label>
            <br>
        <div id="nameInput">
        <input type="text" name="name" placeholder="First">  
        </div>
            
        <div id="nameInput">
        <input type="text" name="last" placeholder="Last"/>
        </div>
<br>
      
        <p>
            <label>Email: 
            <br>
            <input type="email" name="email" placeholder="Email"></label>
        </p>
            
        <p>
            <label>
            Subject: 
            <br>
            <input type="text" name="subject" placeholder="Subject"></label>
        </p>
            
        <p>
            <label>
            Message: 
            <br>
            <textarea name="message"></textarea></label>
        </p>

        <p>
        <button type="submit">Send</button>
        </p>

        </form>
  </div>
</template>

<script>
export default {
  name: 'Form'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #form{
        border: 1px #353535 solid;
        margin: auto;
        width: 400px;
        border-radius: 10px;
        padding: 0px 20px 10px 20px;
        margin-top: 5%;
    }
    
    input{
        padding: 12px 5px 5px 5px;
        border-radius: 8px;
        border: 1px gray solid;
        width: 95%;
        opacity: .8;
    }
    
    textarea{
        border-radius: 8px;
        width: 96.5%;
        height: 80px;
        max-width: 96.5%;
        min-width: 96.5%;
        max-height: 250px;
             opacity: .8;
    }
    
    #nameInput{
        padding: 0px 16px 10px 0px;
        float:left;
        min-width: 46%;
    }
    
    button{
        background-color: #d2d7df;
        border-radius: 5px;
        border: 1px gray solid;
        height: 25px;
    }
    
</style>