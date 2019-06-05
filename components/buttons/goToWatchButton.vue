<template>
  <div>
    <button class="entire">
      観に行く
    </button>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class extends Vue {}
</script>

<style lang="scss" scoped>
.entire {
  border: solid 5px #fff;
  cursor: pointer;
  color: #fff;
  transition: all 500ms ease;
}

.entire:hover {
  background: #000;
}

.entire:focus {
  outline: rgba($color: #000000, $alpha: 0)
}

@media screen and (min-width: 1024px) {
  .entire {
    width: 415px;
    height: 86px;
    font-size: 40px;
    border-radius: 86px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .entire {
    width: 296px;
    height: 61px;
    font-size: 31px;
    border-radius: 61px;
  }
}

@media screen and (min-width: 300px) {
  .entire {
    width: 218px;
    height: 45px;
    font-size: 22px;
    border-radius: 45px;
  }
}
</style>
