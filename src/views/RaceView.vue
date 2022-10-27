<script setup>
// Third Party
import { ref, computed, watch } from 'vue'
// Utils
// Store
import { useRaceStore } from "@/stores/raceStore"
// Component
import RaceTrack from '../components/Race/RaceTrack.vue';
import RaceInterface from '../components/Race/RaceInterface.vue';

const raceStore = useRaceStore()

const raceInterface = ref({
  form: true,
  leaderboard: false,
  result: false
})
const count = ref(3)


const isRace = computed(() => {
  return raceStore.isRace
})

watch(() => raceStore.isRace, () => {
  if (raceStore.isRace === false) {
    raceInterface.value.leaderboard = false
    raceInterface.value.result = true
  }
})

function start() {
  raceStore.isRaceStatusChange()
  setTimeout(() => {
    raceInterface.value.form = false
    raceInterface.value.leaderboard = true
    raceStore.runningHorses()
    raceStore.horses.forEach((horse) => {
      raceStore.runHorse(horse.id)
    })
  }, 3000)
}

function restart() {
  raceInterface.value.result = false
  raceInterface.value.form = true
  raceStore.horses.map((horse) => {
    horse.positionInLane = 0
  })
  count.value = 3
}

</script>

<template>
  <div class="race">
    <RaceTrack :showCountdown="raceInterface.countdown" :isRace="isRace" v-model:count="count">
    </RaceTrack>
    <RaceInterface :raceInterface="raceInterface" @restart="restart" @start="start"></RaceInterface>
  </div>
</template>