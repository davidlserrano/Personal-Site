<template>
  <div class="hobbies">

    <HelloWorld msg="This is the hobbies Page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Hobbies',
  components: {
    HelloWorld
  }
}
</script>
