import Hint from '../components/texts/hint.vue';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/vue';

storiesOf('Text', module)
  .addDecorator(
    withKnobs
  )
  .addParameters({
    backgrounds: [
      { name: 'default', value: '#0D0D36', default: true },
      { name: 'facebook', value: '#3b5998' },
    ],
  })
  .add('hint', () => ({
    components: { Hint },
    props: {
      number: {
        default: number('number', 1, {
          min: 1,
          max: 3
        })
      },
      content: {
        default: text('content', 'hogehoge')
      }
    },
    render(h) {
      return <Hint number={this.number} content={this.content} />
    }
  }))
