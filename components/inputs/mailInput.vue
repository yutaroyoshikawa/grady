<template>
  <body>
    <div class="input_wrapper">
      <input type="email" class="mail" placeholder="メールアドレス" />
      <button class="btn">
        <font-awesome-icon icon="paper-plane" size="3x" />
        <!--        <font-awesome-icon icon="fas fa-paper-plane fa-3x" />-->
      </button>
    </div>
  </body>
</template>

<script lang="ts">
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPaperPlane)

export default Vue.extend({
  components: {
    'font-awesome-icon': FontAwesomeIcon
  }
})
</script>

<style lang="scss" scoped>
/*1/2まだしてない*/

/*wrapper*/
.input_wrapper {
  display: flex;
  background-color: #ffffff;
  height: 77px;
  width: 573px;
  border-radius: 77px;
  align-items: center;
}

/*input mail*/
input {
  padding: 0;
  border: none;
  border-radius: 0;
  outline: none;
  background: none;
}
.mail {
  width: 495px;
  height: 72px;
  border-top-left-radius: 72px;
  border-bottom-left-radius: 72px;
  background-color: #0d0d36;
  margin-left: 2px;
  padding-left: 26px;
  font-size: 36px;
  line-height: 60px;
  color: #ffffff;
  outline: 0;
}

::placeholder {
  color: #ffffff;
  font-family: 'TsukuBRdGothic-Regular', sans-serif;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}
/*submit*/
.btn {
  display: flex;
  justify-content: center;
  width: 74px;
  height: 72px;
  border-bottom-right-radius: 72px;
  border-top-right-radius: 72px;
  margin-top: 2px;
  outline: 0;
  padding-right: 13px;
}
i {
  margin-right: 5px;
}
</style>
