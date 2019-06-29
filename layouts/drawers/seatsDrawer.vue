<template>
  <div>
    <div class="wrap">
      <div class="close-wrap">
        <close-button />
      </div>
      <div class="buttons-over-wrap">
        <span>スクリーン</span>
        <div class="button-wrap">
          <div
            v-for="(seat, index) in seats"
            :key="seat.value"
            :class="'seat' + index"
          >
            <seat-button :value="seat.value" :isReserved="seat.isReserved" />
          </div>
        </div>
      </div>
      <div class="mark-wrap">
        <hr />
        <div class="seat-mark-wrap">
          <reserved-seat-mark :isReserve="true" />
          <reserved-seat-mark :isReserve="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CloseButton from '~/components/buttons/closeButton.vue'
import ReservedSeatMark from '~/components/marks/reservedSeatMark.vue'
import SeatButton from '~/components/buttons/seatButton.vue'

export default Vue.extend({
  components: {
    'close-button': CloseButton,
    'reserved-seat-mark': ReservedSeatMark,
    'seat-button': SeatButton
  },
  data: function() {
    return {
      seats: [
        {
          value: 'A1',
          isReserved: false
        },
        {
          value: 'A2',
          isReserved: false
        },
        {
          value: 'A3',
          isReserved: false
        },
        {
          value: 'A4',
          isReserved: false
        },
        {
          value: 'B1',
          isReserved: false
        },
        {
          value: 'B2',
          isReserved: false
        },
        {
          value: 'B3',
          isReserved: false
        },
        {
          value: 'B4',
          isReserved: false
        },
        {
          value: 'B5',
          isReserved: false
        },
        {
          value: 'B6',
          isReserved: false
        },
        {
          value: 'C1',
          isReserved: false
        },
        {
          value: 'C2',
          isReserved: false
        },
        {
          value: 'C3',
          isReserved: false
        },
        {
          value: 'C4',
          isReserved: false
        },
        {
          value: 'C5',
          isReserved: false
        },
        {
          value: 'C6',
          isReserved: false
        },
        {
          value: 'D1',
          isReserved: false
        },
        {
          value: 'D2',
          isReserved: false
        },
        {
          value: 'D3',
          isReserved: false
        },
        {
          value: 'D4',
          isReserved: false
        },
        {
          value: 'D5',
          isReserved: false
        },
        {
          value: 'D6',
          isReserved: false
        },
        {
          value: 'E1',
          isReserved: false
        },
        {
          value: 'E2',
          isReserved: false
        },
        {
          value: 'E3',
          isReserved: false
        },
        {
          value: 'E4',
          isReserved: false
        },
        {
          value: 'E5',
          isReserved: false
        },
        {
          value: 'E6',
          isReserved: false
        },
        {
          value: 'F1',
          isReserved: false
        },
        {
          value: 'F2',
          isReserved: false
        },
        {
          value: 'F3',
          isReserved: false
        },
        {
          value: 'F4',
          isReserved: false
        },
        {
          value: 'F5',
          isReserved: false
        },
        {
          value: 'F6',
          isReserved: false
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  background: #3f6060;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;

  .buttons-over-wrap {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;

    .button-wrap {
      display: grid;

      .seat0 {
        grid-row: 1;
        grid-column: 1 / 3;
        display: flex;
        justify-content: flex-end;
      }

      .seat3 {
        grid-row: 1;
        grid-column: 5 / 7;
      }
    }
  }

  .mark-wrap {
    hr {
      width: 90%;
    }

    .seat-mark-wrap {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
  }
}

@media screen and (min-width: 1024px) {
  .wrap {
    width: 768px;
    height: 100vh;
    min-height: 1080px;

    .close-wrap {
      margin: 50px 0 0 50px;
    }

    .buttons-over-wrap {
      span {
        font-size: 30px;
        margin-bottom: 50px;
      }

      .button-wrap {
        grid-template-rows: 100px 100px 100px 100px 100px 100px;
        grid-template-columns: 80px 80px 100px 80px 80px 80px;

        .seat0 {
          margin-right: 10px;
        }
      }
    }

    .mark-wrap {
      margin: 50px 0;

      hr {
        margin: 0 auto 20px auto;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    width: 768px;
    height: 100vh;
    min-height: 1080px;

    .close-wrap {
      margin: 50px 0 0 50px;
    }

    .buttons-over-wrap {
      span {
        font-size: 30px;
        margin-bottom: 50px;
      }

      .button-wrap {
        grid-template-rows: 90px 90px 90px 90px 90px 90px;
        grid-template-columns: 70px 70px 90px 70px 70px 70px;

        .seat0 {
          margin-right: 12px;
        }
      }
    }

    .mark-wrap {
      margin: 90px 0;

      hr {
        margin: 0 auto 20px auto;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .wrap {
    width: 283px;
    height: 100vh;
    min-height: 568px;

    .close-wrap {
      margin: 10px 0 0 10px;
    }

    .buttons-over-wrap {
      span {
        font-size: 15px;
        margin-bottom: 25px;
      }

      .button-wrap {
        grid-template-rows: 50px 50px 50px 50px 50px 50px;
        grid-template-columns: 40px 40px 55px 40px 40px 40px;

        .seat0 {
          margin-right: 5px;
        }
      }
    }

    .mark-wrap {
      margin: 10px 0;

      hr {
        margin: 0 auto 20px auto;
      }
    }
  }
}
</style>
