<template>
  <div class="flex min-h-screen bg-gray-50 text-gray-800">
    <!-- Sidebar -->
    <aside
      class="w-60 bg-gradient-to-b from-indigo-700 to-purple-700 text-white hidden md:flex flex-col sticky top-0 h-screen"
    >
      <div class="p-6 flex flex-col items-center">
        <span class="font-bold text-xl select-none">Synaptra</span>
      </div>

      <div class="flex-1"></div>

      <nav class="space-y-2 w-full">
        <RouterLink
          v-for="item in menu"
          :key="item.name"
          :to="item.to"
          class="flex items-center w-full px-4 py-2 space-x-3 hover:bg-indigo-600 rounded-lg transition"
        >
          <img :src="item.icon" class="h-5 w-5" :alt="item.name" />
          <span>{{ item.name }}</span>
        </RouterLink>
      </nav>

      <div class="flex-1"></div>

      <div class="w-full px-4 pb-6">
        <button
          @click="logout"
          class="flex justify-center items-center w-full space-x-2 px-4 py-2 hover:bg-indigo-600 transition rounded-lg"
        >
          <img src="../assets/icon/logout.svg" class="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>

    <!-- Main -->
    <div class="flex-1 flex flex-col">
      <Header />

      <main class="flex-1 p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/layout/Header.vue'
import { RouterLink } from 'vue-router'
import { computed } from 'vue'
import dashboardIcon from '@/assets/icon/dashboard.svg'
import boardsIcon from '@/assets/icon/boards.svg'
import projectsIcon from '@/assets/icon/projects.svg'
import tasksIcon from '@/assets/icon/tasks.svg'

// import { logout } from '@/api/auth.api'

// eslint-disable-next-line vue/return-in-computed-property
const logout = computed(() => {
  console.log('logout')
})

const menu = [
  { name: 'Dashboard', to: '/dashboard', icon: dashboardIcon },
  { name: 'Projects', to: '/projects', icon: boardsIcon },
  { name: 'Boards', to: '/boards', icon: projectsIcon },
  { name: 'Tasks', to: '/tasks', icon: tasksIcon },
]
</script>
