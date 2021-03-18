<template>
  <div class="overlay">
    <div class="container-md">
      <div class="quote">
        <div class="quote__text">
          Спасибо за Ваши ответы!<br />
          <strong>
            Мы подготовили для Вас персональную аудио запись с Вашим прогнозом.
          </strong>
        </div>
      </div>
      <div class="some-text">
        Вы можете узнать, как повлиять на события, которые ожидают вас в
        ближайшем будущем.
      </div>
      <div class="box">
        <span
          >Первое значимое событие может произойти уже {{ tomorrowDate }}</span
        >, Вам надо быть готовым, что бы последствия не оказались необратимыми.
      </div>
      <div class="some-text">
        Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона.
        Прослушайте важную информацию!
      </div>
      <div class="btn-container">
        <Button
          class="btn btn-success"
          title="Позвонить и прослушать"
          :method="onClick"
        />
      </div>
    </div>
    <footer @mouseover="showText">
      TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU<br />
      DE DIVERTISMENT. PRIN FOLOSIREA LUI<br />
      <span v-if="textVisible">DECLARATI CA AVETI 18 ANI IMPLINITI,</span>
    </footer>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import moment from "moment";

import Button from "@/components/Button";
import { useTextShow } from "@/composition/show";
import { computed } from "vue";

export default {
  components: {
    Button,
  },
  setup() {
    const router = useRouter();

    const onClick = () => router.push("/data");

    const tomorrowDate = computed(() => {
      const today = new Date();
      const tomorrow = today.setDate(today.getDate() + 1);
      const date = moment(tomorrow).format("DD.MM.YYYY");

      return date;
    });

    return {
      tomorrowDate,
      onClick,
      ...useTextShow(),
    };
  },
};
</script>

<style>
.container-md {
  width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 0;
  position: relative;
}
.quote {
  position: relative;
  background: #fff;
  height: 150px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  animation: 2s fadeIn forwards;
}

.quote::before {
  content: "";
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 14px solid #fff;
  position: absolute;
  bottom: -14px;
  right: 30px;
}

.quote__text {
  text-align: center;
  font-size: 18px;
  line-height: 30px;
  color: #202024;
}
.some-text {
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  margin-top: 35px;
}
.box {
  border: 1px solid #fff;
  padding: 50px 40px 30px;
  text-align: center;
  color: #f6c866;
  font-size: 18px;
  line-height: 35px;
  margin-top: 30px;
}
.box span {
  text-transform: uppercase;
  font-weight: bold;
}
@media screen and (max-width: 320px) {
  .container-md {
    width: 270px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 0;
  }
  .quote {
    padding: 10px;
  }
  .some-text {
    font-size: 16px;
  }
  .box {
    padding: 25px 20px 20px;
    font-size: 15px;
  }
}
</style>