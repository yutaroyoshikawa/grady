<template>
  <div>
    <div class="wrap">
      <step-button
        :isActive="activeStep === '情報'"
        :stepNumber="1"
        :hundleClick="clickInfo"
      />
      <step-button
        :isActive="activeStep === '座席'"
        :stepNumber="2"
        :hundleClick="clickSeat"
        class="seat-button"
      />
      <step-button
        :isActive="activeStep === '決済'"
        :stepNumber="3"
        :hundleClick="clickPay"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import StepButton from '../components/buttons/stepButton.vue'

export default Vue.extend({
  components: {
    'step-button': StepButton
  },
  data: function() {
    return {
      activeStep: '情報'
    }
  },
  methods: {
    clickInfo: function() {
      this.activeStep = '情報'
    },
    clickSeat: function() {
      this.activeStep = '座席'
    },
    clickPay: function() {
      this.activeStep = '決済'
    }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 722px;

  .seat-button {
    display: flex;
    align-items: center;

    &::before {
      content: '';
      display: block;
      width: 162px;
      height: 2px;
      border-radius: 2px;
      background: #000;
      margin-right: 40px;
    }

    &::after {
      content: '';
      display: block;
      width: 162px;
      height: 2px;
      border-radius: 2px;
      background: #000;
      margin-left: 40px;
    }
  }
}
</style>
