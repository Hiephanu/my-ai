<template>
    <div class="text-center">
        <img :src="thumbnail" alt="Image" class="mt-6"/>
        <h1 class="text-primary font-semibold text-lg mt-6">{{ title }}</h1>
        <p class="mt-6 w-1/2 align-center mx-auto">{{ content }}</p>
    </div>
</template>
<script setup lang="ts">
defineProps({
    thumbnail:{
        type:String,
    },
    title:{
        type:String,
    },
    content:{
        type:String,
    }

})
</script>