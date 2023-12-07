<template>
  <div class="w-1/3 mx-auto">
    <img src="Logomark.png" alt="" class="mx-auto mt-12" />
    <div class="mt-8 text-center">
      <h1 class="sub-heading">Login in to your account</h1>
      <h2 class="subtext mt-2">Welcome back! Please enter your details.</h2>
    </div>
    <div class="w-full mt-8">
      <div class="mt-4">
        <label for="email" class="font-semibold">Email</label><br />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email"
          class="w-full border-gray border-[1px] rounded-lg p-2 mt-2 outline-none hover:border-primary focus:border-primary"
          v-model="email"
        />
      </div>
      <div class="mt-4">
        <label for="password" class="font-semibold">Password</label><br />
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          id="password"
          class="w-full border-gray border-[1px] rounded-lg p-2 mt-2 outline-none hover:border-primary focus:border-primary"
          v-model="password"
        />
      </div>
      <div class="flex justify-between mt-6">
        <div class="flex gap-2">
          <input type="checkbox" name="" id="" />
          <p class="font-semibold">Remember for 30 days</p>
        </div>
        <p class="font-semibold text-primary">Forgot password</p>
      </div>
      <div class="text-white bg-primary text-center p-2 rounded-lg mt-4 cursor-pointer" @click="signIn">
        Sign In
      </div>
      <div
        class="flex border-[1px] border-gray p-2 rounded-lg justify-center gap-4 mt-4 cursor-pointer"
      >
        <img src="/img/authen/Google.png" alt="" class="" />
        <p>Sign in with Google</p>
      </div>
      <div class="mt-8 text-center">
        <span class="subtext">Don't have an account?</span>
        <span class="font-semibold text-primary cursor-pointer"> Sign up</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const email:Ref<string> = ref("")
const password:Ref<string> = ref("")
const signIn = ()=>{
}
</script>
