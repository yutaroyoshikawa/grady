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

  .seat-button {
    display: flex;
    align-items: center;

    &::before {
      content: '';
      display: block;
      height: 2px;
      border-radius: 2px;
      background: #000;
    }

    &::after {
      content: '';
      display: block;
      height: 2px;
      border-radius: 2px;
      background: #000;
    }
  }
}

@media screen and (min-width: 1024px) {
  .wrap {
    width: 722px;

    .seat-button {
      &::before {
        width: 162px;
        margin-right: 40px;
      }

      &::after {
        width: 162px;
        margin-left: 40px;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    width: 469px;

    .seat-button {
      &::before {
        width: 103px;
        margin-right: 32px;
      }

      &::after {
        width: 103px;
        margin-left: 32px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .wrap {
    width: 277px;

    .seat-button {
      &::before {
        width: 51px;
        margin-right: 15px;
      }

      &::after {
        width: 51px;
        margin-left: 15px;
      }
    }
  }
}
</style>
