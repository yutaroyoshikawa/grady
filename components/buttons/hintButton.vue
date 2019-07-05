<template>
  <button>
    <font-awesome-icon class="hint-button" icon="info-circle" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add({ faInfoCircle })
Vue.component('info-circle', FontAwesomeIcon)
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

.hint-button {
  color: #fff;
}

@media screen and (max-width: 1024px) {
  .hint-button {
    font-size: 40.43px;
  }
}

@media screen and (min-width: 767px) and (max-width: 1024px) {
  .hint-button {
    font-size: 40.43px;
  }
}
</style>
