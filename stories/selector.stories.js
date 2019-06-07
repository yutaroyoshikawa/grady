import MovieTheaterSelector from '../components/selector/movieTheaterSelector.vue'
import SecretGenreSelector from '../components/selector/secretGenreSelector.vue'
import { storiesOf } from '@storybook/vue';
import { withKnobs, select } from '@storybook/addon-knobs';

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
  .add('secretGenreSelector', () => ({
    components: { SecretGenreSelector },
    props: {
      Genre: {
        default: select(
          'DefaultGenre',
          {
            アクション: 'action',
            サスペンス: 'suspense',
            SF: 'sf',
            ホラー: 'horror',
            コメディ: 'comedy',
            ロマンス: 'romance'
          },
          'action'
        )
      }
    },
    render(h) {
      return <SecretGenreSelector defaultGenre={this.Genre} />
    }
  }))
