<template>
  <div>
      <div class="display">
            <div v-if="option === '' && current === 'Work'"><Salesforce/></div>
            <div v-if="option === 'Photography'" id="photography"><Photography/></div>
            <div v-if="option === 'Pokemon: East Bay'" id="Pokemon"><Pokemon/></div>
            <div v-if="option === 'Salesforce'" id="Salesforce"><Salesforce/></div>
            <div v-if="option === '' && current === 'Hobbies'"><Photography/></div>
            <div v-if="option === 'Art'"><Art/></div>
            <div v-if="option === 'Graphic Design'"><GraphicDesign/></div>
            <div v-if="option === 'Codepath'"><Android/></div>
            <div v-if="option === 'Patient Chart'"> <PatientChart/> </div>
            <div v-if="option === 'Checkout Modal'"><CheckoutModal/> </div>
            <div v-if="option === 'Portfolio'"><Portfolio/> </div>
    </div>
  </div>
</template>

<script>            
    import Photography from '@/components/Photography';
    import Pokemon from '@/components/Pokemon';
    import Art from '@/components/Art';
    import GraphicDesign from '@/components/GraphicDesign';
    import Android from '@/components/Android';
    import Salesforce from '@/components/Salesforce';
    import PatientChart from '@/components/PatientChart';
    import CheckoutModal from '@/components/CheckoutModal';
    import Portfolio from '@/components/Portfolio';

    export default {
        name: 'Display',
        components: {
            Photography,
            Pokemon,
            Art,
            GraphicDesign,
            Android,
            Salesforce,
            PatientChart,
            CheckoutModal,
            Portfolio
            
        },
        props: ['option', 'current']

    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .display{
        width: inherit;
        margin-left: 1%; 
        margin-top: 1.8%;   
    }
</style>