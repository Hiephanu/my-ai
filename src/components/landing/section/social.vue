<template>
  <section id="social" class="social mt-12">
    <p class="text-center subtext">Join 4,000+ Podcast studio already use</p>
    <div class="flex align-center mt-6">
      <div class="flex gap-12 mx-auto">
        <div
          v-for="(social, index) in socialImgpath"
          :key="index"
          class="flex text-center align-center item-center gap-2"
        >
          <img :src="social.img" alt="" />
          <p class="my-auto">{{ social.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
type socailType = {
  img: string;
  text: string;
};
const socialImgpath: Array<socailType> = [
  {
    img: "/img/landing/Isometric.png",
    text: "Layers",
  },
  {
    img: "/img/landing/Logomark.png",
    text: "Sisyphus",
  },
  {
    img: "/img/landing/Logomark(1).png",
    text: "Circooles",
  },
  {
    img: "/img/landing/Logomark(2).png",
    text: "Catalog",
  },
  {
    img: "/img/landing/Logomark(3).png",
    text: "Quotient",
  },
];
</script>
