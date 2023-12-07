<template>
  <div>
    <p class="text-primary heading mt-4">{{ heading }}</p>
    <p class="font-semibold mt-4">{{ title }}</p>
    <p class="subtext mt-4">{{ content }}</p>
  </div>
</template>
<script setup lang="ts">
defineProps({
    heading:{
        type:String
    },
    title:{
        type:String
    },
    content:{
        type:String
    }
})
</script>
