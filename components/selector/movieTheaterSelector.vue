<template>
  <div>
    <div class="wrap">
      <font-awesome-icon icon="theater-masks" class="icon"/>
      <select>
        <option value="default">映画館を選択</option>
        <option
          v-for="(theater, index) in theaters"
          v-bind:key="index"
          value="theater.value"
        >{{ theater.name }}</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTheaterMasks } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add({ faTheaterMasks })

export default Vue.extend({
  props: {
    theaters: Array
  },
  components: {
    'font-awesome-icon': FontAwesomeIcon
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  align-items: center;
  border-bottom: solid 2px #000;
  width: 622px;
  height: 41px;
  transition: all 200ms ease;
  position: relative;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border: 0px;
    border-bottom: solid 2px #000;
    border-right: solid 2px #000;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 40%;
    right: 10px;
    margin-top: -4px;
  }

  .icon {
    font-size: 34px;
    margin: 0 10px;
  }
  select {
    outline: rgba(0, 0, 0, 0);
    border: none;
    width: 100%;
    font-size: 25px;
    background: rgba(0, 0, 0, 0);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
}
</style>
