<script setup lang="ts">
import { ref } from "vue";
import type Product from "@/types/Product";

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    icon: String,
    lang: String,
    items: {
        type: Array<Product>,
        required: true
    },
    itemName: {
        type: String,
        default: 'nameEN'
    },
    onItemClick: {
        type: Function,
        default: () => { }
    }
});

const getButtonTitle = (lang: string, isPressed: boolean): String => {
    if (!isPressed) {
        if (lang === 'DE') return 'Legen'
        else if (lang === 'RU') return 'Добавить'
        else return 'Add'
    }
    else {
        if (lang === 'DE') return 'Weglegen'
        else if (lang === 'RU') return 'Убрать'
        else return 'Remove'
    }
};
const buttonPressed = ref({});
const handleItemClick = (itemId: string | number) => {
    const newValue = !buttonPressed.value[itemId as keyof typeof buttonPressed.value]
    buttonPressed.value = {
        ...buttonPressed.value,
        [itemId]: newValue
    }
    props.onItemClick(itemId, newValue);
};

const showList = ref(false);
const toggleList = () => {
    showList.value = !showList.value;
};
const textColor = "text-slate-700 dark:text-slate-100";
</script>

<template>
    <div class="flex flex-col w-full">
        <div role="button"
            class="flex justify-between items-center bg-slate-50 dark:bg-slate-700 px-4 py-3 rounded-md border-slate-200 dark:border-none border"
            @click="toggleList">
            <div class="flex gap-2 items-center">
                <font-awesome-icon :icon="props.icon" :class="textColor" size="lg" />
                <p :class="['font-raleway text-lg tracking-wide', textColor]">{{ props.name }}</p>
            </div>
            <font-awesome-icon icon="fa-solid fa-angle-up" :class="textColor" :rotation="showList ? undefined : 180" />
        </div>
        <div role="listitem" v-show="showList"
            class="flex flex-col rounded-md mt-1 bg-slate-50 dark:bg-slate-700 p-1 shadow">
            <div v-for="item in props.items" :key="item.id"
                class="flex items-center justify-between px-3 py-2 border-b dark:border-b-slate-600 last:border-none">
                <p :class="['font-raleway', textColor]">{{ item[props.itemName as keyof Product] }}</p>
                <p :class="['font-raleway px-2 py-1 rounded-md border border-slate-700 dark:border-slate-100', textColor, buttonPressed[item.id as keyof typeof buttonPressed] ? undefined : 'shadow-md dark:shadow-slate-800']"
                    role="button" @click="handleItemClick(item.id)">
                    {{ getButtonTitle(props.lang!, buttonPressed[item.id as keyof typeof buttonPressed]) }}</p>
            </div>
        </div>
    </div>
</template>
