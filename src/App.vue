<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { computed, ref } from "vue";
import { useStore } from "vuex";

import Header from "./components/Header.vue";
import ProductList from "./components/ProductList.vue";
import Switcher from "./components/Switcher.vue";
import { getSwitcherTitle } from "./services/constants";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const store = useStore();
const productCategories = computed(() => store.state.products.categories);
const lang = computed(() => store.state.settings.lang);
const productsByGroupId = computed(() => store.getters['products/productsByGroupId']);
const setInBasket = (id: string | number, inBasket: boolean) => {
    store.commit('products/setInBasket', {
        id,
        inBasket
    })
}


const isLeftTabActive = ref(true);
const { leftTitle, rightTitle } = getSwitcherTitle(lang.value)
</script>

<template>
    <div class="flex items-center h-full flex-col p-4">
        <Header :toggle-dark="toggleDark"></Header>
        <Switcher :class="'self-start mb-4'" :left-text="(leftTitle as string)" :right-text="(rightTitle as string)"
            :on-left-click="() => isLeftTabActive = true" :on-right-click="() => isLeftTabActive = false"
            :isLeftActive="isLeftTabActive" />
        <div class="w-full flex flex-col gap-2">
            <ProductList v-show="isLeftTabActive" v-for="category in productCategories" :name="category[`name${lang}`]"
                :items="productsByGroupId(category.id)" :key="category.id" :itemName="`name${lang}`"
                :icon="category.icon" :lang="lang" :on-item-click="setInBasket" />
        </div>
    </div>
</template>
