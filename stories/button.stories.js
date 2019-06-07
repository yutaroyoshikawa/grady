import CloseButton from '../components/buttons/closeButton.vue'
<<<<<<< HEAD
import NextButton from '../components/buttons/nextButton.vue'
=======
import PaymentButton from '../components/buttons/paymentButton.vue'
>>>>>>> 658436841f03de32af9659183a501631adf21b69
import GotoWathcButton from '../components/buttons/goToWatchButton.vue'
import BackButton from '../components/buttons/backButton.vue'
import TagButton from '../components/buttons/tagButton.vue'
import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';

storiesOf('Button',module)
  .addDecorator(withKnobs)
  .add('closeButton', () => ({
    components: { CloseButton },
    render(h) {
      return <CloseButton />
    }
  }))
<<<<<<< HEAD
  .add('nextButton', () => ({
    components: { NextButton },
    render(h) {
      return <NextButton />
=======
storiesOf('Button', module)
  .add('closeButton', () => ({
    components: { CloseButton },
    render(h) {
      return <CloseButton />
    }
  }))
  .add('paymentButton', () => ({
    components: { PaymentButton },
    render(h) {
      return <PaymentButton />
>>>>>>> 658436841f03de32af9659183a501631adf21b69
    }
  }))
  .add('goToWatchButton', () => ({
    components: { GotoWathcButton },
    render(h) {
      return <GotoWathcButton />
    }
  }))
  .add('backButton', () => ({
    components: { BackButton },
    render(h) {
      return <BackButton />
    }
  }))
  .add('tagButton', () => ({
    components: { TagButton },
    props: {
      name: {
        default: text('name', 'サスペンス')
      }
    },
    render(h) {
      return <TagButton name={this.name} />
    }
  }))
