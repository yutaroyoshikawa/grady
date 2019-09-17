<template>
  <div>
    <button @click="handleClick">
      <font-awesome-icon icon="times-circle" />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add({ faTimesCircle })
Vue.component('font-awesome-icon', FontAwesomeIcon)
export default Vue.extend({
  props: {
    handleClick: Function
  }
})
</script>

<style lang="scss" scoped>
button {
  color: #fff;
}

@media screen and (min-width: 1024px) {
  button {
    height: 62px;
    width: 62px;
    font-size: 62px;
    background: none;
    padding: 0;
    border: none;
    margin: 0;
    appearance: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  button {
    font-size: 62px;
  }
}

@media screen and (max-width: 767px) {
  button {
    font-size: 35px;
  }
}
</style>
