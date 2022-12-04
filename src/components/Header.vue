<script setup lang="ts">
const props = defineProps({
  toggleDark: {
    type: Function,
    required: true
  },
});
</script>

<template>
  <div :class="['flex align-baseline justify-between', $store.state.settings.isIOS ? 'my-4' : 'mb-4']">
    <p class="font-comfortaa text-4xl tracking-wide text-slate-700 dark:text-slate-100">
      Market.app
    </p>
    <button @click="props.toggleDark()">#</button>
  </div>
</template>
