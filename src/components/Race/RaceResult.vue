<script setup>
import Button from '../Button.vue';

</script>

<template>
  <div class="race__result">
    <ol class="race__list">
      <li v-for="(number, index) in 8" :key="index" class="race__list-item">
        Şahbatur
      </li>
    </ol>
    <Button class="race__button" title="Restart"></Button>
  </div>

</template>

<style lang="scss">

</style>