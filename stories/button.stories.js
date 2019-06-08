import CloseButton from '../components/buttons/closeButton.vue'
import NextButton from '../components/buttons/nextButton.vue'
import GotoWathcButton from '../components/buttons/goToWatchButton.vue'
import BackButton from '../components/buttons/backButton.vue'
import TagButton from '../components/buttons/tagButton.vue'
import SeatButton from '../components/buttons/seatButton.vue'
import ScreeningStatusButton from '../components/buttons/screeningStatusButton.vue'
import StepButton from '../components/buttons/stepButton.vue'
import { storiesOf } from '@storybook/vue';
import { withKnobs, number, select, boolean } from '@storybook/addon-knobs';

storiesOf('Button',module)
  .addDecorator(withKnobs)
  .add('closeButton', () => ({
    components: { CloseButton },
    render(h) {
      return <CloseButton />
    }
  }))
  .add('nextButton', () => ({
    components: { NextButton },
    render(h) {
      return <NextButton />
    }
  }))
  .add('goToWatchButton', () => ({
    components: { GotoWathcButton },
    render(h) {
      return <GotoWathcButton />
    }
  }))
  .add('backButton', () => ({
    components: { BackButton },
    render(h) {
      return <BackButton />
    }
  }))
  .add('tagButton', () => ({
    components: { TagButton },
    props: {
      name: {
        default: text('name', 'サスペンス')
      }
    },
    render(h) {
      return <TagButton name={this.name} />
    }
  }))
  .add('seatButton', () => ({
    components: { SeatButton },
    render(h) {
      return <SeatButton />
    }
  }))
  .add('screeningStatusButton', () => ({
    components: { ScreeningStatusButton },
    props: {
      name: {
        default: select(
          'name',
          {
            全て: '全て',
            上映中: '上映中',
            上映済み: '上映済み',
            シークレット: 'シークレット',
          },
          '全て'
        )
      },
      isActive: {
        default: boolean('isActive', true)
      }
    },
    render(h) {
      return <ScreeningStatusButton name={this.name} isActive={this.isActive} />
    }
  }))
  .add('stepButton', () => ({
    components: { StepButton },
    props: {
      isActive: {
        default: boolean('isActive', true)
      },
      stepNumber: {
        default: number('stepNumber', 1, {
          min: 1,
          max: 3
        })
      }
    },
    render(h) {
      return <StepButton isActive={this.isActive} stepNumber={this.stepNumber} />
    }
  }))
