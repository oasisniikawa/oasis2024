<template>
    <h2 :id="id" class="text-lg font-semibold text-emerald-700 border-l-8 border-orange-500 pl-2 mb-2">
      <a
        v-if="id && generate"
        :href="`#${id}`"
      >
        <slot />
      </a>
      <slot v-else />
    </h2>
  </template>
  
  <script setup lang="ts">
  import { computed, useRuntimeConfig } from '#imports'
  
  const props = defineProps<{ id?: string }>()
  
  const { headings } = useRuntimeConfig().public.mdc
  const generate = computed(() => props.id && headings?.anchorLinks?.h2)
  </script>