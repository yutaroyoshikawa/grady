<template>
  <form class="wrapper">
    <input type="search" class="search_box" />
    <div class="search_button">
      <font-awesome-icon icon="search" size="3x" style="color: white" />
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch)

export default Vue.extend({
  components: {
    'font-awesome-icon': FontAwesomeIcon
  }
})
</script>

<style scoped>
input {
  appearance: none;
  resize: none;
  padding-right: 90px;
  padding-left: 20px;
  border: 0;
  outline: none;
  background: transparent;
  font-size: xx-large;
  color: white;
}
.wrapper {
  display: flex;
  align-items: center;
  position: relative;
  width: 722px;
}
.search_box {
  width: 722px;
  height: 66px;
  border-radius: 66px;
  border: solid #ffffff;
}
.search_button {
  position: absolute;
  right: 35px;
}
</style>
