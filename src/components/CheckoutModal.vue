<template>
  <div class="checkoutFeed">
    <div class="banner">
      <div id="gradient"></div>
      <div class="gay"></div>
    </div>

    <div id="about">
      <div style="flex: 3; padding: 10px;">
        <div>
          <p class="title" style="font-weight: bolder;">Checkout Modal</p>
          <p class="mobile-p">The Checkout Modal was a project that involved overhauling an outdated Visualforce page implementation and migrating it into a Lightning Web Component</p>
          <p class="mobile-p">Migrating the component provided an innovative solution that simplified the checkout process by providing a seamless and intuitive experience</p>
          <p class="mobile-p">Saw a <b>~25%</b> increase in revenue coming out of Salesforce since its release in Jan 2024 compared to the previous year</p>
        </div>
        <br/>
        <p class="mobile-h3"><b>Contributions</b></p>
        <dl class="mobile-p">
          <dt>○ <b>Improved UI/UX</b>: Designed, implemented, and integrated both the front and back-end of the new modal</dt>
          <dt>○ <b>Multiple Payment types</b>: Enabled split payment processing between multiple cards or credit lenders</dt>
          <dt>○ <b>Card Payment Caching</b>: Leveraged tokenization to securely cache tokenized card information and saving users time on having to manually re-enter card details </dt>
          <dt>○ <b>Real-time Validation</b>:  Validates user input in real-time providing automatic calculations on discounts and split card payment amounts</dt>
          <dt>○ <b>Product Bundles</b>: Helped introduce bundled products that generated an additional <b>$5 million</b> in revenue for the 2024 year</dt>
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

    <div style="padding: 5% 0">
      <carousel>
            <slide>
              <div style="padding: 0 0 15px 0;">
                <b>Split Payment Processing</b>
              </div>
              <img src="@/assets/imgs/projects/split_cards.gif" class="carousel-img" style="border-radius: 5px;">
            </slide>
            <slide>
              <b>Product Selection</b>
              <img src="@/assets/imgs/projects/product_selection.png" class="carousel-img">
            </slide>
            <slide>
              <b>Order Summary</b>
              <img src="@/assets/imgs/projects/order_summary.png" class="carousel-img">
            </slide>
            
          </carousel>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
import { Carousel, Slide } from 'vue-carousel';
  export default {
    name: 'Checkout Modal',
    components: {
      Carousel,
      Slide
    }
  }
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


  .carousel-img{
    max-height: 600px;
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
  padding: 5px;
}

#about
{
  display: flex; 
  flex-direction: row; 
  width: 80%; 
  /* height: 100%; */
}

.banner
{
  position: relative; 
  overflow: hidden; 
  height: 500px; 
  width:100vw; 
  border-bottom: 1px solid gray;
}

@media (max-width: 500px) 
{
  #about
  {
    width: 90%; 
  }
  
  .mobile-p
  {
    font-size: 1.2em;
  }
  
  .mobile-h3
  {
    font-size: 1.5em;
  }
  
  .banner
  {
    height: 300px;
  }

  .carousel-img{
    max-height: 450px;
  }

  .gay
  {
    margin-left: -2%;
    width: 100%;

    background-color: pink;
    background-position: -3vw -3vh;
    background-size: 140%;
    background-repeat: no-repeat;
  }

  #gradient
  {
    opacity: 0;
  }
}
</style>