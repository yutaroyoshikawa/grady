<template>
  <div class="chat_box">
    <div class="contents">hoeuheouhoueheouaheafafafaf</div>
    <div class="contents">hoeuheouhoueheoua</div>
    <div class="contents">hoeuheouhoueheouah</div>
    <div class="contents">hoeuheouhoueheouah</div>
    <div class="contents">hoeuheouhoueheouah</div>

    <div class="contents">hoeuheouhoueheouah</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ChatMessage'
}
</script>

<style scoped>
.chat_box {
  display: flex;
  align-items: center;
  width: 291px;
  min-height: 61px;
  border: solid #000000 1px;
  background-color: #ffffff;
  border-radius: 111px;
  flex-wrap: wrap;
}
.contents {
  text-align: center;
  padding: 10px;
  width: 291px;
  margin: 10px;
}
</style>
