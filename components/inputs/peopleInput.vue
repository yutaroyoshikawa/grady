<template>
  <div>
    <div class="entire">
      <div v-if="type === 'adult'" class="mark">
        <span class="icon-name">Adult</span>
        <font-awesome-icon icon="male" class="icon" />
      </div>
      <div v-if="type === 'kids'" class="mark kids">
        <span class="icon-name">Kids</span>
        <font-awesome-icon icon="baby" class="icon" />
      </div>
      <div class="input-box">
        <input type="number" v-model="hoge" min="0" max="9" maxlength="1" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBaby, faMale } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add({
  faMale,
  faBaby
})

export default Vue.extend({
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  props: {
    type: String,
    handleChange: Function,
    value: Number
  },
  data: function() {
    return {
      hoge: this.value
    }
  },
  watch: {
    hoge: function(value: string) {
      if (Number(value) < 0 || Number(value) > 9 || !Number(value)) {
        this.hoge = 0
      } else {
        this.hoge = Math.floor(Number(value))
        this.handleChange(Math.floor(Number(value)))
      }
    }
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
    color: #fff;
  }

  .icon-name {
    font-size: 25px;
  }

  .icon {
    font-size: 52px;
  }

  .kids {
    margin-right: 10px;
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
    width: 75px;
    font-size: 30px;
    border: none;
    border-bottom: solid 1px rgba(255, 255, 255, 0.4);
    padding: 0 10px;
    transition: all 300ms ease;
    background: transparent;
    color: #fff;
  }

  input:focus {
    outline: rgba(0, 0, 0, 0);
    border-bottom: solid 1px rgba(255, 255, 255, 1);
  }
}
</style>
