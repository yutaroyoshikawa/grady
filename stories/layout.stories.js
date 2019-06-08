import ScreeningStatusBar from '../layouts/screeningStatusBar.vue'
import { storiesOf } from '@storybook/vue';

storiesOf('Layout', module)
  .add('screeningStatusBar', () => ({
    components: { ScreeningStatusBar },
    render(h) {
      return <ScreeningStatusBar />
    }
  }))
