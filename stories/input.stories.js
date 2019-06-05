import { storiesOf } from '@storybook/vue'
import AdultInput from '../components/inputs/adultInput.vue'
import EmailInput from '../components/inputs/mailInput.vue'

storiesOf('Input', module).add('adultInput', () => ({
  components: { AdultInput },
  render(h) {
    return <AdultInput onchange={this.action} />
  }
}))

storiesOf('Input', module).add('emailInput', () => ({
  components: { EmailInput },
  render(h) {
    return <EmailInput />
  }
}))
