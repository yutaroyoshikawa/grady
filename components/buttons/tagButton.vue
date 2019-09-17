<template>
  <div>
    <button
      class="wrap"
      :class="{
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
    name: String,
    value: String,
    handleActive: Function,
    handleInactive: Function
  },
  data: function() {
    return {
      isActive: false
    }
  },
  methods: {
    onClick: function() {
      this.isActive = !this.isActive
      this.isActive
        ? this.handleActive(this.value)
        : this.handleInactive(this.value)
    }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease;
  font-size: 20px;
  color: #7b7a7a;
  background: transparent;
}

.active {
  background-color: #fff;
  color: #555;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #eee;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
  }
}

.inactive {
  color: #fff;
  border: solid #fff 1px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
}

@media screen and (min-width: 1024px) {
  .wrap {
    width: 173px;
    height: 35px;
    border-radius: 35px;
    font-size: 20px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    width: 173px;
    height: 35px;
    border-radius: 35px;
    font-size: 20px;
  }
}

@media screen and (max-width: 767px) {
  .wrap {
    width: 91px;
    height: 24px;
    border-radius: 24px;
    font-size: 15px;
  }
}
</style>
