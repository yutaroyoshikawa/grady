<template>
  <button class="nextButton">
    <font-awesome-icon class="nextButton" icon="chevron-circle-left" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add({ faChevronCircleLeft })
Vue.component('font-awesome-icon', FontAwesomeIcon)
export default Vue.extend({})
</script>

<style lang="scss">
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}
.nextButton {
  font-size: 96px;
  color: #fff;
}
</style>