<template>
  <Layout v-if="!loadVisible">
    <template v-slot:subtitle>
      <transition name="fade">
        <div class="msg" v-if="show">
          <div class="msg__text">
            {{ msg }}
          </div>
        </div>
      </transition>
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
      <div class="question-number">Вопрос 5-5</div>
    </template>
  </Layout>
  <Recording v-else />
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, onMounted, reactive, ref } from "vue";

import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Recording from "@/components/Recording";

export default {
  components: {
    Layout,
    Button,
    Recording,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const show = ref(false);
    const loadVisible = ref(false);

    onMounted(() => {
      setTimeout(() => {
        show.value = true;
      }, 200);
    });

    const currentQuestion = computed(() => {
      return store.getters.questionById(5);
    });

    const birth = computed(() => store.getters.dayOfBirth(3));

    const getAge = computed(() => {
      var now = new Date();
      var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      var dob = new Date(birth.value.value);
      var dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
      var age;

      age = today.getFullYear() - dob.getFullYear();
      if (today < dobnow) {
        age = age - 1;
      }

      return age;
    });

    const msg = computed(() => {
      const msg1 =
        "По вам скучает очень близкий человек, которого больше нет в мире живых.";
      const msg2 =
        "По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка.";
      const msg3 =
        "По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей.";
      if (getAge.value >= 18 && getAge.value <= 35) {
        return msg1;
      }
      if (getAge.value > 35 && getAge.value <= 45) {
        return msg2;
      }
      if (getAge.value >= 46) {
        return msg3;
      }
      return null;
    });

    const question = reactive({
      id: currentQuestion.value.id,
      title: currentQuestion.value.title,
      choices: currentQuestion.value.choices,
    });

    const onSelect = (id) => {
      question.choices = question.choices.map((c) => {
        const choice = { ...c };
        if (+id === +choice.id) {
          choice.selected = true;
        }
        if (!choice.selected) return;

        store.commit("writeValue", {
          id: question.id,
          question: question.title,
          value: choice.name,
        });
        loadVisible.value = true;
        setTimeout(() => router.push("/finalpage"), 6500);
        return choice;
      });
    };

    return {
      question,
      onSelect,
      getAge,
      show,
      msg,
      loadVisible,
    };
  },
};
</script>

<style scoped>
.msg {
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

.msg::before {
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
.msg__text {
  font-family: "Bad Script";
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #202024;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 414px) {
  .msg {
    height: 120px;
    padding: 11px;
  }
  .msg::before {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid #fff;
    bottom: -10px;
    right: 13px;
  }
  .msg__text {
    font-size: 18px;
  }
}
@media screen and (max-width: 320px) {
  .msg {
    height: 85px;
  }
  .msg::before {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 8px solid #fff;
    bottom: -8px;
    right: 13px;
  }
  .msg__text {
    font-size: 15px;
    line-height: 22px;
  }
}
</style>