<template>
  <div class="display">

       <InstagramEmbed
      :url="'https://www.instagram.com/p/BzrslvdF35I/'"
      :appID="'442875790455965'"
      :client-token="'19d544e156a93e273284b8fa0a8c9d5b'"
      :hide-caption="true"
      class="IGpost"
    />

         <InstagramEmbed
      :url="'https://www.instagram.com/p/Bzrr_cXFGNg/'"
      :appID="'442875790455965'"
      :client-token="'19d544e156a93e273284b8fa0a8c9d5b'"
      :hide-caption="true"
      class="IGpost"
    />

     <InstagramEmbed
      :url="'https://www.instagram.com/p/BzrrJ2hli2K/'"
      :appID="'442875790455965'"
      :client-token="'19d544e156a93e273284b8fa0a8c9d5b'"
      :hide-caption="true"
      class="IGpost"
    />

     <InstagramEmbed
      :url="'https://www.instagram.com/p/B3d-1PrHSL3/'"
      :appID="'442875790455965'"
      :client-token="'19d544e156a93e273284b8fa0a8c9d5b'"
      :hide-caption="true"
      class="IGpost"
    />

     <InstagramEmbed
      :url="'https://www.instagram.com/p/B3Tth0tn0rR/'"
      :appID="'442875790455965'"
      :client-token="'19d544e156a93e273284b8fa0a8c9d5b'"
      :hide-caption="true"
      class="IGpost"
    />

     <InstagramEmbed
      :url="'https://www.instagram.com/p/CKxCKZwHjPu/'"
      :appID="'442875790455965'"
      :client-token="'19d544e156a93e273284b8fa0a8c9d5b'"
      :hide-caption="true"
      class="IGpost"
    />

      <InstagramEmbed
      :url="'https://www.instagram.com/p/B3qsZ8wn33A/'"
      :appID="'442875790455965'"
      :client-token="'19d544e156a93e273284b8fa0a8c9d5b'"
      :hide-caption="true"
      class="IGpost"
    />
    
      <InstagramEmbed
      :url="'https://www.instagram.com/p/CAqTxQ5HFUa/'"
      :appID="'442875790455965'"
      :client-token="'19d544e156a93e273284b8fa0a8c9d5b'"
      :hide-caption="true"
      class="IGpost"
    />
      <InstagramEmbed
      :url="'https://www.instagram.com/p/CB6FnZKnkj5/'"
      :appID="'442875790455965'"
      :client-token="'19d544e156a93e273284b8fa0a8c9d5b'"
      :hide-caption="true"
      class="IGpost"
    />
        

  </div>
</template>
<script>
import InstagramEmbed from "@/plugins/instaEmbed";


export default {
  components: {
    InstagramEmbed,
  },
};

</script>

<style scoped>
    .display{
        height: 90vh;
        overflow: scroll;
    }


    .IGpost{
      padding: 0px 10px 10px 10px;
      display:inline-block;
      vertical-align: top;
    }

      .display::-webkit-scrollbar{
        display: none;
    }

  

</style>