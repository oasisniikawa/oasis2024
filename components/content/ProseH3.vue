<template>
    <h3 :id="id" class="text-lg font-semibold　text-slate-800 bg-yellow-100 pl-2 pt-1 mb-2 mt-4">
      <a
        v-if="id && generate"
        :href="`#${id}`"
      >
        <slot />
      </a>
      <slot v-else />
    </h3>
  </template>
  
  <script setup lang="ts">
  import { computed, useRuntimeConfig } from '#imports'
  
  const props = defineProps<{ id?: string }>()
  
  const { headings } = useRuntimeConfig().public.mdc
  const generate = computed(() => props.id && headings?.anchorLinks?.h3)
  </script>