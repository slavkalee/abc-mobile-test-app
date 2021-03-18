<template>
  <Layout v-if="!loading">
    <template v-slot:subtitle>
      <div class="question__subtitle">
        Уже совсем скоро Вы узнаете много интересного о своем будущем!
      </div>
    </template>
    <template v-slot:content>
      <h1 class="question__title">{{ question.title }}</h1>
      <form @submit.prevent="onSubmit">
        <select
          :class="{
            invalid: v$.dayValue.required.$invalid && v$.dayValue.$dirty,
          }"
          v-model="question.dayValue"
        >
          <option disabled value="">День</option>
          <option v-for="day in days" :key="day">{{ day }}</option>
        </select>
        <select
          :class="{
            invalid: v$.monthValue.required.$invalid && v$.monthValue.$dirty,
          }"
          v-model="question.monthValue"
        >
          <option disabled value="">Месяц</option>
          <option v-for="month in months" :key="month">{{ month }}</option>
        </select>
        <select
          :class="{
            invalid: v$.yearValue.required.$invalid && v$.yearValue.$dirty,
          }"
          v-model="question.yearValue"
        >
          <option disabled value="">Год</option>
          <option v-for="year in years" :key="year">{{ year }}</option>
        </select>
        <Button class="btn" title="Далее" submitType />
      </form>
    </template>

    <template v-slot:question-number>
      <div class="question-number">Вопрос 3-5</div>
    </template>
  </Layout>
  <Loader v-else />
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed, reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import Layout from "@/components/Layout.vue";
import Button from "@/components/Button";
import Loader from "@/components/Loader";

export default {
  components: {
    Layout,
    Button,
    Loader,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const currentQuestion = computed(() => {
      return store.getters.questionById(3);
    });

    const loading = ref(false);

    const question = reactive({
      id: currentQuestion.value.id,
      title: currentQuestion.value.title,
      dayValue: "",
      monthValue: "",
      yearValue: "",
    });

    const daysArr = [];
    const monthsArr = [];
    const yearsArr = [];

    for (let i = 1; i <= 31; i++) {
      daysArr.push(i);
    }
    for (let i = 1; i <= 12; i++) {
      monthsArr.push(i);
    }
    for (let i = 1960; i <= 2003; i++) {
      yearsArr.push(i);
    }

    const days = daysArr.map((day) => {
      if (day < 10) {
        return `0${day}`;
      }
      return day;
    });
    const months = monthsArr.map((month) => {
      if (month < 10) {
        return `0${month}`;
      }
      return month;
    });
    const years = yearsArr.reverse();

    const rules = computed(() => ({
      dayValue: { required },
      monthValue: { required },
      yearValue: { required },
    }));

    const v$ = useVuelidate(rules, question);

    const onSubmit = () => {
      v$.value.$touch();
      if (v$.value.$invalid) return;

      store.commit("writeValue", {
        id: question.id,
        question: question.title,
        value: `${question.yearValue},${question.monthValue},${question.dayValue}`,
      });
      loading.value = true;
      setTimeout(() => {
        router.push("/question/4");
      }, 2000);
    };

    return {
      question,
      days,
      months,
      years,
      onSubmit,
      loading,
      v$,
    };
  },
};
</script>


<style scoped>
select {
  background: #cccccc;
  font-size: 20px;
  color: #202424;
  border-radius: 50px;
  padding: 23px 0;
  width: 310px;
  outline: 0;
  border: 1px solid rgb(0, 0, 0, 0.65);
  cursor: pointer;
  z-index: 10000;
  position: relative;
  display: block;
  margin: 34px 0;
  text-align-last: center;
  text-align: center;
  -ms-text-align-last: center;
  -moz-text-align-last: center;
  box-shadow: inset 0px 0px 20px rgb(0, 0, 0, 0.65);
}
select.invalid {
  border: 1px solid red !important;
}

@media screen and (max-width: 414px) {
  select {
    font-size: 15px;
    padding: 15px 0;
    width: 210px;
    margin: 25px 0;
  }
}

@media screen and (max-width: 320px) {
  select {
    font-size: 11px;
    width: 170px;
    margin: 25px 0;
  }
}
</style>