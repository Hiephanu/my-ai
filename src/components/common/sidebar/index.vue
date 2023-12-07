<template>
    <div class="w-1/6">
      <div class="flex gap-4 justify-center mt-8">
        <img src="LogoMark.png" alt="" />
        <p class="sub-heading text-primary">My AI</p>
      </div>
      <div class="mt-12">
        <div v-for="(title, index) in arr" :key="index" class="p-4">
          <nuxt-link to="/chat/1">{{ title }}</nuxt-link>
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">
const arr: Ref<Array<string>> = ref(["Java basic", "Vuejs basic"]);
</script>
