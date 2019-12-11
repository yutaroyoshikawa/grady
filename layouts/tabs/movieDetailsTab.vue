<template>
  <div class="warp">
    <div>
      <div class="movieDetailsTab">
        <tab-button
          text="概要"
          :is-active="active === '概要'"
          :on-click="clickOverview"
        />
        <tab-button
          text="出演者"
          :is-active="active === '出演者'"
          :on-click="clickPerformer"
        />
        <tab-button
          text="スタッフ"
          :is-active="active === 'スタッフ'"
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
      active: '概要'
    }
  },
  methods: {
    clickOverview: function() {
      this.active = '概要'
      this.handleChangeSelected('概要')
    },
    clickPerformer: function() {
      this.active = '出演者'
      this.handleChangeSelected('出演者')
    },
    clickStaff: function() {
      this.active = 'スタッフ'
      this.handleChangeSelected('スタッフ')
    }
  }
})
</script>
<style scoped lang="scss">
.warp {
  .movieDetailsTab {
    display: flex;
    justify-content: space-evenly;
  }
}
@media screen and (min-width: 1024px) {
  .warp {
    width: 885px;
    height: 60px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .warp {
    width: 577.09px;
    height: 47.5px;
    font-size: 25px;
  }
}

@media screen and (max-width: 767px) {
  .warp {
    width: 275.77px;
    height: 39.04px;
    font-size: 18px;
  }
}
</style>
