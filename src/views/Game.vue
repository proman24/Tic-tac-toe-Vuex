<template>
    <div>
        <score/>
        <board/>
    </div>
</template>

<script>
import score from '@/components/Score'
import board from '@/components/Board'

export default {
    name:"game",
    components:{
        score,
        board
    }
}
</script>

<style>

</style>