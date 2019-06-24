<template>
  <div>
    <div class="wrap">
      <font-awesome-icon icon="theater-masks" class="icon" />
      <select>
        <option value="default" disabled selected>映画館を選択</option>
        <option
          v-for="(theater, index) in theaters"
          :key="index"
          value="theater.value"
        >
          {{ theater.name }}
        </option>
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
  border-bottom: solid 2px #fff;
  transition: all 200ms ease;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &::after {
    content: '';
    border: 0px;
    border-bottom: solid 2px #fff;
    border-right: solid 2px #fff;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 40%;
    right: 10px;
    margin-top: -4px;
  }

  .icon {
    margin: 0 10px;
    color: #fff;
  }
  select {
    outline: rgba(0, 0, 0, 0);
    border: none;
    width: 100%;
    background: rgba(0, 0, 0, 0);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color: #fff;
    cursor: pointer;
  }
}

@media screen and (min-width: 1024px) {
  .wrap {
    width: 622px;
    height: 41px;

    &::after {
      width: 10px;
      height: 10px;
    }

    .icon {
      font-size: 34px;
    }
    select {
      font-size: 25px;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    width: 401px;
    height: 41px;

    &::after {
      width: 10px;
      height: 10px;
    }

    .icon {
      font-size: 34px;
    }
    select {
      font-size: 25px;
    }
  }
}

@media screen and (max-width: 768px) {
  .wrap {
    width: 225px;
    height: 23px;

    &::after {
      width: 10px;
      height: 10px;
    }

    .icon {
      font-size: 19px;
    }
    select {
      font-size: 13px;
    }
  }
}
</style>
