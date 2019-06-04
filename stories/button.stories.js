import CloseButton from '../components/buttons/closeButton.vue'
import PaymentButton from '../components/buttons/paymentButton.vue'
import { storiesOf } from '@storybook/vue';

storiesOf('Button', module)
  .add('closeButton', () => ({
    components: { CloseButton },
    render(h) {
      return <CloseButton />
    }
  }))

storiesOf('Button', module)
  .add('paymentButton', () => ({
    components: { PaymentButton },
    render(h) {
      return <PaymentButton />
    }
  }))
