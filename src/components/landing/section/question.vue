<template>
  <section id="question" name="question">
    <div class="text-center mt-24">
      <h1 class="sub-heading">Frequently asked questions</h1>
      <p class="subtext mt-6">
        Everything you need to know about the product and billing.
      </p>
      <div class="mt-12">
        <div v-for="(question, index) in questionItemArr" :key="index">
          <landing-question-item :title="question.title" :content="question.content"/>
        </div>
      </div>
    </div>
    <div class="text-center bg-[#f9fafb] p-8 w-4/5 mt-4 mx-auto">
      <img src="\img\landing\AvatarQuestion.png" alt="" class="mx-auto">
      <p class="mt-4">Still have question</p>
      <p class="subtext mt-4">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
      <div class="mt-12 flex justify-center">
        <common-button type="primary">Get in touch</common-button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
type questionItem = {
  title:string,
  content:string
};
const questionItemArr:Ref<Array<questionItem>> = ref([
  {
    title: "Is there a free trial available?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Can I change my plan later?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "What is your cancellation policy?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Can other info be added to an invoice?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "How do I change my account email?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },

]);
</script>
