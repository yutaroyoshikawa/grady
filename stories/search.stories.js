import Search from '../layouts/search'
import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'

storiesOf('Search',module)
  .addDecorator(withKnobs)
  .add('search.stories.js', () => ({
    components: { Search },
    render(h) {
      return <Search />
    }
  }))
