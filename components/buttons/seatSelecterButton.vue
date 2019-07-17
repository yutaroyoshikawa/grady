<template>
  <div>
    <div class="wrap">
      <button @click="onClick">
        {{ value ? value : '座席を選択' }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: String,
    handleClick: Function,
    selectedSeatIndex: Number
  },
  methods: {
    onClick: function() {
      this.handleClick(this.selectedSeatIndex)
    }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  button {
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
    display: block;
    border: 3px solid #fff;
    border-radius: 44px;
    color: #fff;
    background-color: transparent;
    transition: all 300ms ease;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
}

@media screen and (min-width: 1024px) {
  .wrap {
    button {
      height: 138px;
      width: 138px;
      font-size: 24px;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    button {
      height: 58px;
      width: 58px;
      font-size: 25px;
    }
  }
}

@media screen and (max-width: 767px) {
  .wrap {
    button {
      height: 35px;
      width: 35px;
      font-size: 13px;
    }
  }
}
</style>
