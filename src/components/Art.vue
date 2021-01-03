<template>
  <div class="display">
  
    <InstagramEmbed
        clientAccessToken='123|456'
      url='https://instagr.am/p/Ytlfl/'
      maxWidth={500}
      hideCaption={false}
      containerTagName='div'
    />

  </div>
</template>
<script>
import InstagramEmbed from '/node_modules/react-instagram-embed';

export default {
  name: 'Art',
  componenets:{
    InstagramEmbed,
  },
}

</script>

<style scoped>
    .display{
        background: #c7c7c7;
        height: 90vh;
        width: 98%;
        border-radius: 5px;
        margin: auto;
        color: white;
        margin-top: 1.45%;
    }


</style>