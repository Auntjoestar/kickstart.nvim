<script setup lang="ts">
import { useScroll } from "@vueuse/core";
import type { Props } from './types/card'
import { useTemplateRef } from "vue";

const props = defineProps<Props>();

const { text, className, } = props;

const el = useTemplateRef<HTMLElement>('el');
const { x, y, arrivedState, directions } = useScroll(el);



</script>

<template>
    <div ref="el"
        class="flex size-full flex-col items-center justify-center rounded p-1 transition-transform hover:scale-105 hover:contrast-125"
        :class="className">
        <slot />
        <span class="font-secondary mt-2 font-semibold">{{ text }}</span>
    </div>
</template>