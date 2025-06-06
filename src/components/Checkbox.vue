<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    caption: String,
    onCheck: {
        type: Function,
        default: () => { }
    },
    isChecked: Boolean
});

const checked = ref(props.isChecked);
const handleCheck = () => {
    checked.value = !checked.value;
    props.onCheck();
}
</script>

<template>
    <button @click="handleCheck" class="flex gap-2 items-center">
        <div class="flex items-center justify-center h-4 w-4 border border-slate-700 dark:border-slate-100 rounded-sm">
            <Transition class="block">
                <font-awesome-icon v-show="checked" class="text-slate-700 dark:text-slate-100 h-3"
                    icon="fa-solid fa-check" />
            </Transition>
        </div>
        <p :class="checked && 'line-through'">{{ props.caption }}</p>
    </button>
</template>

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>