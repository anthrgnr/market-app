<script setup lang="ts">
import type Product from '@/types/Product';
import { textColor } from '@/services/constants';
import Checkbox from './Checkbox.vue';

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
</script>

<template>
    <div :class="['flex flex-col rounded-lg', textColor]">
        <h3 class="font-raleway tracking-wide text-xl mb-2">
            {{ props.name }}
        </h3>
        <div class="flex flex-col w-full gap-2">
            <div v-for="item in props.items" :key="item.id"
                class="flex items-center gap-2 bg-slate-50 dark:bg-slate-700 px-4 py-3 rounded-md shadow-sm">
                <Checkbox :caption="item[props.itemName as keyof Product]" />
            </div>
        </div>
    </div>
</template>