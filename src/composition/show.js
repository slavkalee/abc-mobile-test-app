import { ref } from 'vue';

export function useTextShow() {
  const textVisible = ref(false);

  const showText = () => textVisible.value = true;


  return {
    textVisible,
    showText,
  };
}
