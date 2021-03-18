<template>
  <div class="overlay">
    <div class="loading">
      <div class="icon__container">
        <img src="../assets/microphone.svg" alt="" />
      </div>
      <div class="loading-bar">
        <div class="percentage" :style="{ width: percentage + '%' }"></div>
      </div>
      <div class="percent">{{ percent }}%</div>
      <div class="text">Запись сообщения</div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  setup() {
    const percentage = ref(0);

    let interval = setInterval(() => {
      if (percentage.value < 100) {
        percentage.value += 0.1;
      } else {
        clearInterval(interval);
      }
    }, 5);

    const percent = computed(() => {
      return percentage.value.toFixed();
    });

    return {
      percentage,
      percent,
    };
  },
};
</script>

<style scoped>
.loading-bar {
  position: relative;
  width: 400px;
  height: 10px;
  border-radius: 15px;
  overflow: hidden;
  background: #fff;
  margin-bottom: 24px;
}
.percentage {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  border-radius: 15px;
  background: #f6c866;
}
.percent {
  font-size: 24px;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin-bottom: 15px;
}
.text {
  font-weight: 300;
  font-size: 18px;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
}
.icon__container {
  margin-bottom: 40px;
  width: 180px;
  height: 100px;
}
.icon__container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 414px) {
  .loading-bar {
    width: 320px;
    height: 10px;
  }
  .percent {
    font-size: 21px;
    margin-bottom: 10px;
  }
  .icon__container {
    margin-bottom: 25px;
    width: 150px;
    height: 70px;
  }
}
@media screen and (max-width: 320px) {
  .loading-bar {
    width: 250px;
    height: 5px;
  }
  .percent {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .icon__container {
    width: 120px;
    height: 56px;
  }
  .text {
    font-size: 15px;
  }
}
</style>