import { storiesOf } from '@storybook/vue';
import ShowingMark from '../components/marks/showingMark.vue'

storiesOf('Mark', module)
  .add('showingMark', () => ({
    components: { ShowingMark },
    render(h) {
      return <ShowingMark />
    }
  }))
