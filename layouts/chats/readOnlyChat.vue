<template>
  <div class="chat_box">
    <p v-model="chat"  class="contents"
    >
      <p
        v-for="chat in chats"
        :key="chat.value"
        :value="chat.value"
      >
        {{ chat.text }}
      </p>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    content: String,
    postedAt: Date
  },
  data: function() {
    return {
      chats: [
        {
          text: 'hoge1',
          value: 'action'
        },
        {
          text: 'サスペンス',
          value: 'suspense'
        },
        {
          text: 'SF',
          value: 'sf'
        },
        {
          text: 'ホラー',
          value: 'horror'
        },
        {
          text: 'コメディ',
          value: 'comedy'
        },
        {
          text: 'ロマンス',
          value: 'romance'
        }
      ]
    }
  }
})
</script>

<style scoped lang="scss">
.chat_box {
  display: flex;
  align-items: center;
  width: 291px;
  min-height: 61px;
  height: auto !important;
  border: solid #000000 1px;
  background-color: #ffffff;
  border-radius: 111px;
  flex-wrap: wrap;
  text-align: center;
  word-wrap: break-word;
}
p.contents {
  padding: 10px;
  width: 291px;
  margin: 30px;
  word-break: break-all;
}
</style>
