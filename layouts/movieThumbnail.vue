<template>
  <div>
    <div class="wrap">
      <showing-mark v-if="isScreening" class="mark" />
      <vue-load-image>
        <img slot="image" :src="thumbUrl" :alt="thumbName" />
        <div slot="preloader" class="loading">loading...</div>
        <div slot="error" class="error">
          <font-awesome-icon icon="film" class="icon" />
          <span>{{ thumbName }}</span>
        </div>
      </vue-load-image>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueLoadImage from 'vue-load-image'
import ShowingMark from '../components/marks/showingMark.vue'

library.add({ faFilm })

export default Vue.extend({
  props: {
    isScreening: Boolean,
    thumbUrl: String,
    thumbName: String
  },
  components: {
    'showing-mark': ShowingMark,
    'vue-load-image': VueLoadImage,
    'font-awesome-icon': FontAwesomeIcon
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  .mark {
    position: absolute;
  }

  img {
    width: 100%;
  }

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #000;
    animation-name: load;
    animation-delay: 0;
    animation-duration: 400ms;
    animation-timing-function: ease;
  }

  .error {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    color: #fff;
    background-color: #000;
  }
}

@keyframes load {
  0% {
    background-color: #000;
  }
  100% {
    background-color: #333;
  }
}

@media screen and (min-width: 1024px) {
  .wrap {
    width: 18vw;
    height: 26vw;
    max-width: 242px;
    max-height: 363px;
    img {
      border-radius: 20px;
    }

    .loading {
      width: 242px;
      height: 363px;
      border-radius: 20px;
    }

    .error {
      width: 242px;
      height: 363px;
      border-radius: 20px;

      .icon {
        font-size: 80px;
        display: block;
      }

      span {
        display: block;
        font-size: 20px;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    width: 157px;
    height: 235px;

    img {
      border-radius: 20px;
    }

    .loading {
      width: 157px;
      height: 235px;
      border-radius: 20px;
    }

    .error {
      width: 157px;
      height: 235px;
      border-radius: 20px;

      .icon {
        font-size: 50px;
        display: block;
      }

      span {
        display: block;
        font-size: 15px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .wrap {
    width: 111px;
    height: 167px;

    img {
      border-radius: 14px;
    }

    .loading {
      width: 111px;
      height: 167px;
      border-radius: 14px;
    }

    .error {
      width: 111px;
      height: 167px;
      border-radius: 14px;

      .icon {
        font-size: 30px;
        display: block;
      }

      span {
        display: block;
        font-size: 10px;
      }
    }
  }
}
</style>
