<script setup>
defineProps(['link'])
</script>

<template>
  <div class="bg-white p-4 mb-2">
    <slot />
    <a :href="link">
      <button class="bg-transparent text-blue-400 border border-slate-500 hover:bg-slate-100 hover:text-orange-500 py-1 px-2 mt-2 hover:border-transparent rounded">
      詳細
      </button>
    </a>
  </div>
</template>