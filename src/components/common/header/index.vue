<template>
  <div
    class="flex justify-between items-center gap-2 py-6 border-b-2 border-background"
  >
    <div class="flex gap-8 items-center">
      <div class="flex gap-4 items-center">
        <img src="Logomark.png" alt="" />
        <p class="font-semibold">Castea</p>
      </div>
      <div class="text-gray flex gap-6">
        <nuxt-link to="/"> Trang chủ </nuxt-link>
        <nuxt-link to="/tinh-nang">
          <div>
            <p>Tính năng</p>
          </div>
        </nuxt-link>
        <nuxt-link to="/bang-gia"> Bảng giá </nuxt-link>
      </div>
    </div>
    <nuxt-link to="/login">
      <div>
        <common-button type="primary" size="text_secondary">
          Trải nghiệm
        </common-button>
      </div>
    </nuxt-link>
  </div>
</template>
<script setup></script>
