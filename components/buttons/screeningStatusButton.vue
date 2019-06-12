<template>
  <div>
    <button
      class="wrap"
      v-bind:class="{
        active: isActive,
        inactive: !isActive
      }"
      @click="onClick"
    >
      {{ name }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    isActive: Boolean,
    name: String,
    onClick: Function
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  width: 133px;
  height: 35px;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease;
  font-size: 20px;
  color: #7B7A7A;
}

.active {
  background-color: #838383;
  color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);

  &:hover {
    background-color: #737373;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4);
  }
}

.inactive {
  &:hover {
    border: solid 1px rgba(0, 0, 0, 0.1);
  }
}

@media screen and (min-width: 1024px) {
  .wrap {
    width: 133px;
    height: 35px;
    border-radius: 13px;
    font-size: 20px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    width: 133px;
    height: 35px;
    border-radius: 13px;
    font-size: 20px;
  }
}

@media screen and (max-width: 767px) {
  .wrap {
    width: 91px;
    height: 24px;
    border-radius: 11px;
    font-size: 15px;
  }
}
</style>

