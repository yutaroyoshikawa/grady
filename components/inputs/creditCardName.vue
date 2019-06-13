<template>
  <div>
    <div class="wrap">
      <span>
        <font-awesome-icon icon="user"/>
      </span>
      <input type="text" placeholder="クレジットカード名義">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add({ faUser })

export default Vue.extend({
  components: {
    'font-awesome-icon': FontAwesomeIcon
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  span {
    color: #fff;
    font-size: 25px;
    position: absolute;
    transform: translate(6px, 3px);
  }

  input {
    width: 602px;
    height: 42.5px;
    font-size: 25px;
    background: transparent;
    border: none;
    border-bottom: solid 2px #bbb;
    color: #fff;
    outline: solid 1px rgba(0, 0, 0, 0);
    padding: 0 10px 0 43px;
    transition: all 200ms ease;

    &:focus {
      border-bottom: solid 2px #fff;

      &::placeholder {
        color: #fff;
      }
    }

    &::placeholder {
      color: #bbb;
      transition: all 200ms ease;
    }
  }
}

@media screen and (min-width: 1024px) {
  .wrap {
    span {
      font-size: 25px;
      transform: translate(6px, 3px);
    }

    input {
      width: 602px;
      height: 42.5px;
      font-size: 25px;
      padding: 0 10px 0 43px;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    span {
      font-size: 25px;
      transform: translate(6px, 3px);
    }

    input {
      width: 323px;
      height: 41.5px;
      font-size: 25px;
      padding: 0 10px 0 43px;
    }
  }
}

@media screen and (max-width: 767px) {
  .wrap {
    span {
      font-size: 15px;
      transform: translate(6px, 3px);
    }

    input {
      width: 198px;
      height: 25.5px;
      font-size: 15px;
      padding: 0 10px 0 33px;
    }
  }
}
</style>
