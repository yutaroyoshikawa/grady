import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import ChatMessage from '../components/texts/chatMessage'

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .add('chatMessage', () => ({
    components: { ChatMessage },
    render(h) {
      return <ChatMessage />
    }
  }))
