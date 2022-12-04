<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { computed } from "vue";
import { useStore } from "vuex";
import { Preferences } from "@capacitor/preferences";

import Header from "./components/Header.vue";
import ListItem from "./components/ListItem.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);

// const setObject = async () => {
//     await Preferences.set({
//         key: 'user',
//         value: JSON.stringify({
//             id: 1,
//             name: 'Max'
//         })
//     });
// }

// const getObject = async () => {
//     const ret = await Preferences.get({ key: 'user' });
//     const user = JSON.parse(ret.value!);

// }
const store = useStore();
const productCategories = computed(() => store.state.products.categories);
const productsByGroupId = computed(() => store.getters['products/productsByGroupId']);

</script>

<template>
    <div class="flex items-center h-screen flex-col relative p-4">
        <Header :toggleDark="toggleDark"></Header>
        <ListItem v-for="category in productCategories" :name="category.nameEN"
            :items="productsByGroupId(category.id)" itemName="nameEN" />
    </div>
</template>
