<template>
  <div>
    <div class="wrapper">
      <div v-for="(chat, index) in chats" :key="index">
        <div v-if="index % 2 === 0" class="chat_box">
          <p class="contents">
            {{ chat.contents }}
          </p>
        </div>
        <div v-else class="chat_box2">
          <p class="contents">
            {{ chat.contents }}
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
  },
  data() {
    return {
      count: 0
    }
  }
})
</script>

<style scoped lang="scss">
.chat_box {
  display: flex;
  /*align-items: center;*/
  width: 291px;
  min-height: 61px;
  height: auto !important;
  border: solid #000000 1px;
  background-color: #ffffff;
  border-radius: 56px;
  flex-wrap: wrap;
  /*text-align: center;*/
  word-wrap: break-word;
}
.chat_box2 {
  display: flex;
  margin: 0 0 0 auto;
  /*align-items: center;*/
  width: 291px;
  min-height: 61px;
  height: auto !important;
  border: solid #000000 1px;
  background-color: #ffffff;
  border-radius: 56px;
  flex-wrap: wrap;
  /*text-align: center;*/
  word-wrap: break-word;
}
p.contents {
  padding: 10px;
  width: 291px;
  margin: 30px;
  word-break: break-all;
}
.wrapper {
  width: 750px;
}
</style>
