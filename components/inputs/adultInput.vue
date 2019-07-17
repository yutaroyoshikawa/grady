<template>
  <div class="entire">
    <div class="mark">
      <span class="icon-name">Adult</span>
      <font-awesome-icon icon="male" class="icon" />
    </div>
    <div class="input-box">
      <input type="number" value="0" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMale } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faMale)
export default Vue.extend({
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  props: ['onchange']
})
</script>

<style lang="scss" scoped>
.entire {
  display: flex;
  width: 125px;
  .mark {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
  .icon-name {
    font-size: 25px;
  }
  .icon {
    font-size: 52px;
  }
  .input-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 10px;
  }
  input {
    width: 100%;
    font-size: 30px;
    border: none;
    border-bottom: solid 1px rgba(0, 0, 0, 0.3);
    padding: 0 10px;
    transition: all 300ms ease;
  }
  input:focus {
    outline: rgba(0, 0, 0, 0);
    border-bottom: solid 1px rgba(0, 0, 0, 1);
  }
}
/* pcと同じなため,なし */
@media screen and (min-width: 768px) and (max-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .entire {
    width: 85px;
    .mark {
      margin-right: 20px;
    }
    .icon-name {
      font-size: 14px;
    }
    .icon {
      font-size: 30px;
    }
    .input-box {
      padding-bottom: 0;
    }
    input {
      font-size: 17px;
      padding: 3px 10px;
    }
  }
}
</style>
