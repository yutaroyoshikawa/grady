import { storiesOf } from '@storybook/vue'
import { withKnobs, select } from '@storybook/addon-knobs'
import PeopleInput from '../components/inputs/peopleInput.vue'
import EmailInput from '../components/inputs/mailInput.vue'

storiesOf('Input', module)
  .addDecorator(withKnobs)
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

storiesOf('Input', module).add('emailInput', () => ({
  components: { EmailInput },
  render(h) {
    return <EmailInput />
  }
}))
