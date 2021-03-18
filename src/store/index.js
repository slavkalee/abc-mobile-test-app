import { createStore } from 'vuex';

export default createStore({
  state: {
    questions: [
      {
        id: 1,
        title: 'Боитесь ли вы умереть?',
        choices: [
          { id: 1, name: 'Да', selected: null },
          { id: 2, name: 'Нет', selected: null },
        ],
      },
      {
        id: 2,
        title: 'Когда Вы чувствуете себя наиболее комфортно?',
        choices: [
          { id: 1, name: 'Утро', selected: null },
          { id: 2, name: 'День', selected: null },
          { id: 3, name: 'Вечер', selected: null },
          { id: 4, name: 'Ночь', selected: null },
        ],
      },
      {
        id: 3,
        title: 'Укажите свою дату рождения:',
        choices: [],
      },
      {
        id: 4,
        title: 'Снятся ли Вам умершие люди??',
        choices: [
          { id: 1, name: 'Да', selected: null },
          { id: 2, name: 'Нет', selected: null },
          { id: 3, name: 'Иногда', selected: null },
        ],
      },
      {
        id: 5,
        title:
          'Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас?',
        choices: [
          { id: 1, name: 'Да', selected: null },
          { id: 2, name: 'Затрудняюсь ответить', selected: null },
        ],
      },
    ],
    answers: [],
  },
  mutations: {
    writeValue(state, payload) {
      state.answers.push(payload);
    },
  },
  getters: {
    questionById: (state) => (id) => state.questions.find((q) => +q.id === +id),
    dayOfBirth: (state) => (id) => {
      return state.answers.find((item) => item.id === id);
    },
  },
});
