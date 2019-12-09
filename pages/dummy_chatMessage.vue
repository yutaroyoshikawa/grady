<template>
  <chat-message />
</template>
<script lang="ts">
import Vue from 'vue'
import ChatMessage from '../components/texts/chatMessage.vue'

export default Vue.extend({
  components: {
    'chat-message': ChatMessage
  }
})
</script>

<style lang="scss" scoped></style>
