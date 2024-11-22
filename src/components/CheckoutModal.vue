<template>
  <div class="checkoutFeed">
    <div style="position: relative; overflow: hidden; height: 500px; width:100vw; border-bottom: 1px solid gray">
      <div id="gradient"></div>
      <div class="gay"></div>
    </div>

    <div style="display: flex; flex-direction: row; width: 80%; height: 100%">
      <div style="flex: 3; padding: 10px;">
        <div>
          <p class="title" style="font-weight: bolder;">Checkout Modal</p>
          <p>The Checkout Modal was a project that involved overhauling an outdated Visualforce page implementation and migrating it into a Lightning Web Component</p>
          <p>Migrating the component allowed the implementation of plenty new features to help the checkout process be a lot more seamless and efficient</p>
          <p>Since its release in Jan 2024, we saw about a 25% increase in revenue coming out of Salesforce compared to the previous year</p>
        </div>
        <br/>
        <p><b>Features</b></p>
        <dl>
          <dt>○ Shopify Link Generation</dt>
          <dt>○ Single or Multi Payment Type</dt>
          <dt>○ Auto Split Card Calculation</dt>
          <dt>○ Temporary Credit Card Caching</dt>
        </dl>
      </div>
      <div style="flex: 1;">
        <div id="integrationList">
          <p><b>Integrations</b></p>
          <div id="container">
            <div id="moon">
              <p>Azure</p>
            </div>
            <img id="sky" src="@/assets/imgs/icons/Azure.png" height="30vh" width="30vw">
          </div>
          <div id="container">
            <div id="moon">
              <p>Stripe</p>
            </div>
            <img id="sky" src="@/assets/imgs/icons/Stripe.jpeg" height="30vh" width="30vw">
          </div>
          <div id="container">
            <div id="moon">
              <p>Shopify</p>
            </div>
            <img id="sky" src="@/assets/imgs/icons/Shopify.png" height="30vh" width="30vw">
          </div>
          <div id="container">
            <div id="moon">
              <p>Checkout</p>
            </div>
            <img id="sky" src="@/assets/imgs/icons/Checkout.jpeg" height="30vh" width="30vw">
          </div>
        </div>
      </div>
    </div>
    <!-- <p>Integrations: Azure, Shopify, Stripe, Checkout.com</p> -->
  </div>
</template>
<script>
// import Vue from 'vue';
// import VueCarousel from 'vue-carousel';
// Vue.use(VueCarousel);
// import { Carousel, Slide } from 'vue-carousel';
//   export default {
//     name: 'Checkout Modal',
//     components: {
//       Carousel,
//       Slide
//     }
//   }
</script>

<style scoped>

  .checkoutFeed
  {
    overflow: scroll;
    position: absolute;
    height: 100vh;
    width: 100vw;
  }

  .checkoutFeed::-webkit-scrollbar
  {
    display: none;
  }

  .gay
  {
    position: absolute; 
    z-index: 0;
  }

  #gradient
  {
    position: absolute; 
    z-index: 1;
  }
  
  #container {
    position: relative;
    width: 75px;
    height: 75px;
    overflow: hidden;
    margin: 10% auto;
  }

  #sky {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1; /* Background layer */
    border-radius: 2.5px;
  }

  #moon {
    position: absolute;
    width: 100%; 
    height: 100%;
    background-color: #0a050d00; 
    border-radius: 100%;
    z-index: 2; 
    opacity: 0;
    text-align: center;
    transition: all .2s ease-out;
  }
  #moon:hover {
    position: absolute;
    width: 100%; 
    height: 100%;
    background-color: #4242426e; 
    color: white;
    border-radius: 5px;
    z-index: 2;
    opacity: 1;
    transition: all .2s ease-out;
    text-align: center;
    font-weight: bolder;
    line-height: 3;
    font-size: .8em;
  
  }

  #gradient
  {
    opacity: .9;
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.1));
  }

  .gay
  {
    margin-left: -15%;
    width:110%;
    height: 110%; 
    background-image: url('~@/assets/imgs/projects/checkoutmodal.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
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

  .title{
    color: rgb(64, 61, 77);
    font-size: 2em; 
    font-weight: 500;
    line-height: 0;;
  }

.integration{
  max-height: 50px;
}

  #integrationList
{
  position: relative;
  float: right;
  text-align: right;
}

.integration
{
  border-radius: 5px;
  overflow: hidden;
  position: absolute;
}
dt{
  line-height: 150%;
}
</style>