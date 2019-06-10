import ScreeningStatusBar from '../layouts/screeningStatusBar.vue'
import MovieThumbnail from '../layouts/movieThumbnail.vue'
import Stepper from '../layouts/stepper.vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue';

storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .addParameters({
    backgrounds: [
      { name: '1', value: '#0D0D36', default: true },
      { name: '2', value: '#377793' },
      { name: '3', value: '#3F6060' },
      { name: '4', value: '#0A2E41' },
    ],
  })
  .add('screeningStatusBar', () => ({
    components: { ScreeningStatusBar },
    render(h) {
      return <ScreeningStatusBar />
    }
  }))
  .add('movieThumbnail', () => ({
    components: { MovieThumbnail },
    props: {
      isScreening: {
        default: boolean('isScreening', true)
      },
      thumbName: {
        default: text('thumbName', 'Example thumb')
      },
      thumbUrl: {
        default: text('thumbUrl', 'https://image.tmdb.org/t/p/w500//kZv92eTc0Gg3mKxqjjDAM73z9cy.jpg')
      }
    },
    render(h) {
      return <MovieThumbnail isScreening={this.isScreening} thumbUrl={this.thumbUrl} thumbName={this.thumbName} />
    }
  }))
  .add('stepper', () => ({
    components: { Stepper },
    render(h) {
      return <Stepper />
    }
  }))