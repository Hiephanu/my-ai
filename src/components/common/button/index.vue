<template>
   <button :class="[type,size]" class="flex justify-center gap-2 items-center">
        <slot name="prefix"/>
        <slot/>
        <slot name="suffix"/>
   </button>
</template>
<script setup lang="ts">
defineProps({
    type:{
        type: String,
        default: "primary"
    },
    size:{
        type:String,
        default: "text_primary"
    }  
})
</script>
<style scoped>
.primary{
    @apply text-white bg-primary py-2 px-6 rounded-lg
}
.text_primary{
    @apply text-xl
}
.secondary{
    @apply text-gray font-semibold bg-white border-[1px] border-gray py-2 px-6 rounded-lg
}
.text_secondary{
    @apply text-base
}
</style>