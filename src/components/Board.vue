<template>
  <div id="board">
      <!-- <cell :player="player" @click.native="checkPlayer" :top="2" :left="2" /> -->
      <template v-if="winner!=null">
        {{ "Winner of the game is " + winner}}
    </template>
      <div v-for="row in 3" :key="row">
          <div v-for="col in 3" :key="col" >
               <cell :player="board[row-1][col-1]" @click.native="move(row,col)" :top="row" :left="col">
                <!-- <template v-if="col==3">
                    X
                </template> -->
                </cell>
            </div>
        </div>
  </div>
</template>

<script>
import Cell from './Cell.vue'
import { mapState } from "vuex"

export default {
    name:"board",
    components:{
        Cell
    },
    computed:{
        ...mapState({
            turn: state => state.game.turn,
            board: state => state.game.board,
            winner: state => state.game.winner
        })
    },
    methods:{
        move(row,col){
            this.$store.dispatch("move",{row,col})
            this.$forceUpdate()
        }
    }
}
</script>

<style>

</style>