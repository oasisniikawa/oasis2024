<script setup>
defineProps(['link', 'url', 'title'])
</script>

<template>
  <div class="bg-white border">
    <div class="bg-zinc-500 text-center text-white">
      {{ title }}
    </div>
    <div class="py-2 px-6 flex justify-center">
      <a :href="link" data-fancybox="gallery" :data-caption="title">
        <img :src="url" class="w-full"  />
      </a>
    </div>
  </div>
</template>