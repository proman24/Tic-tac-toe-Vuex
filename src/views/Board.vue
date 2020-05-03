<template>
  <div id="board">
      <!-- <cell :player="player" @click.native="checkPlayer" :top="2" :left="2" /> -->
      <div v-for="row in 3" :key="row">
          <div v-for="col in 3" :key="col" >
               <cell :player="board[row-1][col-1]" @click.native="checkPlayer(row,col)" :top="row" :left="col" />
            </div>
        </div>
  </div>
</template>

<script>
import Cell from '@/components/Cell.vue'
export default {
    name:"board",
    components:{
        Cell
    },
    data(){
        return{
            chance:0,
            board:[["", "", ""], ["", "", ""], ["", "", ""]]
        }
    },
    methods:{
        checkPlayer:function(row,col){
            if (this.chance)
                this.board[row-1][col-1] = "X"
            else
                this.board[row-1][col-1] = "O"
            this.chance= ! this.chance
            // console.log("prev", this.board[row-1][col-1])
            // this.board[row-1][col-1] = (this.board[row-1][col-1] == "O") ? "X" : "O"
            // console.log("After", this.board[row-1][col-1])
            this.$forceUpdate();
        }
    }
}
</script>

<style>

</style>