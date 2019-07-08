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
  border: solid #000000 1px;
  background-color: #ffffff;
  flex-wrap: wrap;
  word-wrap: break-word;

  .contents {
    word-break: break-all;
  }
}

@media screen and (min-width: 1024px) {
  .chat-box {
    width: 291px;
    min-height: 61px;
    border: solid #000000 1px;
    border-radius: 56px;

    .contents {
      padding: 10px;
      width: 291px;
      margin: 30px;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .chat-box {
    width: 153px;
    min-height: 54px;
    border: solid #000000 1px;
    border-radius: 56px;

    .contents {
      padding: 1px;
      width: 153px;
      margin: 18px;
    }
  }
}

@media screen and (max-width: 767px) {
  .chat-box {
    width: 104px;
    min-height: 26px;
    border: solid #000000 1px;
    border-radius: 56px;

    .contents {
      padding: 1px;
      width: 104px;
      margin: 1px;
    }
  }
}
</style>
