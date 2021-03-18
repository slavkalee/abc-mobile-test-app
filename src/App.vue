<template>
  <router-view />
</template>

<style>
#app {
  font-family: "Roboto", "Bad Script";
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
.container {
  width: 1440px;
  margin: 0 auto;
  position: relative;
}
.container-sm {
  width: 360px;
  margin: 0 auto;
  height: 100%;
  z-index: 2;
}
.overlay {
  width: 100%;
  min-height: 100vh;
  background: #202424;
  position: relative;
  overflow-x: hidden;
}
h1 {
  margin: 0;
}
a {
  text-decoration: none;
  color: #fff;
}

.eye1 {
  width: 296px;
  height: 156px;
}
.eye2 {
  width: 164px;
  height: 164px;
}
.btn-container {
  z-index: 2;
  margin-top: 34px;
}
.question__title {
  font-size: 25px;
  text-transform: uppercase;
  color: #f6c866;
  margin-bottom: 12px;
  font-weight: normal;
  text-align: center;
  line-height: 40px;
}

.question__subtitle {
  font-family: "Bad Script";
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  opacity: 0.6;
}
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.d-flex {
  display: flex;
}
.align-center {
  align-items: center;
}
.content-center {
  justify-content: center;
}
.direction-col {
  flex-direction: column;
}

footer {
  font-size: 12px;
  text-align: center;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #9d9d9d;
  margin: 140px 0 0 0;
}

@media screen and (max-width: 1440px) {
  .container {
    width: 100%;
    margin: 0 auto;
  }
}

@media screen and (max-width: 414px) {
  .eye1 {
    width: 94px;
    height: 72px;
  }
  .eye2 {
    width: 75px;
    height: 75px;
  }
  .question__title {
    font-size: 21px;
    line-height: 30px;
  }
  .question__subtitle {
    font-family: "Bad Script";
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: #ffffff;
    opacity: 0.6;
  }
  .btn-container {
    margin-top: 25px;
  }
  .container-sm {
    width: 285px;
  }
}
@media screen and (max-width: 320px) {
  .eye1 {
    width: 94px;
    height: 72px;
  }
  .eye2 {
    width: 75px;
    height: 75px;
  }
  .question__title {
    font-size: 17px;
    line-height: 30px;
    margin-bottom: 0;
  }
  .question__subtitle {
    font-size: 16px;
    line-height: 21px;
  }
  .btn-container {
    margin-top: 25px;
  }
  .container-sm {
    width: 285px;
  }
  footer {
    font-size: 8px;
    margin: 30px 0 0;
  }
}
</style>
