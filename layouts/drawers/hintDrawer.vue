<template>
  <div>
    <div class="wrap">
      <div class="close-button-wrapper">
        <close-button />
      </div>
      <div class="main-wrapper">
        <div class="contents">
          <h2 class="contents-title">ヒント</h2>
          <div
            class="hints"
            v-for="(hint, index) in hints"
            :key="'hint' + index"
          >
            <hint class="hint" :content="hint" :number="index + 1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CloseButton from '~/components/buttons/closeButton.vue'
import Hint from '~/components/texts/hint.vue'

export default Vue.extend({
  components: {
    'close-button': CloseButton,
    hint: Hint
  },
  props: {
    hints: {
      value: Array,
      default: ['', '', '']
    }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #3f6060;
  width: 90vw;
  height: 100vh;

  .close-button-wrapper {
    width: 60px;
    height: 60px;
    position: absolute;
    transform: translate(10px, 10px);
  }

  .main-wrapper {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .contents {
      width: 237.36px;
      height: 356.39px;
      transform: translateY(-33px);

      .contents-title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 31px;
        color: #ffffff;
        height: 33px;
        width: 100%;
        margin-bottom: 75px;
      }

      .hints {
        color: #ffffff;

        .hint {
          margin-bottom: 70px;
        }
      }
    }
  }
}
</style>
