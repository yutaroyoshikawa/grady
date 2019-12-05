<template>
  <div>
    <div class="wrap">
      <go-to-watch-drawer />
      <toast-massage
        massage="メールを送信中"
        isActive="isOpen"
        @click="onClick"
      />
    </div>
    <button @click="onClick">Click Me</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GoToWatchDrawer from '../layouts/drawers/goToWatchDrawer.vue'
import ToastMassage from '../components/texts/toastMessage.vue'

export default Vue.extend({
  components: {
    'go-to-watch-drawer': GoToWatchDrawer,
    'toast-massage': ToastMassage
  },
  data: function() {
    return {
      isOpen: false
    }
  },
  methods: {
    onClick: function() {
      if (this.isOpen === false) {
        this.isOpen = true
        return this.isOpen
      } else {
        this.isOpen = false
        return this.isOpen
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #999999;
  display: flex;
  justify-content: space-between;
}
</style>
