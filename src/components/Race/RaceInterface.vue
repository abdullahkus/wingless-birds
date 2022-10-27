<script setup>
import RaceHorseForm from './RaceHorseForm.vue';
import RaceLeaderboard from './RaceLeaderboard.vue';
import RaceResult from './RaceResult.vue';

const props = defineProps({
  raceInterface: {
    type: Object,
    required: true
  }
})
const emits = defineEmits(["restart", "start"])

function restart() {
  emits("restart")
}

function start() {
  emits("start")
}
</script>

<template>
  <div class="race__interface ">
    <RaceHorseForm v-if="props.raceInterface.form" @start="start"></RaceHorseForm>
    <RaceLeaderboard v-if="props.raceInterface.leaderboard"></RaceLeaderboard>
    <RaceResult v-if="props.raceInterface.result" @restart="restart"></RaceResult>
  </div>
</template>