<template>
  <div>
    <div class="wrap">
      <div class="logo-wrap">
        <!-- <nuxt-link to="/">
          <div>
            <logo />
          </div>
        </nuxt-link>-->
      </div>
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import Logo from '~/components/marks/logo.vue'

export default Vue.extend({
  // components: {
  //   logo: Logo
  // }
})
</script>

<style lang="scss" scoped>
.wrap {
  .logo-wrap {
    width: 76px;
    height: 76px;
    position: absolute;
    top: 60px;
    left: 100px;
    z-index: 100;
  }
}
</style>
