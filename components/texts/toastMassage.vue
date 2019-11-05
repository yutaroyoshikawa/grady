<template>
  <div class="wrap" :class="{ active: isActiveToast }">
    <div class="toast-massage">
      <p>{{ massage }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    massage: String,
    isActiveToast: Boolean
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  /* transition: all 300ms 0s ease; */
  /* transform: translateX(300px); */
  .toast-massage {
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 20px;
  }
  p {
    color: #000000;
    display: flex;
    justify-content: center;
  }
}
/* .active {
  transform: translateX(-300px);
} */
@media screen and (min-width: 1024px) {
  .toast-massage {
    width: 567px;
    height: 110px;
    p {
      font-size: 42px;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    .toast-massage {
      p {
        font-size: 37px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .wrap {
    .toast-massage {
      p {
        font-size: 21px;
      }
    }
  }
}
</style>
