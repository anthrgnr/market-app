<script setup lang="ts">
import { textColor, getEmptyPageText } from '@/services/constants'

const props = defineProps({
    lang: String
});
</script>

<template>
    <div class="h-3/4screen flex flex-col items-center justify-center">
        <p :class="['font-raleway', textColor]">
            {{ getEmptyPageText(props.lang!) }}
        </p>
    </div>
</template>