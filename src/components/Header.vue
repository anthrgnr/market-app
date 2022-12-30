<script setup lang="ts">
import { ref } from 'vue';
import { langs, textColor } from '@/services/constants';

const props = defineProps({
  toggleDark: {
    type: Function,
    required: true
  },
  setLang: {
    type: Function,
    required: true
  },
  lang: String
});

const buttonStyle = 'flex items-center h-full px-3 bg-slate-50 dark:bg-slate-700 rounded-md border dark:border-none';

const langIndex = ref(0);
const handleChangeLang = () => {
  if (langIndex.value === langs.length - 1) {
    langIndex.value = 0;
  }
  else {
    langIndex.value++;
  }
  props.setLang(langs[langIndex.value])
};
</script>

<template>
  <div :class="['w-full flex items-center justify-between mb-4', $store.state.settings.isIOS ? 'mt-8' : undefined]">
    <p :class="['font-comfortaa text-4xl tracking-wide', textColor]">
      Market.app
    </p>
    <div class="flex gap-1 h-10">
      <p role="button" :class="[buttonStyle, textColor]" @click="handleChangeLang">
        {{ langs[langIndex] }}
      </p>
      <div :class="[buttonStyle, textColor]">
        <font-awesome-icon role="button" icon="fa-regular fa-lightbulb" size="lg" @click="props.toggleDark()" />
      </div>
    </div>
  </div>
</template>
