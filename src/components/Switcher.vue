<script setup lang="ts">
const props = defineProps({
    class: String,
    leftText: String,
    rightText: String,
    isLeftActive: {
        type: Boolean,
        default: true
    },
    onLeftClick: {
        type: Function,
        required: true
    },
    onRightClick: {
        type: Function,
        required: true
    }
});
const textClass = 'px-3 py-2 font-raleway rounded-md text-slate-700 dark:text-slate-100';
const buttonClass = 'bg-slate-100 dark:bg-slate-600 shadow'
</script>

<template>
    <div :class="props.class">
        <div
            class="flex p-1 bg-slate-200 dark:bg-slate-700 rounded-md gap-1 border-slate-300 dark:border-slate-800 border shadow-inner">
            <div role="button" :class="['flex rounded-md', props.isLeftActive ? buttonClass : undefined]"
                @click="props.onLeftClick">
                <p v-if="props.leftText" :class="textClass">{{ props.leftText }}</p>
            </div>
            <div role="button" :class="['flex rounded-md', !props.isLeftActive ? buttonClass : undefined]"
                @click="props.onRightClick">
                <p v-if="props.rightText" :class="textClass">{{ props.rightText }}</p>
            </div>
        </div>
    </div>
</template>
