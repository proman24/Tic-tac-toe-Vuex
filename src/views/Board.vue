<template>
  <div>
      <!-- <cell v-for="row in 9" :key="row" player="X">
      </cell> -->
      <div v-for="row in 3" :key="row">
          <div v-for="col in 3" :key="col" >
               <cell player="O" :top="row" :left="col" />
            </div>
      </div                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    >

      <!-- <cell player="X" top=1 left=1 />
      <cell player="O" top=1 left=2 />
      <cell player="X" top=1 left=3 />
      <cell player="O" top=2 left=1 />
      <cell player="X" top=2 left=2 />
      <cell player="O" top=2 left=3 /> -->
  </div>
</template>

<script>
import Cell from '@/components/Cell.vue'
export default {
    components:{
        Cell
    }
}
</script>

<style>

</style>