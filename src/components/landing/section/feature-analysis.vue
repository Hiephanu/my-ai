<template>
  <section id="feature-analysis" class="feature-analysis pb-8">
    <div class="text-center mt-16">
      <span class="p-2 text-primary bg-background rounded-lg">Features</span>
      <p class="sub-heading mt-2">Cutting-edge features for advanced analytics</p>
      <p class="subtext w-1/2 mt-8 mx-auto">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
      <img src="/img/landing/content.png" alt="" class="mt-8"/>
    </div>
    <div class="flex gap-24 w-5/6 mx-auto">
        <div v-for="(item,index) in featureAnalysisListItem" :key="index">
          <landing-feature-analysis-item :icon="item.icon" :title="item.title" :content="item.content"/>
        </div>
    </div>
  </section>
</template>
<script setup lang="ts">
type featureAnalysisItem = {
  icon:string,
  title:string,
  content:string
}
const featureAnalysisListItem:Ref<Array<featureAnalysisItem>> = ref([
  {
    icon: 'uil:arrow-right',
    title: 'Share team inboxes',
    content: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
  },
  {
    icon: 'uil:arrow-right',
    title: 'Share team inboxes',
    content: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
  },
  {
    icon: 'uil:arrow-right',
    title: 'Share team inboxes',
    content: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
  },
])
</script>
