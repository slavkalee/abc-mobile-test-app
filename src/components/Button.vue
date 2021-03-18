<template>
  <button
    :type="submitType ? 'submit' : 'button'"
    :class="className"
    @click="!submitType ? method(id) : null"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    id: Number,
    className: String,
    submitType: Boolean,
    title: String,
    method: Function,
  },
  methods: {},
};
</script>

<style>
@keyframes shine {
  0% {
    left: -30px;
  }
  100% {
    left: 330px;
  }
}
.btn {
  background: #f6c866;
  font-size: 20px;
  color: #fff;
  border-radius: 50px;
  padding: 23px 0;
  width: 310px;
  outline: 0;
  border: none;
  cursor: pointer;
  z-index: 10000;
  position: relative;
  overflow: hidden;
}
.btn::before {
  content: "";
  position: absolute;
  top: 0;
  width: 25px;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  transform: skew(40deg);
  filter: blur(13px);
  animation: 3s shine infinite;
}

.btn-success {
  background: #32b949;
}

@media screen and (max-width: 414px) {
  .btn {
    font-size: 15px;
    padding: 15px 0;
    width: 210px;
  }
}

@media screen and (max-width: 320px) {
  .btn {
    font-size: 11px;
    width: 170px;
  }
}
</style>