<script setup lang="ts">
import type Product from '@/types/Product';

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    lang: String,
    items: {
        type: Array<Product>,
        required: true
    },
    itemName: {
        type: String,
        default: 'nameEN'
    }
});
const textColor = "text-slate-700 dark:text-slate-100";
</script>

<template>
    <div :class="['flex flex-col bg-slate-50 dark:bg-slate-700 rounded-lg p-4', textColor]">
        <h3 class="font-raleway tracking-wide text-xl mb-2">
            {{ props.name }}
        </h3>
        <div v-for="item in props.items" class="ml-2 flex items-center gap-2">
            <input :id="item.nameEN" type="checkbox" class="w-3 h-3">
            <label :for="item.nameEN" :class="['font-raleway', textColor]">
                {{ item[props.itemName as keyof Product] }}
            </label>
        </div>
    </div>
</template>