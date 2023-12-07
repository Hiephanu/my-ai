<template>
  <div class="text-center">
    <span class="p-4 bg-[#f9f5ff] rounded-full">
      <span class="p-2 bg-[#f4ebff] rounded-full">
        <Icon name="uil:github" color="primary" class="text-primary" />
      </span>
    </span>
    <p class="title mt-4">{{ title }}</p>
    <p class="mt-4 subtext">{{ content }}</p>
    <div class="flex text-primary gap-2 font-semibold align-center items-center mt-4 justify-center cursor-pointer hover:text-gray">
      <p>Learn more</p>
      <Icon :name="icon" class="text-2xl"/>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
    icon:{
        type:String || undefined,
        default:''
    },
    title:{
        type:String
    },
    content:{
        type:String
    }
})
</script>
