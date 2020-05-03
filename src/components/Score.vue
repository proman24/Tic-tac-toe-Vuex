<template>
  <div id="scoreBoard">
      <span id="label">X : </span> {{ xScore }} || <span id="label">O : </span> {{ oScore }}
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
#scoreBoard{

}
</style>