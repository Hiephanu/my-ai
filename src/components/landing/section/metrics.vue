<template>
  <section id="metrics" name="metrics">
    <div class="mt-28 w-4/5 mx-auto">
      <div class="w-1/2">
        <p class="text-primary font-semibold">Launch faster</p>
        <p class="sub-heading mt-4">Build something great</p>
        <p class="subtext mt-4">
          We’ve done all the heavy lifting so you don’t have to — get all the
          data you need to launch and grow your business faster.
        </p>
      </div>
      <div class="flex gap-12 items-center mt-8">
        <div class="grid grid-cols-2 text-center gap-4">
          <div v-for="(item,index) in metricsItemArr" :key="index">
            <landing-metrics-item :heading="item.heading" :title="item.title" :content="item.content"/>
          </div>
        </div>
        <div class="w-3/5">
          <img src="\img\landing\Metrics.png" alt="" class=""/>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
type metricsItem = {
    heading:string,
    title:string,
    content:string
}
const metricsItemArr:Ref<Array<metricsItem>> = ref([
    {
        heading:'4,000+',
        title:'Global customers',
        content:'We’ve helped over 4,000 amazing global companies.'
    },
    {
        heading:'600%',
        title:'Return on investment',
        content:'Our customers have reported an average of ~600% ROI.'
    },
    {
        heading:'10k',
        title:'Global downloads',
        content:'Our app has been downloaded over 10k times.'
    },
    {
        heading:'200+',
        title:'5-star reviews',
        content:'We’re proud of our 5-star rating with over 200 reviews.'
    }
])
 </script>
