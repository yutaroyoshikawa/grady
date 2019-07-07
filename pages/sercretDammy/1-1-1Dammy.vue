<template>
  <div>
    <div class="wrap">
      <div class="box">
        <div class="left">
          <p class="secret-text">シークレット映画</p>
          <secret-ganru-selecter :default-genre="defaultGenre" />
          <go-to-watch-button />
        </div>
        <div class="right">
          <div class="chats-description">
            <p class="chats-title">チャットで映画を推理</p>
            <p class="chats-massage">チケット購入</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SecretGanruSelecter from '../../components/selector/secretGenreSelector.vue'
import GoToWatchButton from '~/components/buttons/goToWatchButton.vue'
export default Vue.extend({
  components: {
    'secret-ganru-selecter': SecretGanruSelecter,
    'go-to-watch-button': GoToWatchButton
  },
  data() {
    return {
      defaultGenre: 'アクション'
    }
  }
})
</script>
<style lang="scss" scoped>
.wrap {
  background-color: #0a2e41;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.box {
  display: flex;
  justify-content: space-between;
}
.secret-text {
  color: #ffffff;
  font-size: 80px;
}

.right {
  display: flex;
  align-items: center;

  .chats-description {
    width: 638px;
    height: 100%;
    color: #ffffff;
  }
}
.chats-title {
  font-size: 38px;
}
.chats-massage {
  font-size: 21px;
  border-bottom: solid 3px #ffffff;
}
</style>
