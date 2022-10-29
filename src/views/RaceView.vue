<script setup>
import { ref, computed, watch } from 'vue'
import RaceTrack from '../components/Race/RaceTrack.vue';
import RaceInterface from '../components/Race/RaceInterface.vue';
import { useRaceStore } from "@/stores/raceStore"

const raceInterface = ref({
  form: true,
  leaderboard: false,
  result: false
})
const count = ref(3)
const raceStore = useRaceStore()

// finished race
watch(() => raceStore.isRace, () => {
  if (raceStore.isRace === false) {
    raceInterface.value.leaderboard = false
    raceInterface.value.result = true
  }
})

function countHandler(value) {
  count.value = value
}

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
    horse.numberOf = null
  })
  // countdown value
  count.value = 3
}
</script>

<template>
  <div class="race">
    <RaceTrack :count="count" @countHandler="countHandler">
    </RaceTrack>
    <RaceInterface :raceInterface="raceInterface" @restart="restart" @start="start"></RaceInterface>
  </div>
</template>