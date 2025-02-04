<template>
    <li class="cursor-pointer rounded-t-lg" 
        :class="{'text-slate-500 bg-slate-200 border border-slate-300': !selected, 'text-slate-900 bg-white font-bold': selected}">
        <a class="inline-block py-2 px-4 hover:text-orange-600">
            <slot/>
        </a>
    </li>
</template>

<script>
export default {
 props: ['selected']
}
</script>

