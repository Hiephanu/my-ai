<template>
  <div class="py-4 border-t-[1px] border-background w-2/3 mx-auto">
    <div class="flex justify-between">
      <p class="font-semibold">{{ title }}</p>
      <div v-if="state" class="text-primary cursor-pointer">
        <Icon name="uil:plus-circle" @click="handleClick"/>
      </div>
      <div v-else class="text-primary cursor-pointer">
        <Icon name="uil:minus-circle" @click="handleClick"/>
      </div>
    </div>
    <div :class="{'hidden' : isHidden}" class="">
        <p class="subtext mt-2">{{ content }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  title:{
    type:String
  },
  content:{
    type:String
  }
})
const isHidden:Ref<Boolean> = ref(true)
const state:Ref<Boolean>=ref(true) 
const iconArr:Ref<Array<string>> = ref([
  'uil:plus-circle',
  'uil:minus-circle'
])
const handleClick = ()=>{
    isHidden.value = !isHidden.value
    state.value = !state.value
}
</script>
