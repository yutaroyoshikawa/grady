<template>
  <div>
    <div class="wrap">
      <button>
        <font-awesome-icon class="next-button" icon="chevron-circle-right" />
      </button>
    </div>
  </div>
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

<style lang="scss" scoped>
.wrap {
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    appearance: none;
    padding: 0;
    margin: 0;

    .next-button {
      color: #fff;
    }
  }
}

@media screen and (min-width: 1024px) {
  .next-button {
    font-size: 96px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .next-button {
    font-size: 80px;
  }
}

@media screen and (max-width: 767px) {
  .next-button {
    font-size: 45px;
  }
}
</style>
