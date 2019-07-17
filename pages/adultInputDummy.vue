<template>
  <adult-input />
</template>

<script lang="ts">
import Vue from 'vue'
import AdultInput from '../components/inputs/adultInput.vue'
export default Vue.extend({
  components: {
    'adult-input': AdultInput
  }
})
</script>

<style scoped lang="scss"></style>
