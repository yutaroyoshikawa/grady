import CloseButton from '../components/buttons/closeButton.vue'
import TagButton from '../components/buttons/tagButton.vue'
import { storiesOf } from '@storybook/vue';

storiesOf('Button', module)
  .add('closeButton', () => ({
    components: { CloseButton },
    render(h) {
      return <CloseButton />
    }
  }))

storiesOf('Button', module)
  .add('tagButton', () => ({
    components: { TagButton },
    render(h) {
      return <TagButton />
    }
  }))
