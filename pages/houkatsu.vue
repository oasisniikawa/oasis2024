<template>
    <main>
      <ul class="flex flex-wrap text-sm font-medium text-center">
        <TabsItem @click="tab = 1" :selected="tab === 1">施設概要</TabsItem>
        <TabsItem @click="tab = 2" :selected="tab === 2">施設案内</TabsItem>
      </ul>
      <div class="bg-white p-4">
        <div v-show="tab === 1" class="content-item">
          <ContentDoc path="/houkatsu/overview" />
        </div>
        <div v-show="tab === 2" class="content-item">
          <ContentDoc path="/houkatsu/information" />
        </div>
      </div>
    </main>
  </template>

<script>
export default {
  data: () => {
    return {
      tab: 1,
    }
  },
}
</script>