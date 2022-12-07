<script setup lang="ts">
const props = defineProps({
  toggleDark: {
    type: Function,
    required: true
  },
});
</script>

<template>
  <div :class="['w-full flex items-center justify-between mb-4', $store.state.settings.isIOS ? 'mt-8' : undefined]">
    <p class="font-comfortaa text-4xl tracking-wide text-slate-700 dark:text-slate-100">
      Market.app
    </p>
    <font-awesome-icon role="button" icon="fa-regular fa-lightbulb" size="xl" class="text-slate-700 dark:text-slate-100"
      @click="props.toggleDark()" />
  </div>
</template>
