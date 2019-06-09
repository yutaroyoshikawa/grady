<template>
  <div>
    <div class="wrap">
      <div>
        <label
          :class="{
          active: content,
          inactive: !content
        }"
        >{{ number }}</label>
      </div>
      <p v-if="content" class="active-content">{{ content }}</p>
      <p v-if="!content" class="inactive-content">Comming soon...</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    content: String,
    number: Number
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  align-items: center;

  label {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0d0d36;
  }

  p {
    display: inline-block;
    word-wrap: break-word;
  }

  .active {
    background-color: #fff;
  }

  .inactive {
    background-color: #72729d;
  }

  .active-content {
    color: #fff;
  }

  .inactive-content {
    color: #72729d;
  }
}

@media screen and (min-width: 1024px) {
  .wrap {
    label {
      width: 68px;
      height: 68px;
      font-size: 44px;
    }

    p {
      font-size: 44px;
      width: 361px;
      margin: 0 0 0 48px;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    label {
      width: 58px;
      height: 58px;
      font-size: 37px;
    }

    p {
      font-size: 37px;
      width: 411px;
      margin: 0 0 0 37px;
    }
  }
}

@media screen and (max-width: 767px) {
  .wrap {
    label {
      width: 36px;
      height: 36px;
      font-size: 21px;
    }

    p {
      font-size: 21px;
      width: 238px;
      margin: 0 0 0 20px;
    }
  }
}
</style>
