<template>
  <div class="chat-box">
    <p class="contents">{{ content }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    content: String
  }
})
</script>

<style lang="scss" scoped>
.chat-box {
  display: flex;
  align-items: center;
  width: 291px;
  min-height: 61px;
  border: solid #000000 1px;
  background-color: #ffffff;
  border-radius: 56px;
  flex-wrap: wrap;
  word-wrap: break-word;

  .contents {
    padding: 10px;
    width: 291px;
    margin: 30px;
    word-break: break-all;
  }
}
</style>
