<template>
  <div id="cell" refs="cell" :class="cellClass" :style="{top:computedTop, left:computedLeft}">
    <span id="text">{{ this.player ? this.player : ""}}</span>
  </div>
</template>

<script>
export default {
    name:'Cell',
    props:{
        player:{
            type:String
        },
        top:{
            type:Number
        },
        left:{
            type:Number
        }
    },
    computed:{
        cellClass(){
            return this.player
        },
        computedTop(){
            return this.top*200+'px'
        },
        computedLeft(){
            return this.left*200+'px'
        }
    }
}
</script>

<style scoped>
#cell{
    position:fixed;
    height: 200px;
    width:200px;
    border:1px solid black;
    display: block;
    cursor: pointer;
    transition: background 1s;
}
/* #cell:hover{
    background: rgba(219, 52, 46, 0.5);
} */
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
    user-select: none;
}
</style>