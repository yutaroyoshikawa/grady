<template>
  <div>
    <div class="wrap">
      <div class="inner">
        <screening-status-button
          name="全て"
          :is-active="activeButton === '全て'"
          :on-click="clickAll"
          class="button"
        />
        <screening-status-button
          name="上映中"
          :is-active="activeButton === '上映中'"
          :on-click="clickScreening"
          class="button"
        />
        <screening-status-button
          name="上映済み"
          :is-active="activeButton === '上映済み'"
          :on-click="clickScreened"
          class="button"
        />
        <screening-status-button
          name="シークレット"
          :is-active="activeButton === 'シークレット'"
          :on-click="clickSecret"
          class="button"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ScreeningStatusButton from '../components/buttons/screeningStatusButton.vue'

export default Vue.extend({
  props: {
    handleChange: Function
  },
  data: function() {
    return {
      activeButton: '全て'
    }
  },
  components: {
    'screening-status-button': ScreeningStatusButton
  },
  methods: {
    clickAll: function() {
      this.activeButton = '全て'
      this.handleChange('all')
    },
    clickScreening: function() {
      this.activeButton = '上映中'
      this.handleChange('screening')
    },
    clickScreened: function() {
      this.activeButton = '上映済み'
      this.handleChange('screened')
    },
    clickSecret: function() {
      this.activeButton = 'シークレット'
      this.handleChange('secret')
    }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  background: #fff;

  .inner {
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;

    &::-webkit-scrollbar {
      display: none;
    }

    .button {
      margin: 0 10px;
    }
  }
}

@media screen and (min-width: 1024px) {
  .wrap {
    width: 539px;
    height: 46px;
    border-radius: 46px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    width: 409px;
    height: 46px;
    border-radius: 46px;
  }
}

@media screen and (max-width: 767px) {
  .wrap {
    width: 258px;
    height: 42px;
    border-radius: 42px;
  }
}
</style>
