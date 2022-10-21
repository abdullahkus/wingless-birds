<script setup>
import InputText from '../Input/InputText.vue';

</script>

<template>
  <div class="race__leaderboard">
    <ol class="race__list">
      <li v-for="(number, index) in 8" :key="index" class="race__list-item">
        <InputText></InputText>
      </li>
    </ol>
  </div>
</template>

<style lang="scss">

</style>