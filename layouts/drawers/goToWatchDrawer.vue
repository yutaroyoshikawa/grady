<template>
  <div>
    <div class="entire">
      <div class="wrap">
        <div class="closer">
          <close-button />
        </div>

        <form @submit="handleSend">
          <div v-if="nowPage === 0" class="input-wrap">
            <movie-theater-selector
              :theaters="theaters"
              :handleChange="handleChangeTheater"
              :value="formDatas.theater"
            />
            <screening-date-selector
              :dates="dates"
              :handleChange="handleChangeDate"
              :value="formDatas.date"
            />
            <screening-time-selector
              :times="times"
              :handleChange="handleChangeTime"
              :value="formDatas.time"
            />
          </div>

          <div v-if="nowPage === 1" class="input-wrap">
            <div class="input-content">
              <div class="price-wrap">
                <people-input
                  type="adult"
                  :handleChange="handleChangeAdult"
                  :value="formDatas.adult"
                />
                <div class="price-content">
                  <span>×</span>
                  <ticket-price :price="1300" />
                </div>
              </div>
              <div class="price-wrap">
                <people-input
                  type="kids"
                  :handleChange="handleChangeKids"
                  :value="formDatas.kids"
                />
                <div class="price-content">
                  <span>×</span>
                  <ticket-price :price="900" />
                </div>
              </div>
              <hr />
              <div class="sum">
                <ticket-price
                  :price="formDatas.adult * 1300 + formDatas.kids * 900"
                />
              </div>
            </div>
            <div class="email">
              <email-input
                :handleChange="handleChangeEmail"
                :value="formDatas.email"
              />
            </div>
          </div>
        </form>

        <div class="paging-button-wrap">
          <div @click="handleBack">
            <back-button v-if="nowPage === 1" />
          </div>
          <div @click="handleNext">
            <next-button v-if="nowPage === 0" />
          </div>
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
      nowPage: 1,
      formDatas: {
        theater: '',
        date: 0,
        time: 0,
        adult: 0,
        kids: 0,
        email: ''
      }
    }
  },
  methods: {
    handleNext: function() {
      this.nowPage++
    },
    handleBack: function() {
      this.nowPage--
    },
    handleChangeTheater: function(e: Event) {
      if (e.target instanceof HTMLSelectElement) {
        this.formDatas.theater = e.target.value
      }
    },
    handleChangeDate: function(e: Event) {
      if (e.target instanceof HTMLSelectElement) {
        this.formDatas.date = Number(e.target.value)
      }
    },
    handleChangeTime: function(e: Event) {
      if (e.target instanceof HTMLSelectElement) {
        this.formDatas.time = Number(e.target.value)
      }
    },
    handleChangeAdult: function(num: string) {
      this.$set(this.formDatas, 'adult', Number(num))
    },
    handleChangeKids: function(num: string) {
      this.$set(this.formDatas, 'kids', Number(num))
    },
    handleChangeEmail: function(value: string) {
      this.formDatas.email = value
    },
    handleSend: function(e: Event) {
      if (e.target instanceof HTMLFormElement) {
        e.preventDefault()
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.entire {
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
  padding: 0;
  margin: 0;

  .wrap {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;

    .closer {
      width: 100%;
    }

    .input-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: column;

      .input-content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        flex-direction: column;

        .price-wrap {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          span {
            color: #fff;
          }

          .price-content {
            display: flex;
            align-items: center;
          }
        }

        .sum {
          display: flex;
          justify-content: flex-end;
        }
      }
    }

    .email {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .paging-button-wrap {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
}

@media screen and (min-width: 1024px) {
  .entire {
    width: 768px;
    min-height: 1000px;

    .wrap {
      min-height: 1000px;

      .closer {
        margin: 60px 0 0 60px;
      }

      .input-wrap {
        height: 500px;
        margin: 100px 100px;

        .input-content {
          height: 300px;

          .price-wrap {
            span {
              font-size: 50px;
            }
          }
        }
      }

      .paging-button-wrap {
        margin-bottom: 60px;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .entire {
    width: 80vw;
    min-height: 1000px;

    .wrap {
      min-height: 1000px;

      .closer {
        margin: 30px 0 0 30px;
      }

      .input-wrap {
        height: 500px;
        margin: 10px 10px;

        .input-content {
          height: 300px;

          .price-wrap {
            span {
              font-size: 50px;
            }
          }
        }
      }

      .paging-button-wrap {
        margin-bottom: 30px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .entire {
    width: 90vw;
    min-height: 568px;

    .wrap {
      min-height: 568px;

      .closer {
        margin: 10px 0 0 10px;
      }

      .input-wrap {
        height: 500px;
        margin: 10px 10px;

        .input-content {
          height: 300px;

          .price-wrap {
            span {
              font-size: 20px;
            }
          }
        }
      }

      .paging-button-wrap {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
