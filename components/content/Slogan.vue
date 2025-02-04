<script setup>
defineProps(['initial'])
</script>

<template>
  <div>
    <span class="text-3xl text-cyan-700 font-medium inline-block">{{ initial }}</span>
    <span><ContentSlot unwrap="p" /></span>
  </div>
</template>