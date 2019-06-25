<template>
  <button class="nextButton">
    <font-awesome-icon icon="chevron-circle-right" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add({ faChevronCircleRight })
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
  color: #444444;
}

@media screen and (min-width: 1024px) {
  .nextButton {
    font-size: 96px;
  }
}

@media screen and (min-width: 767px) and (max-width: 1024px) {
  .nextButton {
    font-size: 80px;
  }
}

@media screen and (min-width: 300px) {
  .nextButton {
    font-size: 45px;
  }
}

</style>
