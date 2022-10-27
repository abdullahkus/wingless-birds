<script setup>
import { ref, computed, onMounted } from 'vue'
import Button from '../Button.vue';
import { useRaceStore } from "@/stores/raceStore"

const emits = defineEmits(["restart"])

const raceStore = useRaceStore()

const result = ref()

onMounted(() => {
  result.value = resultCalculator()
})

const resultCalculator = () => {
  const copyHorses = JSON.parse(JSON.stringify(raceStore.horses));
  const sortedPositionInLane = copyHorses.sort((one, two) => {
    if (one.numberOf > two.numberOf) {
      return 1;
    }
    if (one.numberOf < two.numberOf) {
      return -1;
    }
  })
  return sortedPositionInLane
}

function restart() {
  emits("restart")
}

</script>

<template>
  <div class="race__result">
    <h2 class="race__title">Result</h2>
    <ol class="race__list">
      <li v-for="horse in result" :key="horse.id" class="race__list-item">
        {{ `${horse.name} (Kulvar NO: ${horse.id})` }}
      </li>
    </ol>
    <Button class="race__button" title="Restart" @click="restart"></Button>
  </div>

</template>