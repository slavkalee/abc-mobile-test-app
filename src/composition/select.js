import { computed, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export function useSelect(id, route) {
  const store = useStore();
  const router = useRouter();

  const currentQuestion = computed(() => {
    return store.getters.questionById(id);
  });

  const question = reactive({
    id: currentQuestion.value.id,
    title: currentQuestion.value.title,
    choices: currentQuestion.value.choices,
  });

  const onSelect = (choiceId) => {
    question.choices = question.choices.map((c) => {
      const choice = { ...c };
      if (+choiceId === +choice.id) {
        choice.selected = true;
      }
      if (choice.selected) {
        store.commit('writeValue', {
          id: question.id,
          question: question.title,
          value: choice.name,
        });
      }
      return choice;
    });
    router.push(`/question/${route}`);
  };

  return { question, onSelect };
}
