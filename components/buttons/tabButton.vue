<template>
  <body>
    <button class="tab">アクション</button>
  </body>
</template>

<script>
export default {
  name: 'TabButton'
}
</script>

<style scoped>
body {
  background-color: #0d0d36;
}
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}
.tab {
  width: 114px;
  height: 29px;
  border: solid #ffffff 1px;
  color: #ffffff;
  border-radius: 29px;
}
</style>
