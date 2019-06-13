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
      :is-active="active ==='スタッフ'"
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
  data: function() {
    return {
      active: '概要'
    }
  },
  components: {
    'tab-button': TabButton,
  },
  methods: {
    clickOverview: function() {
      this.active = '概要'
    },
    clickPerformer: function() {
      this.active = '出演者'
    },
    clickStaff: function() {
      this.active = 'スタッフ'
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

