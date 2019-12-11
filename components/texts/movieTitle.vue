<template>
  <div>
    <div class="wrap">
      <h1>{{ title | checkLength }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: String
  },
  filters: {
    checkLength: function(title: string) {
      if (title.length > 25) {
        const slicedTitle = title.slice(0, 25)
        return `${slicedTitle}...`
      } else {
        return title
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  h1 {
    color: #fff;
  }
}
@media screen and (min-width: 1024px) {
  .wrap {
    h1 {
      font-size: 40px;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    h1 {
      font-size: 26px;
    }
  }
}

@media screen and (max-width: 768px) {
  .wrap {
    h1 {
      font-size: 15px;
    }
  }
}
</style>
