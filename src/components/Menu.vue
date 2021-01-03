<template>
    <div id="list">
      <div v-for="option in options" v-bind:options="options" v-bind:key="option.id" >
            <button 
                    @click="optionClicked">
                {{option.name}}</button>
      </div>
    </div>
</template>

<script>
    import uuid from 'uuid';
    export default {
      name: 'Menu',
      props: ['options'],
        data(){
            return{

            }
        },
        methods: {
            optionClicked: function(e){
                e.preventDefault();
                const clicked = {
                    id: uuid.v4(),
                    name: e.currentTarget.innerText
                };
                this.$emit('option-clicked', clicked);
                //alert(clicked.name);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #list{
        color: #353535;
        width: inherit;
        height: 150px;
        border-right: 1px #353535 solid;
        margin-top: 13px;
    }
    
    button{
        background: none;
        border: none;
        font-size: 14px;
        color: #353535;
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }
    
    button:hover{
        font-weight: bolder;
    }
    
    button:active{
        color: #8A897C;
        font-weight: bold;
    }
    
</style>