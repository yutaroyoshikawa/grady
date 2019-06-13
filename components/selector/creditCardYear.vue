<template>
  <div>
    <div class="wrap">
      <select name="cardExpirationYear">
        <option value="default" disabled selected>年</option>
        <option v-for="year in years" :key="year" :value="year">
          {{ year.toString().substring(2) }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const now = new Date().getFullYear()

export default Vue.extend({
  data: function() {
    return {
      years: [
        now,
        now + 1,
        now + 2,
        now + 3,
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  border-bottom: solid 2px #fff;
  cursor: pointer;
  transition: all 200ms ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  select {
    background: transparent;
    color: #fff;
    border: none;
    outline: solid 1px rgba(0, 0, 0, 0);
    cursor: pointer;
  }
}

@media screen and (min-width: 1024px) {
  .wrap {
    width: 58px;
    height: 41.5px;

    select {
      font-size: 29px;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    width: 58px;
    height: 41.5px;

    select {
      font-size: 29px;
    }
  }
}

@media screen and (max-width: 767px) {
  .wrap {
    width: 34px;
    height: 24.9px;

    select {
      font-size: 17px;
    }
  }
}
</style>
