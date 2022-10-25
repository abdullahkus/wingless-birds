<script setup>
// Third Party
import { ref } from 'vue'
// Utils
import { randomNumber } from '@/utils/numberUtils'
// Store
import { useRaceStore } from "@/stores/raceStore"
// Component
import RaceTrack from '../components/Race/RaceTrack.vue';
import RaceInterface from '../components/Race/RaceInterface.vue';


const raceStore = useRaceStore()


</script>

<template>
  <div class="race">
    <RaceTrack></RaceTrack>
    <RaceInterface></RaceInterface>
  </div>
</template>

<style lang="scss">

</style>
