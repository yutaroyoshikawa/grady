<template>
  <div>
    <div class="input_wrapper">
      <input
        type="email"
        class="email-input"
        placeholder="メールアドレス"
        v-model="hoge"
      />
      <button class="submit-button" :disabled="isDisable">
        <font-awesome-icon icon="paper-plane" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPaperPlane)

const regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/

export default Vue.extend({
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  props: {
    handleChange: Function,
    value: String
  },
  data: function() {
    return {
      isDisable: true,
      hoge: this.value
    }
  },
  watch: {
    hoge: function(val: string) {
      if (regexp.test(val)) {
        this.isDisable = false
      } else {
        this.isDisable = true
      }
      this.handleChange(val)
    }
  },
  mounted: function() {
    if (regexp.test(this.hoge)) {
      this.isDisable = false
    } else {
      this.isDisable = true
    }
  }
})
</script>

<style lang="scss" scoped>
.aaaaa {
  background-color: #000000;
  width: 1000px;
  height: 500px;
}
input {
  padding: 0;
  border: none;
  border-radius: 0;
  outline: none;
  background: none;
}

.input_wrapper {
  background-color: #ffffff;
  border: solid 3px #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.email-input {
  background-color: #0d0d36;
  color: #ffffff;
}
.isDisable {
  color: #3cb371;
}
@media screen and (min-width: 1024px) {
  .input_wrapper {
    width: 573px;
    height: 77px;
    border-radius: 77px;
  }
  .email-input {
    width: 499px;
    height: 70px;
    font-size: 36px;
    border-bottom-left-radius: 74px;
    border-top-left-radius: 74px;
  }
  .submit-button {
    width: 74px;
    height: 74px;
    font-size: 37px;
    border-bottom-right-radius: 74px;
    border-top-right-radius: 74px;
  }
}

@media screen and (min-width: 767px) and (max-width: 1024px) {
  .input_wrapper {
    width: 340px;
    height: 45.69px;
    border-radius: 77px;
  }
  .email-input {
    width: 295px;
    height: 42.69px;
    font-size: 21px;
    border-bottom-left-radius: 45.69px;
    border-top-left-radius: 45.69px;
  }
  .submit-button {
    width: 45.69px;
    height: 42.69px;
    font-size: 21.95px;
    border-bottom-right-radius: 45.69px;
    border-top-right-radius: 45.69px;
  }
}

@media screen and (max-width: 767px) {
  .input_wrapper {
    width: 249.29px;
    height: 33.5px;
    border-radius: 33.5px;
  }
  .email-input {
    width: 217.29px;
    height: 31.32px;
    font-size: 21px;
    border-bottom-left-radius: 31.32px;
    border-top-left-radius: 31.32px;
  }
  .submit-button {
    width: 32.32px;
    height: 31.32px;
    font-size: 16.1px;
    border-bottom-right-radius: 31.32px;
    border-top-right-radius: 31.32px;
  }
}
</style>
