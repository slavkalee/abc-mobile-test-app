<template>
  <div class="overlay">
    <div class="container-sm">
      <div class="info__row">
        <div class="info__title">Полное имя:</div>
        <div class="info__value">{{ state.data.name }}</div>
      </div>
      <div class="info__row">
        <div class="info__title">День рождения:</div>
        <div class="info__value">{{ state.data.birth_year }}</div>
      </div>
      <div class="info__row">
        <div class="info__title">Родина:</div>
        <div class="info__value">{{ state.home.name }}</div>
      </div>
      <div class="info__row">
        <div class="info__title">Масса:</div>
        <div class="info__value">{{ state.data.mass }}</div>
      </div>
      <div class="info__row">
        <div class="info__title">Рост:</div>
        <div class="info__value">{{ state.data.height }}</div>
      </div>
      <div class="info__row">
        <div class="info__title">Пол:</div>
        <div class="info__value">{{ state.data.gender }}</div>
      </div>
      <div class="info__row">
        <div class="info__title">Цвет глаз:</div>
        <div class="info__value">{{ state.data.eye_color }}</div>
      </div>
      <div class="info__row">
        <div class="info__title">Цвет кожи:</div>
        <div class="info__value">{{ state.data.skin_color }}</div>
      </div>
      <div class="btn-container">
        <Button class="btn" title="К главной странице" :method="toMain" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "axios";

import Button from "@/components/Button";
import { useRouter } from "vue-router";

export default {
  components: {
    Button,
  },
  setup() {
    const router = useRouter();

    const URL = "https://swapi.dev/api/people/1/";
    const HOME_URL = "http://swapi.dev/api/planets/1/";

    const state = reactive({
      data: {},
      home: {},
    });

    onMounted(async () => {
      try {
        const response = await axios.get(URL);
        const home = await axios.get(HOME_URL);
        state.data = await { ...response.data };
        state.home = await { ...home.data };
      } catch (e) {
        console.log("catch");
      }
    });

    const toMain = () => router.push("/");

    return {
      state,
      toMain,
    };
  },
};
</script>

<style scoped>
.info__row {
  display: flex;
  margin-bottom: 20px;
}
.info__row:first-child {
  margin-top: 100px;
}
.info__title {
  color: #fff;
  width: 60%;
}
.info__value {
  color: #f6c866;
}
</style>