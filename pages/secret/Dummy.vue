<template>
  <div>
    <div class="wrap">
      <chat-message-input />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ChatMessageInput from '~/components/inputs/chatMessageInput'

export default Vue.extend({
  components: {
    'chat-message-input': ChatMessageInput
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #0a2e41;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
}
</style>
