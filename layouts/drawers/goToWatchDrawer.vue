<template>
  <div>
    <div class="wrap">
      <div class="closer">
        <close-button />
      </div>

      <form>
        <div v-if="nowPage === 0" class="input-wrap">
          <movie-theater-selector :theaters="theaters" />
          <screening-date-selector :dates="dates" />
          <screening-time-selector :times="times" />
        </div>

        <div v-if="nowPage === 1" class="input-wrap">
          <div class="input-content">
            <div class="price-wrap">
              <people-input type="adult" />
              <div class="price-content">
                <span>×</span>
                <ticket-price :price="1300" />
              </div>
            </div>
            <div class="price-wrap">
              <people-input type="kids" />
              <div class="price-content">
                <span>×</span>
                <ticket-price :price="900" />
              </div>
            </div>
          </div>
          <hr />
          <div class="email">
            <email-input />
          </div>
        </div>
      </form>

      <div class="next-button-wrap">
        <div @click="hundleBack">
          <back-button v-if="nowPage === 1" />
        </div>
        <div @click="hundleNext">
          <next-button v-if="nowPage === 0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CloseButton from '~/components/buttons/closeButton.vue'
import NextButton from '~/components/buttons/nextButton.vue'
import BackButton from '~/components/buttons/backButton.vue'
import ScreeningDateSelector from '~/components/selector/screeningDateSelector.vue'
import ScreeningTimeSelector from '~/components/selector/screeningTimeSelector.vue'
import EmailInput from '~/components/inputs/mailInput.vue'
import MovieTheaterSelector from '~/components/selector/movieTheaterSelector.vue'
import PeopleInput from '~/components/inputs/peopleInput.vue'
import TicketPrice from '~/components/texts/ticketPrice.vue'

export default Vue.extend({
  components: {
    'close-button': CloseButton,
    'next-button': NextButton,
    'back-button': BackButton,
    'email-input': EmailInput,
    'movie-theater-selector': MovieTheaterSelector,
    'screening-date-selector': ScreeningDateSelector,
    'screening-time-selector': ScreeningTimeSelector,
    'people-input': PeopleInput,
    'ticket-price': TicketPrice
  },
  data: function() {
    return {
      theaters: [
        {
          name: 'hoge',
          value: 'hoge'
        }
      ],
      times: [
        {
          finish: new Date(),
          start: new Date()
        }
      ],
      dates: [new Date(), new Date()],
      nowPage: 1
    }
  },
  methods: {
    hundleNext: function() {
      this.nowPage++
    },
    hundleBack: function() {
      this.nowPage--
    }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  width: 768px;
  height: 100vh;
  background: #0d0d36;
  position: fixed;
  top: 0;
  right: 0;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  .closer {
    width: 100%;
    margin: 60px 0 0 60px;
  }

  .email {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .next-button-wrap {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 50px;
  }

  .input-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    height: 500px;
  }

  .input-content {
    width: 100%;
  }

  .price-wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: #fff;
      font-size: 50px;
    }

    .price-content {
      display: flex;
      align-items: center;
    }
  }
}
</style>
