<script setup>
import RaceHorse from './RaceHorse.vue';

</script>

<template>
  <!-- Lanes -->
  <div v-for="(number, index) in 8" :key="index" class="race__lane"
    :class="[(number % 2) ? 'race__lane--dark' : 'race__lane--light'], {'race__lane--first' : (number == 1)}, {'race__lane--last' : (number == 8)} ">

    <!-- Horse -->
    <RaceHorse :style="'left: 25%' ">
    </RaceHorse>

    <!-- Start Point -->
    <div class="race__point"></div>

    <!-- Finish Point -->
    <div class="race__point race__point--finish"></div>

  </div>

</template>

<style lang="scss">

</style>