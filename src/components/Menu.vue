<template>
    <div id="list">
    <!-- bolded options - ['Salesforce', 'Misc Projects'] -->
      <div  v-for="option in options" 
            v-bind:options="options"
            v-bind:key="option.id">
            <div style="height: 25px; background: none; width: 100px;"></div>
            <button 
                @click="optionClicked">
                <b>{{option.name}}</b>
            </button>
                
            <!-- sub-options - 'Salesforce': [obj] -->
            <div v-for="o in option.suboptions" 
                 v-bind:key="o.id">
                <button 
                    @click="optionClicked">
                    {{o.name}}
                </button>
            </div>
      </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {})
</script>

<script>
    export default {
      name: 'Menu',
      props: ['options'],
        //   setup(props) {},
        // data(){
        //     return{}
        // },
        methods: {
            optionClicked: function(e){
                e.preventDefault();
                const clicked = {
                    name: e.currentTarget.innerText
                };
                this.$emit('option-clicked', clicked);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #list{
        color: rgb(64, 61, 77);
        width: 150px;
        height: 150px;
        border-right: 1px rgb(64, 61, 77) solid;
    }
    
    button{
        background: none;
        border: none;
        font-size: 14px;
        color: rgb(64, 61, 77);
        font-family: Avenir, Helvetica, Arial, sans-serif;
        cursor: pointer;
    }
    
    button:hover{
        font-weight: bolder;
    }
    
    button:active{
        color: #8A897C;
        font-weight: bold;
    }
    
</style>