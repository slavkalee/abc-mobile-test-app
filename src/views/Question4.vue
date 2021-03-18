<template>
  <Layout>
    <template v-slot:subtitle>
      <div class="question__subtitle">
        Смерть родного человека – одно из тяжелейших испытаний в жизни каждого
        из нас!
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
      <div class="question-number">Вопрос 4-5</div>
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
      ...useSelect(4, 5),
    };
  },
};
</script>

<style>
</style>