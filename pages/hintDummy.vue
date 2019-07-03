<template>
  <div class="wrapper">
    <div class="hint_menu">
      <div class="blank_top"></div>
      <div class="close_button-wrapper">
        <close-button />
      </div>
      <div class="main-wrapper">
        <main class="contents">
          <div class="contents-title">ヒント</div>
          <div class="hints" v-for="(count, index) in demo" :key="index">
            <hint
              class="hint_1"
              :content="count.content"
              :number="count.number"
            />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import CloseButton from '../components/buttons/closeButton'
import Hint from '../components/texts/hint'

export default Vue.extend({
  components: { 'close-button': CloseButton, hint: Hint },
  props: {
    hints: Array
  },
  data() {
    return {
      demo: [
        { content: 'hoge', number: 1 },
        { content: '', number: 2 },
        { content: '', number: 3 }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.wrapper {
  background-color: #0d0d36;
  width: 320px;
  height: 568px;
}

.hint_menu {
  margin: 0 0 0 auto;
  background-color: #3f6060;
  width: 283px;
  height: 568px;
}

/*  blank */
.blank_top {
  /*background-color: lightblue;*/
  height: 13px;
  width: 100%;
}

/*close button wrapper*/
.close_button-wrapper {
  /*background-color: lightcoral;*/
  padding-left: 6px;
  height: 35px;
  width: 100%;
}
.main-wrapper {
  /*background-color: lightcyan;*/
  height: 391px;
  width: 100%;

  /*  中央 */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* contents */
.contents {
  /*background-color: lightgreen;*/
  width: 237.36px;
  height: 356.39px;

  font-family: 'TsukuBRdGothic-Regular', sans-serif;
}

.contents-title {
  /*中央揃え*/
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 31px;
  color: #ffffff;
  height: 33px;
  width: 100%;
  /*background-color: lightgray;*/

  /* margin */
  margin-bottom: 75px;
}

.hints {
  color: #ffffff;
}

.hint_1 {
  margin-bottom: 70px;
}
/*  contents end */
</style>
