<script setup>
import RaceHorseForm from './RaceHorseForm.vue';
import RaceInformation from './RaceInformation.vue';
import RaceLeaderboard from './RaceLeaderboard.vue';
import RaceResult from './RaceResult.vue';

import { useRaceStore } from "@/stores/raceStore"

const raceStore = useRaceStore()
</script>

<template>
  <div class="race__interface ">
    <RaceHorseForm v-if="raceStore.showHorseForm"></RaceHorseForm>
    <RaceLeaderboard v-if="raceStore.showLeaderboard"></RaceLeaderboard>
    <RaceResult v-if="raceStore.showResult"></RaceResult>
  </div>
</template>

<style lang="scss">

</style>