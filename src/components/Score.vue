<template>
  <div id="scoreBoard">
      <h1>
      <span id="label">X : </span> {{ xScore }} || <span id="label">O : </span> {{ oScore }}
    </h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name:"score",
    computed:{
        ...mapGetters([
            "xScore", 
            "oScore" 
        ])
    }
}
</script>

<style>
</style>