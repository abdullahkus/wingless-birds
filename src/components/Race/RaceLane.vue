<script setup>
import RaceHorse from './RaceHorse.vue';

</script>

<template>
  <div class="race__lanes">
    <div v-for="(number, index) in 8" :key="index" class="race__lane"
      :class="[(number % 2) ? 'race__lane--dark' : 'race__lane--light']">

      <RaceHorse :style="'left: 25%' "></RaceHorse>

      <div class="race__point"></div>

      <div class="race__point race__point--finish"></div>
    </div>
  </div>
</template>

<style lang="scss">

</style>