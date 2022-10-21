<script setup>
import RaceLeaderboard from './RaceLeaderboard.vue';
import Button from '../Button.vue';

</script>

<template>
  <div class="race__interface">
    <RaceLeaderboard></RaceLeaderboard>
    <div class="race__buttons">
      <Button class="race__button" title="Start"></Button>
      <Button class="race__button" title="Restart"></Button>
    </div>
  </div>
</template>

<style lang="scss">

</style>