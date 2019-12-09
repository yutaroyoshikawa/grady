<template>
  <div>
    <div class="wrap">
      <button @click="handleClick">
        <font-awesome-icon class="hint-button" icon="info-circle" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add({ faInfoCircle })

export default Vue.extend({
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  props: {
    handleClick: Function
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
    width: 40px;
    height: 40px;

    .hint-button {
      color: #fff;
      width: 40px;
      height: 40px;
      font-size: 40px;
    }
  }
}
</style>
