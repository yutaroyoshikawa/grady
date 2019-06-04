import CloseButton from '../components/buttons/closeButton.vue'
import NextButton from '../components/buttons/nextButton.vue'
import { storiesOf } from '@storybook/vue';

storiesOf('Button', module)
  .add('closeButton', () => ({
    components: { CloseButton },
    render(h) {
      return <CloseButton />
    }
  }))

storiesOf('Button',module)
  .add('nextButton', () => ({
    components: { NextButton },
    render(h) {
      return <NextButton />
    }
  }))
