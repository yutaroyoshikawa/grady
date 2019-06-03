import AdultInput from '../components/inputs/adultInput.vue'
import { storiesOf } from '@storybook/vue';

storiesOf('Input', module)
  .add('adultInput', () => ({
    components: { AdultInput },
    render(h) {
      return <AdultInput onchange={this.action} />
    }
  }))
