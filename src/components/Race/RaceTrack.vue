<script setup>
import { ref } from 'vue'
import RaceCountDown from './RaceCountDown.vue';
import RaceLanes from './RaceLanes/RaceLanes.vue';


</script>

<template>
  <div class="race__track">
    <RaceCountDown></RaceCountDown>
    <RaceLanes></RaceLanes>
  </div>
</template>