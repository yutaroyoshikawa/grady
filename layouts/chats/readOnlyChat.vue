<template>
  <div>
    <div class="wrapper">
      <div v-for="(chat, index) in chats" :key="index">
        <div v-if="index % 2 === 0" class="chat_box">
          <p class="contents">
            {{ chat.content }}
          </p>
        </div>
        <div v-else class="chat_box2">
          <p class="contents">
            {{ chat.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    chats: Array
  }
})
</script>

<style scoped lang="scss">
.chat_box {
  display: flex;
  width: 291px;
  min-height: 61px;
  height: auto !important;
  border: solid #000000 1px;
  background-color: #ffffff;
  border-radius: 56px;
  flex-wrap: wrap;
  word-wrap: break-word;
  margin-top: 60px;
  margin-bottom: 60px;
}
.chat_box2 {
  display: flex;
  margin: 0 0 0 auto;
  width: 291px;
  min-height: 61px;
  height: auto !important;
  border: solid #000000 1px;
  background-color: #ffffff;
  border-radius: 56px;
  flex-wrap: wrap;
  word-wrap: break-word;
}
p.contents {
  padding: 10px;
  width: 291px;
  margin: 30px;
  word-break: break-all;
  color: #0a2e41;
  font-size: 20px;
  font-weight: 500;
}
.wrapper {
  width: 532px;
  overflow-y: scroll;
}
</style>
