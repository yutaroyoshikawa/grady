<template>
  <div class="warp">
    <div>
      <div class="movieDetailsTab">
        <tab-button
          text="チャット"
          :is-active="active === 'チャット'"
          :on-click="clickOverview"
        />
        <tab-button
          text="QR"
          :is-active="active === 'QR'"
          :on-click="clickPerformer"
        />
        <tab-button
          text="予約情報"
          :is-active="active === '予約情報'"
          :on-click="clickStaff"
        />
      </div>
      <hr />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TabButton from '../../components/buttons/tabButton.vue'
export default Vue.extend({
  components: {
    'tab-button': TabButton
  },
  props: {
    handleChangeSelected: Function
  },
  data: function() {
    return {
      active: 'チャット'
    }
  },
  methods: {
    clickOverview: function() {
      this.active = 'チャット'
      this.handleChangeSelected('チャット')
    },
    clickPerformer: function() {
      this.active = 'QR'
      this.handleChangeSelected('QR')
    },
    clickStaff: function() {
      this.active = '予約情報'
      this.handleChangeSelected('予約情報')
    }
  }
})
</script>
<style scoped lang="scss">
.warp {
  width: 885px;
  height: 60px;

  .movieDetailsTab {
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
