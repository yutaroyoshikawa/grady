import PeopleInput from '../components/inputs/peopleInput.vue'
import { storiesOf } from '@storybook/vue';
import { withKnobs, select } from '@storybook/addon-knobs';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('peopleInput', () => ({
    components: { PeopleInput },
    props: {
      type: {
        default: select('Type', {
          Adult: 'adult',
          Kids: 'kids'
        }, 'adult')
      }
    },
    render(h) {
      return <PeopleInput type={this.type} />
    }
  }))
