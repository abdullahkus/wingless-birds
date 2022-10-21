<script setup>
import RaceLane from './RaceLane.vue';

</script>

<template>
  <div class="race__lanes">
    <div v-for="(number, index) in 8" :key="index" class="race__lane"
      :class="[(number % 2) ? 'race__lane--dark' : 'race__lane--light']">
      <RaceLane></RaceLane>
    </div>
  </div>
</template>

<style lang="scss">

</style>