<template>
  <div>
    <div class="entire">
      <div v-if="type === 'adult'" class="mark">
        <span class="icon-name">Adult</span>
        <font-awesome-icon icon="male" class="icon" />
      </div>
      <div v-if="type === 'kids'" class="mark">
        <span class="icon-name">Kids</span>
        <font-awesome-icon icon="baby" class="icon" />
      </div>
      <div class="input-box">
        <input type="number" value="0" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBaby, faMale } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMale)
library.add(faBaby)

export default Vue.extend({
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  props: {
    type: String
  }
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
</style>
