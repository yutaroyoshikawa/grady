<template>
  <div>
    <div class="entire">
      <div class="wrap">
        <div>
          <div class="title-wrap">
            <h1>シークレット映画</h1>
            <secret-genre-selector
              :genre="reservation.genre"
              :isReadOnly="true"
            />
          </div>
          <div class="reservation-info-wrap">
            <div>
              <reservation-tab :handleChangeSelected="onChangeTab" />
            </div>
            <div class="tab-content-wrap">
              <div class="tab-contents">
                <div v-if="activeTab === 'チャット'">
                  <div class="chats-wrap">
                    <read-only-chat :chats="chats" />
                  </div>
                  <div>
                    <chat-input value="" />
                  </div>
                </div>
                <div v-if="activeTab === 'QR'" class="qr">
                  <vue-qrcode
                    :value="reservationId"
                    :options="{ width: 222 }"
                  />
                </div>
                <div v-if="activeTab === '予約情報'">
                  <ul>
                    <li>
                      <movie-theater-selector
                        :theaters="theaters"
                        :isReadOnly="true"
                        :value="reservation.theater"
                      />
                    </li>
                    <li class="people-input-wrap">
                      <div>
                        <div>
                          <people-input
                            type="adult"
                            :isReadOnly="true"
                            :value="reservation.adult"
                          />
                        </div>
                        <div>
                          <people-input
                            type="kids"
                            :isReadOnly="true"
                            :value="reservation.kids"
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <screening-date-selector
                        :dates="dates"
                        :isReadOnly="true"
                        :value="new Date(reservation.date)"
                      />
                    </li>
                    <li>
                      <screening-time-selector
                        :times="times"
                        :isReadOnly="true"
                        :value="reservation.time"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hint-wrap">
          <h3>ヒント</h3>
          <ul>
            <li>
              <hint :content="hints.hint1" :number="1" />
            </li>
            <li>
              <hint :content="hints.hint2" :number="2" />
            </li>
            <li>
              <hint :content="hints.hint3" :number="3" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueQrcode from '@chenfengyuan/vue-qrcode'
import SecretGenreSelector from '~/components/selector/secretGenreSelector.vue'
import ReservationTab from '~/layouts/tabs/reservationTab.vue'
import Hint from '~/components/texts/hint.vue'
import ReadOnlyChat from '~/layouts/chats/readOnlyChat.vue'
import ChatInput from '~/components/inputs/chatInput.vue'
import { IReserve } from '~/store/reservations'
import PeopleInput from '~/components/selector/peopleInput.vue'
import MovieTheaterSelector from '~/components/selector/movieTheaterSelector.vue'
import ScreeningDateSelector from '~/components/selector/screeningDateSelector.vue'
import ScreeningTimeSelector from '~/components/selector/screeningTimeSelector.vue'
import * as moment from 'moment'

export default Vue.extend({
  components: {
    'secret-genre-selector': SecretGenreSelector,
    'reservation-tab': ReservationTab,
    hint: Hint,
    'read-only-chat': ReadOnlyChat,
    'chat-input': ChatInput,
    'vue-qrcode': VueQrcode,
    'people-input': PeopleInput,
    'movie-theater-selector': MovieTheaterSelector,
    'screening-date-selector': ScreeningDateSelector,
    'screening-time-selector': ScreeningTimeSelector
  },
  data() {
    return {
      activeTab: 'チャット',
      reservationId: this.$route.params.id,
      theaters: [
        {
          name: 'ぴよぴよ映画館',
          value: 'ぴよぴよ映画館'
        },
        {
          name: 'ふがふが映画館',
          value: 'ふがふが映画館'
        },
        {
          name: 'ほげほげ映画館',
          value: 'ほげほげ映画館'
        }
      ],
      times: [
        {
          finish: moment()
            .hour(14)
            .minute(0)
            .toDate(),
          start: moment()
            .hour(12)
            .minute(0)
            .toDate()
        },
        {
          finish: moment()
            .hour(17)
            .minute(0)
            .toDate(),
          start: moment()
            .hour(15)
            .minute(0)
            .toDate()
        }
      ],
      dates: [
        moment()
          .add(1, 'day')
          .toDate(),
        moment()
          .add(2, 'day')
          .toDate(),
        moment()
          .add(3, 'day')
          .toDate(),
        moment()
          .add(4, 'day')
          .toDate(),
        moment()
          .add(5, 'day')
          .toDate(),
        moment()
          .add(6, 'day')
          .toDate(),
        moment()
          .add(7, 'day')
          .toDate(),
        moment()
          .add(8, 'day')
          .toDate(),
        moment()
          .add(9, 'day')
          .toDate(),
        moment()
          .add(10, 'day')
          .toDate(),
        moment()
          .add(11, 'day')
          .toDate(),
        moment()
          .add(12, 'day')
          .toDate(),
        moment()
          .add(13, 'day')
          .toDate(),
        moment()
          .add(14, 'day')
          .toDate()
      ]
    }
  },
  methods: {
    onChangeTab(tab: string) {
      this.activeTab = tab
    }
  },
  computed: {
    reservation(): IReserve {
      return this.$store.state.reservations.reservation
    },
    chats(): any {
      return this.$store.state.reservations.chats
    },
    hints(): any {
      return this.$store.state.reservations.hints
    }
  },
  mounted() {
    this.$store.dispatch(
      'reservations/requestListenData',
      this.reservation.genre
    )
  },
  destroyed() {
    this.$store.dispatch('reservations/stopListenData')
  }
})
</script>

<style lang="scss" scoped>
.entire {
  width: 100vw;
  height: 100vh;
  background: #0d0d36;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;

    .title-wrap {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      flex-direction: column;
      flex-wrap: wrap;

      h1 {
        font-size: 80px;
      }
    }

    .reservation-info-wrap {
      display: flex;
      height: 520px;
      margin-top: 80px;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;

      .tab-content-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 450px;

        .tab-contents {
          display: flex;
          justify-content: center;
          align-items: center;

          .chats-wrap {
            overflow-y: scroll;
            height: 300px;
          }

          li {
            list-style: none;
          }

          .people-input-wrap {
            div {
              display: flex;
              margin-right: 20px;
            }
          }

          .qr {
            width: 253px;
            height: 253px;
            background-color: #fff;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }

    .hint-wrap {
      display: flex;
      height: 700px;
      justify-content: space-between;
      flex-direction: column;
      flex-wrap: wrap;
      padding-left: 30px;
      margin-left: 60px;
      border-left: 1px solid #72729d;

      h3 {
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 61px;
      }

      ul {
        height: 470px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        flex-wrap: wrap;

        li {
          list-style: none;
        }
      }
    }
  }
}
</style>
