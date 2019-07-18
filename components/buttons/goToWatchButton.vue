<template>
  <div>
    <button class="entire" @click="handleClick">
      観に行く
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    handleClick: Function
  }
})
</script>

<style lang="scss" scoped>
.entire {
  border: solid 5px #fff;
  cursor: pointer;
  color: #fff;
  transition: all 500ms ease;
  background: transparent;
}

.entire:hover {
  background: #000;
}

.entire:focus {
  outline: rgba($color: #000000, $alpha: 0);
}

@media screen and (min-width: 1024px) {
  .entire {
    width: 415px;
    height: 86px;
    font-size: 40px;
    border-radius: 86px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .entire {
    width: 296px;
    height: 61px;
    font-size: 31px;
    border-radius: 61px;
  }
}

@media screen and (max-width: 767px) {
  .entire {
    width: 218px;
    height: 45px;
    font-size: 22px;
    border-radius: 45px;
  }
}
</style>
