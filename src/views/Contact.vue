<template>
  <div id="contactDisplay">
      <Form/>
      <Socials/>
  </div>
</template>

<script>
    import Form from '@/components/Form';
    import Socials from '@/components/Socials';
    
    export default {
        name: 'Contact',
        components: {
            Form,
            Socials
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #contactDisplay{
      position: fixed;
      width: 98.9%;
    }
    
    
</style>