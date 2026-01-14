<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600 max-w">
        Or
        <a href="/register" class="font-medium text-blue-600 hover:text-blue-500"> create an account </a>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="submit">
          <div>
            <BaseInput
              id="email"
              name="email"
              label="Email address"
              type="email"
              autocomplete="email"
              placeholder="Enter your email"
              v-model="form.email"
            />

            <BaseInput
              id="password"
              name="password"
              label="Password"
              type="password"
              autocomplete="current-password"
              placeholder="Enter your password"
              v-model="form.password"
            />
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                v-model="form.remember"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-gray-100 text-gray-500"> Or continue with </span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-3 gap-3">
            <a
              v-for="provider in providers"
              :key="provider.name"
              :href="provider.href"
              class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <img :src="provider.icon" :alt="provider.name" :class="provider.iconClass" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import BaseInput from '@/components/ui/BaseInput.vue'

const providers = [
  {
    name: 'Facebook',
    href: '#',
    icon: 'https://www.svgrepo.com/show/512120/facebook-176.svg',
    iconClass: 'h-5 w-5',
  },
  {
    name: 'Twitter',
    href: '#',
    icon: 'https://www.svgrepo.com/show/513008/twitter-154.svg',
    iconClass: 'h-5 w-5',
  },
  {
    name: 'Google',
    href: '#',
    icon: 'https://www.svgrepo.com/show/506498/google.svg',
    iconClass: 'h-5 w-5',
  },
]

const form = reactive({
  email: '',
  password: '',
  remember: false,
})

function submit() {
  console.log('Form data:', { ...form })
}
</script>
<style scoped></style>
