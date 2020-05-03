<template>
  <div id="scoreBoard">
      <span id="label">X : </span> {{ xScore }} || <span id="label">O : </span> {{ oScore }}
  </div>
</template>

<script>
export default {
    name:"score",
    props:{
        xScore:{
            type:Number,
            default:0
        },
        oScore:{
            type:Number,
            default:0
        }
    }

}
</script>

<style>
#scoreBoard{

}
</style>