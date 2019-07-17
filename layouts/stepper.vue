<template>
  <div>
    <div class="wrap">
      <step-button
        :isActive="step === 1"
        :stepNumber="1"
        :hundleClick="clickInfo"
      />
      <step-button
        :isActive="step === 2"
        :stepNumber="2"
        :hundleClick="clickSeat"
        class="seat-button"
      />
      <step-button
        :isActive="step === 3"
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
  props: {
    step: Number,
    handleChange: Function
  },
  methods: {
    clickInfo: function() {
      this.handleChange(1)
    },
    clickSeat: function() {
      this.handleChange(2)
    },
    clickPay: function() {
      this.handleChange(3)
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
      background: #fff;
    }

    &::after {
      content: '';
      display: block;
      height: 2px;
      border-radius: 2px;
      background: #fff;
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
