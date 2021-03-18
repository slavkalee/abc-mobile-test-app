<template>
  <main>
    <section class="intro">
      <div class="bg-container">
        <img class="bg" src="../assets/blik.png" alt="background" />
      </div>
      <div class="container">
        <header>
          <h1 class="title">Лучшие астрологи и экстрасенсы Румынии</h1>
        </header>
        <div class="content">
          <div class="content_subtitle">Точность прогноза: 97%</div>
          <div class="content_emblem">
            <img src="../assets/icon1.svg" alt="" />
            <div class="over-img">
              <img src="../assets/woman1.png" alt="" />
            </div>
          </div>
          <div class="container-sm">
            <div class="content_question">
              Вас беспокоит вопрос о том,
              <span>
                когда Вы покинете этот Мир и при каких обстоятельствах?
              </span>
            </div>
          </div>
          <div class="btn-container">
            <button class="btn">Да</button>
          </div>
          <div class="btn-container">
            <button class="btn">Нет</button>
          </div>
          <div class="content_footer">Онлайн предсказание</div>
        </div>
      </div>
    </section>
    <section id="second">
      <div class="container">
        <div class="content">
          <div class="info-box fadeIn">
            <div class="info-box__text">
              Позвольте нам раскрыть эту волнующую тайну и<br />
              <span>с точностью определить дату и время вашей смерти,</span
              ><br />
              а также предшествующую этому событию причину
            </div>
            <div class="info-box__img-container">
              <img src="../assets/hands.png" alt="" />
            </div>
          </div>
          <div class="img-block">
            <div class="img-block__text">
              Многие не верят<br />
              предсказаниям и мы решили<br />
              доказать каждому,<br />
              <span>
                что прогноз может<br />
                изменить жизнь<br />
                любого человека!
              </span>
            </div>
            <div class="overlay-bg"></div>
          </div>
        </div>
      </div>
    </section>
    <section id="question">
      <div class="container">
        <div class="question">
          <h1 class="question__title">{{ question.title }}</h1>

          <div
            class="btn-container"
            v-for="choice in question.choices"
            :key="choice.id"
          >
            <Button
              class="btn"
              :id="choice.id"
              :title="choice.name"
              :method="onSelect"
            />
          </div>

          <div class="question__number">Вопрос 1-5</div>
          <div class="rune-img__container">
            <img src="../assets/rune1.svg" alt="Rune" />
          </div>
          <div class="question__text">
            Вы, конечно, умрете.<br />
            И все, с кем вы знакомы,<br />
            тоже однажды умрут.
          </div>
          <div class="rune-img__container">
            <img src="../assets/rune2.svg" alt="Rune" />
          </div>
        </div>
        <img class="eye1 pos1" src="../assets/eye-1.svg" alt="eye" />
        <img class="eye2 pos2" src="../assets/eye.svg" alt="eye2" />
      </div>
    </section>
    <footer @mouseover="showText">
      TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU<br />
      DE DIVERTISMENT. PRIN FOLOSIREA LUI<br />
      <span v-if="textVisible">DECLARATI CA AVETI 18 ANI IMPLINITI,</span>
    </footer>
  </main>
</template>

<script>
import Button from "@/components/Button";

import { useTextShow } from "@/composition/show";
import { useSelect } from "@/composition/select";

export default {
  name: "Home",
  components: { Button },
  setup() {
    return {
      ...useSelect(1, 2),
      ...useTextShow(),
    };
  },
};
</script>

<style scoped>
main {
  background: #202424;
  position: relative;
  overflow: hidden;
}

.bg-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 75%;
  z-index: 1;
}
.bg-container:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 1;
  background: linear-gradient(to top, #202424, transparent);
}

.bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.intro {
  position: relative;
}

