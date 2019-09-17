import { withKnobs, number, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import Hint from '../components/texts/hint.vue'
import TicketPrice from '../components/texts/ticketPrice.vue'
import ChatMessage from '../components/texts/chatMessage'

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .addParameters({
    backgrounds: [
      { name: '1', value: '#0D0D36', default: true },
      { name: '2', value: '#377793' },
      { name: '3', value: '#3F6060' },
      { name: '4', value: '#0A2E41' }
    ]
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
  .add('ticketPrice', () => ({
    components: { TicketPrice },
    props: {
      price: {
        default: number('price', 1000, { min: 1 })
      }
    },
    render(h) {
      return <TicketPrice price={this.price} />
    }
  }))
  .add('chatMessage', () => ({
    components: { ChatMessage },
    props: {
      content: {
        default: text('content', 'hogehoge')
      }
    },
    render(h) {
      return <ChatMessage content={this.content} />
    }
  }))
