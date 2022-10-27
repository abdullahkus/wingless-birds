<script setup>
import { ref, onMounted, watch } from 'vue'
import Button from '../Button.vue';
import InputText from '../Input/InputText.vue';
import { useRaceStore } from "@/stores/raceStore"


const emits = defineEmits(["start"])

const raceStore = useRaceStore()



function start() {
  emits("start")
}



</script>

<template>
  <div class="race__horse-name">
    <h2 class="race__title">Horse Names</h2>
    <ol class="race__list">
      <li v-for="horse in raceStore.horses" :key="horse.id" class="race__list-item lane-marker">
        <InputText v-model:name="horse.name"></InputText>
      </li>
    </ol>
    <div class="race__buttons">
      <Button class="race__button" title="Start" @click="start"></Button>
    </div>
  </div>
</template>