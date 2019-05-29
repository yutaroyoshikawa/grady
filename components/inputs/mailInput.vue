<template>
  <body>
    <div class="input_wrapper">
      <input type="email" class="mail" placeholder="メールアドレス" />
      <button class="btn"><i class="fas fa-paper-plane fa-3x"></i></button>
    </div>
  </body>
</template>

<script lang="scss">
export default {
  name: 'MailInput'
}
</script>

<style lang="scss">
/*1/2まだしてない*/

* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #0d0d36;
}

/*wrapper*/
.input_wrapper {
  display: flex;
  background-color: #ffffff;
  height: 77px;
  width: 573px;
  border-radius: 77px;
}

/*input mail*/
.mail {
  width: 495px;
  height: 72px;
  border-top-left-radius: 72px;
  border-bottom-left-radius: 72px;
  background-color: #0d0d36;
  margin-top: 3px;
  margin-left: 1px;
  padding-left: 26px;
  font-size: 36px;
  line-height: 60px;
  color: #ffffff;
}

::placeholder {
  color: #ffffff;
  font-family: 'TsukuBRdGothic-Regular', sans-serif;
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
}
i {
  margin-right: 5px;
}
</style>
