<template>
  <div>
    <font-awesome-icon class="closeButton" icon="times-circle" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faTimesCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)
export default Vue.extend({})
</script>

<style lang="scss">
.closeButton {
  font-size: 62px;
  height: 62px;
  width: 62px;
  color: #fff;
}
</style>
