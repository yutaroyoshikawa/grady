<template>
  <div
    class="wrapper"
    v-bind:class="{
      'wrapper-active': isOpen
    }"
  >
    <div class="closer" @click="close">
      <font-awesome-icon icon="times-circle" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import * as drawer from '~/store/drawer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTimesCircle)
const Drawer = namespace(drawer.name)

@Component({
  components: {
    'font-awesome-icon': FontAwesomeIcon
  }
})
export default class extends Vue {
  @Drawer.Getter('isOpen')
  private isOpen!: boolean

  @Drawer.Action('close')
  private close!: any
}
</script>

<style>
.wrapper {
  width: 500px;
  height: 100vh;
  background: rgb(13, 13, 54);
  position: fixed;
  top: 0;
  right: -100%;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.2);
  transition: all 600ms ease;
}

.wrapper-active {
  right: 0;
}

.closer {
  color: #fff;
  font-size: 50px;
  width: 50px;
  height: 50px;
  padding: 5px 0 0 10px;
  cursor: pointer;
}
</style>
