import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import ScreeningStatusBar from '../layouts/screeningStatusBar.vue'
import MovieThumbnail from '../layouts/movieThumbnail.vue'
import Stepper from '../layouts/stepper.vue'
import MovieDetailsTab from '../layouts/tabs/movieDetailsTab.vue'
import SecretCard from '../layouts/secretCard.vue'
import ReadOnlyChat from '../layouts/chats/readOnlyChat'

storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .addParameters({
    backgrounds: [
      { name: '1', value: '#0D0D36', default: true },
      { name: '2', value: '#377793' },
      { name: '3', value: '#3F6060' },
      { name: '4', value: '#0A2E41' }
    ]
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
        default: text(
          'thumbUrl',
          'https://image.tmdb.org/t/p/w500//kZv92eTc0Gg3mKxqjjDAM73z9cy.jpg'
        )
      }
    },
    render(h) {
      return (
        <MovieThumbnail
          isScreening={this.isScreening}
          thumbUrl={this.thumbUrl}
          thumbName={this.thumbName}
        />
      )
    }
  }))
  .add('stepper', () => ({
    components: { Stepper },
    render(h) {
      return <Stepper />
    }
  }))
  .add('movieDetailsTab', () => ({
    components: { MovieDetailsTab },
    render(h) {
      return <MovieDetailsTab />
    }
  }))
  .add('secretCard', () => ({
    components: { SecretCard },
    props: {
      text: {
        default: 'サスペンス'
      },
      value: {
        default: 'aaa'
      }
    },
    render(h) {
      return <SecretCard text={this.text} />
    }
  }))
  .add('readOnlyChat', () => ({
    components: { ReadOnlyChat },
    props: {
      content: {
        default: [
          {
            contents: 'hoge',
            postedAt: new Date()
          },
          {
            contents: 'hogehoge',
            postedAt: new Date()
          }
        ]
      }
    },
    render(h) {
      return <ReadOnlyChat chats={this.content} />
    }
  }))
