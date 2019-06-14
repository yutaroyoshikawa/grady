<template>
  <div class="chat_box">
    <p class="contents"></p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'readOnlyChat'
}
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
