import { storiesOf } from '@storybook/vue';
import ShowingMark from '../components/marks/showingMark.vue'

storiesOf('Mark', module)
  .addParameters({
    backgrounds: [
      { name: '1', value: '#0D0D36', default: true },
      { name: '2', value: '#377793' },
      { name: '3', value: '#3F6060' },
      { name: '4', value: '#0A2E41' },
    ],
  })
  .add('showingMark', () => ({
    components: { ShowingMark },
    render(h) {
      return <ShowingMark />
    }
  }))
