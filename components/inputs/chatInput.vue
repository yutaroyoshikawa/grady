<template>
  <form>
    <div class="input_wrapper">
      <input
        type="text"
        class="text"
        placeholder="コメントを入力"
        v-model="inputData"
      />
      <button
        type="submit"
        class="btn"
        :disabled="isDisable"
        @click.prevent="submit"
      >
        <font-awesome-icon icon="paper-plane" size="3x" />
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPaperPlane)

export default Vue.extend({
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  props: {
    handleChange: Function,
    value: String
  },
  data: function() {
    return {
      isDisable: true,
      inputData: this.value
    }
  },
  watch: {
    inputData: function(val: string) {
      if (val.length > 1) {
        this.isDisable = false
      } else {
        this.isDisable = true
      }
    }
  },
  mounted: function() {
    if (this.inputData.length > 1) {
      this.isDisable = false
    } else {
      this.isDisable = true
    }
  },
  methods: {
    submit: function() {
      this.$emit('submitData', this.inputData)
      this.inputData = ''
    }
  }
})
</script>

<style lang="scss" scoped>
/*1/2まだしてない*/

/*wrapper*/
.input_wrapper {
  display: flex;
  background-color: #ffffff;
  height: 77px;
  width: 573px;
  border-radius: 77px;
  align-items: center;
}

/*input mail*/
input {
  padding: 0;
  border: none;
  border-radius: 0;
  outline: none;
  background: none;
}
.mail {
  width: 495px;
  height: 72px;
  border-top-left-radius: 72px;
  border-bottom-left-radius: 72px;
  background-color: #0d0d36;
  margin-left: 2px;
  padding-left: 26px;
  font-size: 36px;
  line-height: 60px;
  color: #ffffff;
  outline: 0;
}

::placeholder {
  color: #ffffff;
  font-family: 'TsukuBRdGothic-Regular', sans-serif;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}
/*submit*/
.btn {
  display: flex;
  justify-content: center;
  width: 74px;
  height: 72px;
  border-bottom-right-radius: 72px;
  border-top-right-radius: 72px;
  margin-top: 2px;
  outline: 0;
  padding-right: 13px;
}
i {
  margin-right: 5px;
}
</style>
