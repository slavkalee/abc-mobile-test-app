<template>
  <main>
    <img class="eye1 pos1" src="../assets/eye-1.svg" alt="eye" />
    <img class="eye2 pos2" src="../assets/eye.svg" alt="eye2" />

    <div class="header">
      <div class="container-sm d-flex align-center content-center">
        <slot name="subtitle" />
      </div>
    </div>

    <div class="container-sm">
      <div class="body">
        <slot name="content" />
      </div>
    </div>
    <div class="footer">
      <slot name="question-number" />
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  background: #202424;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}
.header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 74px;
  height: 190px;
  position: relative;
}
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer {
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  text-align: center;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.6);
}
.pos1 {
  position: absolute;
  top: 5%;
  right: 17%;
}
.pos2 {
  position: absolute;
  bottom: 20%;
  left: 15%;
}

@media screen and (max-width: 414px) {
  .pos1 {
    top: 10%;
    right: -5%;
  }
  .pos2 {
    bottom: 8%;
    left: -1%;
  }
  .header {
    margin-bottom: 30px;
    height: 145px;
  }
  .footer {
    bottom: 20px;
  }
}
@media screen and (max-width: 320px) {
  .pos1 {
    top: 7%;
    right: -5%;
  }
  .pos2 {
    bottom: 8%;
    left: -1%;
  }
  .header {
    margin-bottom: 20px;
    height: 105px;
  }
  .footer {
    bottom: 20px;
  }
}
</style>