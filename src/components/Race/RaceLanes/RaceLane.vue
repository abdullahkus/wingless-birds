<script setup>
import RaceHorse from '../RaceHorse.vue';

const props = defineProps({
  horse: {
    type: Object,
    required: true,
  }
})
</script>

<template>
  <RaceHorse :horse="props.horse"></RaceHorse>
  
  <div class="race__point">{{props.horse.name}}</div>
  <div class="race__point race__point--finish"></div>
</template>