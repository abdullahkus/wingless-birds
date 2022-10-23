<script setup>
import InputText from '../Input/InputText.vue';

</script>

<template>
    <ol class="race__list">
      <li v-for="(number, index) in 8" :key="index" class="race__list-item lane-marker">
        <InputText></InputText>
      </li>
    </ol>
</template>

<style lang="scss">

</style>