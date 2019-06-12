<template>
  <div>
    <div class="wrap">
      <select>
        <option value="default" disabled selected>上映時間を選択</option>
        <option
          v-for="time in times"
          :key="time.start"
          :value="time.start | timeFormatter"
        >
          {{ time.start | timeFormatter }} - {{ time.finish | timeFormatter }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import moment from 'moment'

export default Vue.extend({
  props: {
    times: Array
  },
  filters: {
    timeFormatter: function(time: Date) {
      return moment(time).format('HH:mm')
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
