<template>
  <Layout>
    <template v-slot:subtitle>
      <div class="question__subtitle">
        Мы расскажем Вам не только подробности вашей смерти, но также поможем
        Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы.
      </div>
    </template>
    <template v-slot:content>
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
    </template>

    <template v-slot:question-number>
      <div class="question-number">Вопрос 2-5</div>
    </template>
  </Layout>
</template>

<script>
import { useSelect } from "@/composition/select";
import Layout from "@/components/Layout";
import Button from "@/components/Button";

export default {
  components: {
    Layout,
    Button,
  },
  setup() {
    return {
      ...useSelect(2, 3),
    };
  },
};
</script>

<style>
</style>