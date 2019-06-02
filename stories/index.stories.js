/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import MyButton from './MyButton';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Sample', module)
  .addDecorator(withKnobs)
  .add('with text', () => ({
    components: { MyButton },
    props: {
      isDisabled: {
        default: boolean('Disabled', false)
      },
      text: {
        default: text('Text', 'Hello Storybook')
      }
    },
    template: `<my-button @click="action" :isDisabled="isDisabled">{{ text }}</my-button>`,
    methods: { action: action('clicked') },
  }),
  {
    notes: 'ほげほげ　コンポーネントのメモ書き',
  })
  .add('with JSX', () => ({
    components: { MyButton },
    // eslint-disable-next-line no-unused-vars
    render(h) {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') },
  }),
  {
    notes: 'ほげほげ　コンポーネントのメモ書き',
  });

/* eslint-enable react/react-in-jsx-scope */
