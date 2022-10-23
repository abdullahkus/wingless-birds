<script setup>

</script>

<template>
  <div class="race__leaderboard">
    <p>Leaderboard</p>
    <ol class="race__list">
      <li v-for="(number, index) in 8" :key="index" class="race__list-item">
        {{number}}
      </li>
    </ol>
  </div>
</template>