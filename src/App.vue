<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { computed, ref } from "vue";
import { useStore } from "vuex";

import EmptyContent from "./components/EmptyContent.vue";
import Header from "./components/Header.vue";
import ProductList from "./components/ProductList.vue";
import ShoppingList from "./components/ShoppingList.vue";
import Switcher from "./components/Switcher.vue";
import { getSwitcherTitle } from "./services/constants";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const store = useStore();
const productCategories = computed(() => store.state.products.categories);
const lang = computed(() => store.state.settings.lang);
const productsByGroupId = computed(() => store.getters['products/productsByGroupId']);
const checkedProductsByGroupId = computed(() => store.getters['products/checkedProductsByGroupId']);
const checkedCategories = computed(() => store.getters['products/checkedCategories']);
const hasChecked = computed(() => checkedCategories.value.length);

const setInBasket = (id: string | number, inBasket: boolean) => {
    store.commit('products/setInBasket', {
        id,
        inBasket
    })
};
const setLang = (newLang: 'EN' | 'DE' | 'RU') => {
    store.commit('settings/setLang', { lang: newLang });
};

const isLeftTabActive = ref(true);
</script>

<template>
    <div class="flex items-center h-full flex-col my-3 p-4">
        <Header :toggle-dark="toggleDark" :lang="lang" :set-lang="setLang"></Header>
        <Switcher :class="'self-start mb-4'" :left-text="(getSwitcherTitle(lang).leftTitle)"
            :right-text="(getSwitcherTitle(lang).rightTitle)" :on-left-click="() => isLeftTabActive = true"
            :on-right-click="() => isLeftTabActive = false" :isLeftActive="isLeftTabActive" />
        <div class="w-full flex flex-col gap-2">
            <ProductList v-show="isLeftTabActive" v-for="category in productCategories" :name="category[`name${lang}`]"
                :items="productsByGroupId(category.id)" :key="category.id" :itemName="`name${lang}`"
                :icon="category.icon" :lang="lang" :on-item-click="setInBasket" />
        </div>
        <div v-show="!isLeftTabActive && hasChecked" class="w-full flex flex-col gap-2">
            <ShoppingList v-for="category in checkedCategories" :name="category[`name${lang}`]"
                :items="checkedProductsByGroupId(category.id)" :key="category.id" :itemName="`name${lang}`"
                :lang="lang" />
        </div>
        <EmptyContent v-show="!isLeftTabActive && !hasChecked" :lang="lang" />
    </div>
</template>
