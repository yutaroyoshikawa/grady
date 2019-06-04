import CloseButton from '../components/buttons/closeButton.vue'
import NextButton from '../components/buttons/nextButton.vue'
import GotoWathcButton from '../components/buttons/goToWatchButton.vue'
import BackButton from '../components/buttons/backButton.vue'
import TagButton from '../components/buttons/backButton.vue'
import { storiesOf } from '@storybook/vue';

storiesOf('Button',module)
  .add('closeButton', () => ({
    components: { CloseButton },
    render(h) {
      return <CloseButton />
    }
  }))
  .add('nextButton', () => ({
    components: { NextButton },
    render(h) {
      return <NextButton />
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
    render(h) {
      return <TagButton />
    }
  }))

