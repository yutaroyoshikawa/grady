<template>
  <div>
    <div class="wrap">
      <select v-model="genre" @change="handleChange" :disabled="isReadOnly">
        <option
          v-for="genre in genres"
          :key="genre.value"
          :value="genre.value"
          >{{ genre.text }}</option
        >
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    genre: String,
    handleChange: Function,
    isReadOnly: {
      value: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      genres: [
        {
          text: 'アクション',
          value: 'Action'
        },
        {
          text: 'サスペンス',
          value: 'Suspense'
        },
        {
          text: 'SF',
          value: 'Science Fiction'
        },
        {
          text: 'ホラー',
          value: 'Horror'
        },
        {
          text: 'コメディ',
          value: 'Comedy'
        },
        {
          text: 'ロマンス',
          value: 'Romance'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px 0;

  &::after {
    content: '';
    border: 0;
    border-bottom: solid 2px #fff;
    border-right: solid 2px #fff;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 12%;
    right: 5%;
  }

  &::before {
    content: '';
    width: 76px;
    height: 3px;
    background: #fff;
    border-radius: 3px;
  }

  select {
    padding-right: 70px;
    margin-left: 10px;
    outline: rgba(0, 0, 0, 0);
    border: none;
    width: 100%;
    background: rgba(0, 0, 0, 0);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    transition: all 200ms ease;
    color: #fff;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
}

@media screen and (min-width: 1024px) {
  .wrap {
    width: 520px;
    height: 70px;

    &::after {
      width: 40px;
      height: 40px;
    }

    select {
      font-size: 70px;
    }
  }
}

@media screen and (min-width: 767px) and (max-width: 1024px) {
  .wrap {
    width: 401px;
    height: 41px;

    &::after {
      width: 25px;
      height: 25px;
    }

    select {
      font-size: 50px;
    }
  }
}

@media screen and (max-width: 767px) {
  .wrap {
    width: 249px;
    height: 24px;

    &::after {
      width: 18px;
      height: 18px;
    }

    select {
      font-size: 24px;
    }
  }
}
</style>
