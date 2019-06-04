import CloseButton from '../components/buttons/closeButton.vue'
import BackButton from '../components/buttons/backButton.vue'
import { storiesOf } from '@storybook/vue';

storiesOf('Button', module)
  .add('closeButton', () => ({
    components: { CloseButton },
    render(h) {
      return <CloseButton />
    }
  }))

storiesOf('Button', module)
  .add('backButton', () => ({
    components: { BackButton },
    render(h) {
      return <BackButton />
    }
  }))