<script setup>
import RaceCountdown from './RaceCountdown.vue';
import RaceLanes from './RaceLanes/RaceLanes.vue';
import RaceResult from './RaceResult.vue';

</script>

<template>
  <div class="race__track">
    <RaceResult ></RaceResult>
    <RaceCountdown v-if="false"></RaceCountdown>
    <RaceLanes></RaceLanes>
  </div>
</template>

<style lang="scss">

</style>