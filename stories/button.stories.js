import CloseButton from '../components/buttons/closeButton.vue'
import NextButton from '../components/buttons/nextButton.vue'
import GotoWathcButton from '../components/buttons/goToWatchButton.vue'
import BackButton from '../components/buttons/backButton.vue'
import TagButton from '../components/buttons/tagButton.vue'
import SeatButton from '../components/buttons/seatButton.vue'
import ScreeningStatusButton from '../components/buttons/screeningStatusButton.vue'
import StepButton from '../components/buttons/stepButton.vue'
import PaymentButton from '../components/buttons/paymentButton.vue'
import TabButton from '../components/buttons/tabButton.vue'
import { storiesOf } from '@storybook/vue';
import { withKnobs, number, select, boolean, text } from '@storybook/addon-knobs';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addParameters({
    backgrounds: [
      { name: '1', value: '#0D0D36', default: true },
      { name: '2', value: '#377793' },
      { name: '3', value: '#3F6060' },
      { name: '4', value: '#0A2E41' }
    ]
  })
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
            シークレット: 'シークレット'
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
      return (
        <StepButton isActive={this.isActive} stepNumber={this.stepNumber} />
      )
    }
  }))
  .add('tabButton', () => ({
    components: { TabButton },
    props: {
      text: {
        default: select(
          'text',
          {
            概要: '概要',
            出演者: '出演者',
            スタッフ: 'スタッフ'
          },
          '概要'
        )
      },
      isActive: {
        default: boolean('isActive', true)
      }
    },
    render(h) {
      return <TabButton text={this.text} isActive={this.isActive} />
    }
  }))
  .add('paymentButton', () => ({
    components: { PaymentButton },
    render(h) {
      return <PaymentButton />
    }
  }))
