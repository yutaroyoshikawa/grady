<template>
  <div>
    <div class="wrap">
      <hint-button />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HintButton from '~/components/buttons/hintButton.vue'

export default Vue.extend({
  components: {
    'hint-button': HintButton
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  width: 100vw;
  height: 100vh;
  background: #000;
}
</style>
