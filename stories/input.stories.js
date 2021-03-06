import { storiesOf } from '@storybook/vue'
import { withKnobs, select } from '@storybook/addon-knobs'
import PeopleInput from '../components/inputs/peopleInput.vue'
import EmailInput from '../components/inputs/mailInput.vue'
import CreditCardNumber from '../components/inputs/creditCardNumber.vue'
import CreditCardName from '../components/inputs/creditCardName.vue'
import CreditCardDate from '../components/inputs/creditCardDate.vue'

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .addParameters({
    backgrounds: [
      { name: '1', value: '#0D0D36', default: true },
      { name: '2', value: '#377793' },
      { name: '3', value: '#3F6060' },
      { name: '4', value: '#0A2E41' },
    ],
  })
  .add('peopleInput', () => ({
    components: { PeopleInput },
    props: {
      type: {
        default: select(
          'Type',
          {
            Adult: 'adult',
            Kids: 'kids'
          },
          'adult'
        )
      }
    },
    render(h) {
      return <PeopleInput type={this.type} />
    }
  }))
  .add('emailInput', () => ({
    components: { EmailInput },
    render(h) {
      return <EmailInput />
    }
  }))
  .add('creditCardNumber', () => ({
    components: { CreditCardNumber },
    render(h) {
      return <CreditCardNumber />
    }
  }))
  .add('creditCardName', () => ({
    components: { CreditCardName },
    render(h) {
      return <CreditCardName />
    }
  }))
  .add('creditCardDate', () => ({
    components: { CreditCardDate },
    render(h) {
      return <CreditCardDate />
    }
  }))
