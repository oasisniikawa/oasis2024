<template>
    <div class="bg-orange-50">
        <div class="container mx-auto max-w-screen-xl px-2"> 
            <div class="flex flex-col">
                <div class="sticky top-0">
                    <Header />
                </div>
                <div class="md:flex pt-2">
                    <div class='w-full'>
                        <slot />
                    </div>
                    <div class='md:w-80 shrink-0 md:pl-2'>
                        <Sidebar />
                    </div>
                </div>
                <div class="pt-2">
                    <Footer />
                </div>
            </div>
        </div>        
    </div>
</template>
  