header {
  padding: 30px 0 19.5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.title {
  text-align: center;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.6);
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content_subtitle {
  font-size: 25px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 12px;
}
.content_emblem {
  position: relative;
  width: 344px;
  height: 344px;
  margin-top: 65px;
}
.content_emblem img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.over-img {
  width: 210px;
  height: 210px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.over-img img {
  width: 100%;
  height: 100%;
}
.content_question {
  font-size: 25px;
  color: #f6c866;
  text-align: center;
  line-height: 35px;
  margin: 23px 0 40px;
}
.content_question span {
  text-transform: uppercase;
}
.content_footer {
  margin-top: 35px;
  font-size: 16px;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.6);
}
#second {
  padding: 120px 0 0 0;
}
.info-box {
  padding: 128px 45.68px 84px 32px;
  border: 1px solid #fff;
  width: 442.68px;
  position: relative;
}
.info-box__text {
  font-size: 25px;
  line-height: 35px;
  text-align: center;
  color: #ffffff;
}
.info-box__text span {
  color: #f6c866;
}
.info-box__img-container {
  position: absolute;
  top: -13%;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 120px;
  z-index: 1000;
}
.info-box__img-container img {
  width: 100%;
  height: 100%;
}
.img-block {
  position: relative;
  background: url("../assets/image.png") no-repeat;
  background-size: cover;
  background-position-y: 57%;
  width: 100%;
  height: 606px;
  margin: 69px 0 0 0;
  filter: contrast(85%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-block__text {
  font-size: 25px;
  line-height: 35px;
  color: #fff;
  text-align: center;
}
.img-block__text span {
  color: #f6c866;
}
.overlay-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  z-index: -1;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fadeIn {
  animation: fadeIn 2s forwards;
  transition: opacity 2s;
}
#question {
  padding: 133px 0 153px;
}
.question {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.question__number {
  font-size: 16px;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 35px;
}
.rune-img__container {
  width: 56px;
  height: 17px;
  margin-top: 105px;
}
.rune-img__container img {
  width: 100%;
  height: 100%;
}
.question__text {
  font-family: "Bad Script";
  font-size: 25px;
  line-height: 35px;
  color: #ffffff;
  margin-top: 80px;
  text-align: center;
}
.pos1 {
  position: absolute;
  top: 350px;
  right: -100px;
}
.pos2 {
  position: absolute;
  left: 0;
  bottom: -100px;
}

@media screen and (max-width: 414px) {
  .bg-container {
    height: 545px;
    width: 125%;
  }
  .bg-container:before {
    content: "";
    position: absolute;
    bottom: 120px;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 1;
    background: linear-gradient(to top, #202424, transparent);
  }
  .bg {
    object-fit: scale-down;
  }
  header {
    padding: 14px 0;
  }
  .title {
    font-size: 15px;
  }
  .content_subtitle {
    font-size: 28px;
  }
  .content_emblem {
    width: 280px;
    height: 280px;
    margin-top: 35px;
  }
  .over-img {
    width: 165px;
    height: 165px;
  }
  .content_question {
    font-size: 22px;
    margin: 15px 0 0;
  }
  .info-box {
    width: 340px;
    padding: 60px 30px 40px;
  }
  .info-box__img-container {
    width: 80px;
    height: 80px;
    top: -41px;
  }
  .info-box__text {
    font-size: 18px;
  }
  .img-block {
    height: 460px;
    background-position-x: 44%;
  }
  .img-block__text {
    padding: 0 85px;
    font-size: 20px;
  }
  #second {
    padding: 80px 0 0 0;
  }
  #question {
    padding: 60px 0 153px;
  }
  .question__number {
    font-size: 14px;
  }
}
@media screen and (max-width: 320px) {
  .bg-container {
    height: 500px;
    width: 125%;
  }
  .bg-container:before {
    content: "";
    position: absolute;
    bottom: 120px;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 1;
    background: linear-gradient(to top, #202424, transparent);
  }
  .bg {
    object-fit: scale-down;
  }
  header {
    padding: 14px 0;
  }
  .title {
    font-size: 12px;
  }
  .content_subtitle {
    font-size: 24px;
  }
  .content_emblem {
    width: 260px;
    height: 260px;
    margin-top: 35px;
  }
  .over-img {
    width: 152px;
    height: 152px;
  }
  .content_question {
    font-size: 17px;
    margin: 15px 0 0;
  }
  .info-box {
    width: 275px;
    padding: 55px 20px 30px;
  }
  .info-box__img-container {
    width: 80px;
    height: 80px;
    top: -41px;
  }
  .info-box__text {
    font-size: 16px;
  }
  .img-block {
    height: 365px;
    background-position-x: 44%;
  }
  .img-block__text {
    padding: 0 35px;
    font-size: 17px;
  }
  #second {
    padding: 80px 0 0 0;
  }
  #question {
    padding: 60px 0 153px;
  }
  .question__number {
    font-size: 14px;
  }
  .rune-img__container {
    margin-top: 65px;
  }
  .question__text {
    font-size: 21px;
    line-height: 30px;
    margin-top: 55px;
  }
}
</style>
