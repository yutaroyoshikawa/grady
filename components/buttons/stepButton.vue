<template>
  <div>
    <div
      class="wrap"
      @click="hundleClick"
    >
      <button
        :class="{
          active: isActive,
          inactive: !isActive
        }"
      >{{ stepNumber }}</button>
      <label>{{ names[stepNumber - 1] }}</label>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    isActive: Boolean,
    stepNumber: Number,
    hundleClick: Function
  },
  data: function() {
    return {
      names: [
        '情報',
        '座席',
        '決済',
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: center;
  flex-direction: column;

  button {
    border-radius: 50%;
    transition: all 200ms ease;
  }

  label {
    display: block;
    cursor: pointer;
  }
}

.active {
  background-color: #fff;
  color: #0d0d36;

  &:hover {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
  }
}

.inactive {
  color: #fff;
  border: solid 1px #fff;

  &:hover {
    background-color: #0d0d36;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
  }
}

@media screen and (min-width: 1024px) {
  .wrap {
    width: 58px;
    height: 100px;
  }

  button {
    width: 56px;
    height: 56px;
    font-size: 35px;
  }

  label {
    font-size: 29px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    width: 36px;
    height: 58px;
  }

  button {
    width: 32px;
    height: 32px;
    font-size: 21px;
  }

  label {
    font-size: 18px;
  }
}

@media screen and (max-width: 767px) {
  .wrap {
    width: 36px;
    height: 59px;
  }

  button {
    width: 32px;
    height: 32px;
    font-size: 21px;
  }

  label {
    font-size: 18px;
  }
}
</style>

