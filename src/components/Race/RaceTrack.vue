<script setup>
import { ref } from 'vue'
import CountDown from '../CountDown.vue';
import RaceLanes from './RaceLanes/RaceLanes.vue';

const count = ref(3)
</script>

<template>
  <div class="race__track">
    <div class="race__count-down" v-if="count > 0">
      <CountDown v-model:count="count"></CountDown>
    </div>
    <RaceLanes></RaceLanes>
  </div>
</template>