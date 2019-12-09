<template>
  <div>
    <div class="wrap">
      <div class="close-button-wrap">
        <close-button :handleClick="handleClose" />
      </div>
      <div class="input-wrap">
        <credit-card-number :handleChange="onChangeNumber" :value="number" />
        <credit-card-name :handleChange="onChangeName" :value="name" />
        <div class="date-wrap">
          <credit-card-year :handleChange="onChangeYear" :value="year" />
          <credit-card-month :handleChange="onChangeMonth" :value="month" />
          <credit-card-date :value="date" :handleChange="onChangeDate" />
        </div>
        <credit-card-cvg :value="cvg" :handleChange="onChangeCvg" />
      </div>
      <div class="payment-wrap">
        <payment-button />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CreditCardDate from '~/components/inputs/creditCardDate.vue'
import CreditCardName from '~/components/inputs/creditCardName.vue'
import CreditCardNumber from '~/components/inputs/creditCardNumber.vue'
import CreditCardMonth from '~/components/selector/creditCardMonth.vue'
import CreditCardYear from '~/components/selector/creditCardYear.vue'
import CreditCardCvg from '~/components/inputs/creditCardCvg.vue'
import CloseButton from '~/components/buttons/closeButton.vue'
import PaymentButton from '~/components/buttons/paymentButton.vue'

export default Vue.extend({
  components: {
    'credit-card-date': CreditCardDate,
    'credit-card-name': CreditCardName,
    'credit-card-number': CreditCardNumber,
    'credit-card-month': CreditCardMonth,
    'credit-card-year': CreditCardYear,
    'credit-card-cvg': CreditCardCvg,
    'close-button': CloseButton,
    'payment-button': PaymentButton
  },
  props: {
    handleClose: Function
  },
  data: function() {
    return {
      number: 0,
      name: '',
      year: 0,
      month: 0,
      date: 0,
      cvg: 0
    }
  },
  methods: {
    onChangeNumber: function(value: number) {
      this.number = value
    },
    onChangeName: function(value: string) {
      this.name = value
    },
    onChangeYear: function(value: number) {
      this.year = value
    },
    onChangeMonth: function(value: number) {
      this.month = value
    },
    onChangeDate: function(value: number) {
      this.date = value
    },
    onChangeCvg: function(value: number) {
      this.cvg = value
    }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  width: 768px;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  background: #3f6060;

  .close-button-wrap {
    width: 100%;
    padding: 50px 0 0 50px;
  }

  .input-wrap {
    width: 80%;
    height: 400px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;

    .date-wrap {
      width: 300px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .payment-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
  }
}
</style>
