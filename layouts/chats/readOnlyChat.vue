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
  height: auto !important;
  border: solid #000000 1px;
  flex-wrap: wrap;
  word-wrap: break-word;
}
.chat_box2 {
  display: flex;
  align-items: center;
  margin: 0 0 0 auto;
  width: 291px;
  min-height: 61px;
  height: auto !important;
  border: solid #000000 1px;
  background-color: #ffffff;
  flex-wrap: wrap;
  word-wrap: break-word;
}
p.contents {
  word-break: break-all;
  color: #0a2e41;
  font-size: 20px;
  font-weight: 500;
}

@media screen and (min-width: 1024px) {
  .chat_box {
    width: 316px;
    min-height: 111px;
    border-radius: 56px;
    margin-top: 60px;
    margin-bottom: 60px;
  }
  .chat_box2 {
    width: 316px;
    min-height: 111px;
    border-radius: 56px;
  }
  p.contents {
    padding: 10px;
    margin: 20px;
  }
}

@media screen and (min-width: 767px) and (max-width: 1024px) {
  .chat_box {
    width: 152.87px;
    min-height: 53.7px;
    border-radius: 50px;
    margin-top: 22.27px;
    margin-bottom: 22.27px;
  }
  .chat_box2 {
    width: 152.87px;
    min-height: 53.7px;
    border-radius: 50px;
  }
  p.contents {
    padding: 10px;
    margin: 20px;
  }
}

@media screen and (max-width: 767px) {
  .chat_box {
    width: 103.8px;
    min-height: 26.63px;
    border-radius: 26.63px;
    margin-top: 11.27px;
    margin-bottom: 11.27px;
  }
  .chat_box2 {
    width: 103.8px;
    min-height: 26.63px;
    border-radius: 26.63px;
  }
  p.contents {
    margin: 10px;
  }
}
</style>
