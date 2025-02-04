<template>
    <div class="">
      <div class="bg-white bg-[url('/img/turip_back.png')] bg-no-repeat bg-right">
        <div class="h-[50px] flex items-center" >
          <img src="/img/ci.png" class="h-[40px] mt-1 ml-2 mr-4" alt="ci" />
          <span class="text-oasis text-xl md:text-4xl font-brand font-bold pt-2">
            <nuxt-link to="/">社会福祉法人おあしす新川</nuxt-link>
          </span>
        </div>
      </div>
      <nav class="bg-gradient-to-b from-neutral-400 to-neutral-700 flex justify-end text-white text-base font-semibold">
        <div class="px-4 py-1 hover:bg-gray-50 hover:text-orange-500"><nuxt-link to="/">ホーム</nuxt-link></div>
        <div class="px-4 py-1 hover:bg-gray-50 hover:text-orange-500"><nuxt-link to="/access">交通アクセス</nuxt-link></div>
        <div class="px-4 py-1 hover:bg-gray-50 hover:text-orange-500"><nuxt-link to="/contact">お問い合わせ</nuxt-link></div>
      </nav>
    </div>
</template>
  