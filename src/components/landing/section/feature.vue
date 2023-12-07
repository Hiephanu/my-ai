<template>
  <section id="feature" class="feature mt-32 w-full">
    <p class="text-center text-primary font-semibold">Features</p>
    <p class="sub-heading text-center mt-6">Make Podcast feels like it’s from the future</p>
    <p class="subtext w-1/2 mx-auto text-center align-center mt-6">
      Powerful, self-serve product and growth analytics to help you convert,
      engage, and retain more users. Trusted by over 4,000 startups.
    </p>
    <div class="flex gap-16 mt-6 justify-center">
      <div v-for="(card, index) in featureCardArr" :key="index">
        <landing-feature-card
          :thumbnail="card.thumbnail"
          :title="card.title"
          :content="card.content"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
type featureCard = {
  thumbnail: string;
  title: string;
  content: string;
};
const featureCardArr:Ref<Array<featureCard>> = ref([
  {
    thumbnail: "/img/landing/Frame.png",
    title: "AI Text to Speech",
    content: "Chuyển đổi giọng nói thành văn bản",
  },
  {
    thumbnail: "/img/landing/Frame1.png",
    title: "AI Speaker Recognition",
    content: "Nhận diện người nói và tách đoạn văn bản",
  },
  {
    thumbnail: "/img/landing/Frame2.png",
    title: "AI voice cloning",
    content: "Sửa lỗi và tạo giọng của bạn chỉ bằng việc gõ",
  },
]);
</script>
