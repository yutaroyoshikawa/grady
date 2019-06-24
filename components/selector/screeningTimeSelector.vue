<template>
  <div>
    <div class="wrap">
      <font-awesome-icon icon="clock" class="icon" />
      <select>
        <option value="default" disabled selected>時間を選択</option>
        <option v-for="(time, index) in times" :key="index" :value="index">
          {{ time.start | filterTime }} - {{ time.finish | filterTime }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import moment from 'moment'

library.add({ faClock })

export default Vue.extend({
  props: {
    times: Array
  },
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  filters: {
    filterTime: function(time: Date) {
      return moment(time).format('HH:mm')
    }
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
