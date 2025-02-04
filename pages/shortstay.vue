<template>
    <main>
      <ul class="flex flex-wrap text-sm font-medium text-center">
        <TabsItem @click="tab = 1" :selected="tab === 1">施設概要</TabsItem>
      </ul>
      <div class="bg-white p-4">
        <div v-show="tab === 1" class="content-item">
          <ContentDoc path="/shortstay/overview" />
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