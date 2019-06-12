<template>
  <router-link to="{ 'value' }">
    <div class="secretGanreButton">
      <showing-mark class="mark" />
      <div class="tagText">
        {{ text }}
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue'
import VueRouter from 'vue-router'
import ShowingMark from '../marks/showingMark.vue'

export default Vue.extend({
  props: {
    text: String,
    value: String
  },
  components: {
    'showing-mark': ShowingMark,
  }
})
</script>

<style lang="scss" scoped>
.secretGanreButton {
  background: #000000;
  height: 348px;
  width: 242px;
  position: relative;
  border-radius: 50px;
  .mark {
    position: absolute;
  }
  .tagText {
    display: flex;
    color: #000000;
    font-size: 32px;
    justify-content: center;
    align-items: center;
    height: 63px;
    width: 242px;
    background: #ffffff;
    position: absolute;
	  bottom: 50px;
  }
}
</style>

