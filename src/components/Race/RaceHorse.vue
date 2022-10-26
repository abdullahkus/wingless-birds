<script setup>
import { useRaceStore } from '@/stores/raceStore'
const raceStore = useRaceStore()
</script>

<template>
  <div :style="`position:relative; left: ${4}%`">
    <img class="race__horse" src="@/assets/images/horse.gif" v-if="true" />
    <img class="race__horse" src="@/assets/images/horse-stop.gif" v-if="true" />
  </div>
</template>