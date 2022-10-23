<script setup>
const props = defineProps({
  labelText: {
    type: String,
    default: ""
  },
  placeholderText: {
    type: String,
  },
  name: {
    type: String,
    // required: true,
  }
})
const emit = defineEmits(['update:name'])

function nameHandler(event) {
  emit('update:name', event.target.value)
}

// const isValidName = computed(() => {
//   return props.name.length > 1;
// })
</script>

<template>
  <label :for="props.name">{{ props.labelText }}</label>
  <input type="text" :name="props.name" :id="props.name" :value="props.name" :placeholder="props.placeholderText"
    @input="nameHandler">
  <!-- <template v-if="!isValidName">
    <div class="form-error">
      Boş Geçilemez
    </div>
  </template> -->
</template>

<style lang="scss">

</style>