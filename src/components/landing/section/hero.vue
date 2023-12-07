<template>
  <section id="hero" class="hero">
    <div>
      <div>
        <div
          class="flex bg-[#f9f5ff] text-primary p-1 gap-8 rounded-lg w-2/5 mx-auto mt-16"
        >
          <div class="flex bg-white p-1 rounded-lg gap-2 mx-auto">
            <Icon name="uil:code" class="my-auto" />
            <span class="text-sm">Giai đoạn Alpha</span>
          </div>
          <div class="flex p-1 gap-2 mx-auto">
            <span class="text-sm">Trải nghiệm các chức năng chính</span>
            <Icon name="uil:arrow-right" class="my-auto" />
          </div>
        </div>
        <div class="mt-12 w-full">
          <p class="heading text-center">
            Make Poscast easy like drinking tea 🍵
          </p>
          <p class="subtext mt-8 w-1/2 mx-auto text-center">
            Powerful, self-serve product and AI to help you make podcast easy.
            Trusted by over 4,000 podcasters.
          </p>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="flex gap-4 mt-8">
          <common-button type="secondary">
            <template #prefix>
              <Icon name="uil:play-circle" />
              Demo
            </template>
          </common-button>
          <common-button type="primary"> Trải nghiệm </common-button>
        </div>
      </div>
      <div class="flex mt-12 justify-center">
        <img src="/img/landing/hero.png" alt="">
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
