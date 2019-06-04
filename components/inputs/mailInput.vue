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
import { Vue, Component } from 'vue-property-decorator'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPaperPlane)

@Component({
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  name: 'MailInput'
})
export default class extends Vue {}
</script>

<style lang="scss">
/*1/2まだしてない*/

body {
  background-color: #0d0d36;
}

/*wrapper*/
.input_wrapper {
  display: flex;
  background-color: #ffffff;
  height: 77px;
  width: 573px;
  border-radius: 77px;
}

/*input mail*/
.mail {
  width: 495px;
  height: 72px;
  border-top-left-radius: 72px;
  border-bottom-left-radius: 72px;
  background-color: #0d0d36;
  margin-top: 3px;
  margin-left: 1px;
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
