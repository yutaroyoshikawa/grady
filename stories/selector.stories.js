import MovieTheaterSelector from '../components/selector/movieTheaterSelector.vue'
import SecretGenreSelector from '../components/selector/secretGenreSelector.vue'
import CreditCardYear from '../components/selector/creditCardYear.vue'
import CreditCardDate from '../components/selector/creditCardDate.vue'
import { storiesOf } from '@storybook/vue';
import { withKnobs, select } from '@storybook/addon-knobs';

storiesOf('Selector', module)
  .addDecorator(withKnobs)
  .addParameters({
    backgrounds: [
      { name: '1', value: '#0D0D36', default: true },
      { name: '2', value: '#377793' },
      { name: '3', value: '#3F6060' },
      { name: '4', value: '#0A2E41' },
    ],
  })
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
  .add('creditCardYear', () => ({
    components: { CreditCardYear },
    render(h) {
      return <CreditCardYear />
    }
  }))
  .add('creditCardDate', () => ({
    components: { CreditCardDate },
    render(h) {
      return <CreditCardDate />
    }
  }))
