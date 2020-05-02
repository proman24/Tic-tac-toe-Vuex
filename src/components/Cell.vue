<template>
  <div id="cell" @click="makeMove" :class="cellClass">
    <span id="text">{{ this.player ? this.player : ""}}</span>
  </div>
</template>

<script>
export default {
    name:'Cell',
    data(){
        return{
            player:null
        }
    },
    computed:{
        cellClass(){
            return this.player
        }
    },
    methods:{
        makeMove:function(){
            this.player='X'
        }
    }
}
</script>

<style>
#cell{
    position:relative;
    height: 200px;
    width:200px;
    border:1px solid black;
}
.X{
    background: burlywood;
}
.O{
    background: cadetblue;
}
#text{
    font-size: 92px;
    top:50%;
    left:50%;
    position: absolute;
    transform: translate(-50%,-50%);
}
</style>