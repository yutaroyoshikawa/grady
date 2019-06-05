import MovieTheaterSelector from '../components/selector/movieTheaterSelector.vue'
import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Selector', module)
  .addDecorator(withKnobs)
  .add('movieTheaterSelector', () => ({
    components: { MovieTheaterSelector },
    render(h) {
      return <MovieTheaterSelector theaters={
        [
          {
            name: 'hoge',
            value: 'hoge'
          },
          {
            name: 'huga',
            value: 'huga'
          }
        ]
      } />
    }
  }))
