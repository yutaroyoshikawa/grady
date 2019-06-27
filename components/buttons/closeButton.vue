<template>
  <div>
    <div class="wrap">
      <button>
        <font-awesome-icon class="close-button" icon="times-circle" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add({ faTimesCircle })
Vue.component('font-awesome-icon', FontAwesomeIcon)
export default Vue.extend({})
</script>

<style lang="scss">
.wrap {
  .close-button {
    color: #fff;
  }
}


@media screen and (min-width: 1024px) {
  .wrap {
    button {
      height: 62px;
      width: 62px;

      .close-button {
        font-size: 62px;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    button {
      height: 62px;
      width: 62px;

      .close-button {
        font-size: 62px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .wrap {
    button {
      height: 35px;
      width: 35px;

      .close-button {
        font-size: 35px;
      }
    }
  }
}
</style>
