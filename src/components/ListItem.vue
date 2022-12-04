<script setup lang="ts">
import { ref } from "vue";
import type Product from "@/types/Product";

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    items: {
        type: Array<Product>,
        required: true
    },
    itemName: {
        type: String,
        required: true,
        default: 'nameEN'
    }
});

const showList = ref(false);
const toggleList = () => {
    showList.value = !showList.value;
};
const textColor = "text-slate-700 dark:text-slate-100";
</script>

<template>
    <div class="flex flex-col w-full">
        <div class="flex justify-between items-center bg-slate-50 dark:bg-slate-700 px-4 py-3 rounded-md border-slate-200 dark:border-none border cursor-pointer"
            @click="toggleList">
            <p :class="['font-raleway text-lg tracking-wide', textColor]">
                {{ props.name }}
            </p>
            <font-awesome-icon icon="fa-solid fa-angle-up" :class="textColor" :rotation="showList ? undefined : 180" />
        </div>
        <div v-show="showList" class="flex flex-col rounded-md mt-2 bg-slate-50 dark:bg-slate-700 p-1 shadow">
            <p v-for="item in props.items" :key="item.id" :class="[
                'px-3 py-2 text-slate-700 dark:text-slate-100 font-raleway rounded-md hover:bg-slate-100 hover:dark:bg-slate-600 cursor-pointer',
                textColor,
            ]">
                {{ item[props.itemName as keyof Product] }}
            </p>
        </div>
    </div>
</template>
