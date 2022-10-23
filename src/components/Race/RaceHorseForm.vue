<script setup>
import Button from '../Button.vue';
import InputText from '../Input/InputText.vue';

</script>

<template>
  <div class="race__horse-name">
    <h2 class="race__title">Horse Names</h2>
    <ol class="race__list">
      <li v-for="(number, index) in 8" :key="index" class="race__list-item lane-marker">
        <InputText></InputText>
      </li>
    </ol>
    <div class="race__buttons">
      <Button class="race__button" title="Start"></Button>
    </div>
  </div>
</template>

<style lang="scss">

</style>