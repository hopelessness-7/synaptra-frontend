<template>
  <header
    class="w-full h-16 bg-white shadow flex items-center justify-between px-6 sticky top-0 z-10"
  >
    <!-- Search -->
    <div class="relative w-1/3 max-w-xs">
      <input
        type="text"
        placeholder="Search..."
        class="pl-10 pr-4 py-2 w-full rounded-lg bg-gray-100 focus:ring-2 focus:ring-indigo-400 text-sm"
      />
    </div>

    <!-- Right -->
    <div class="flex items-center space-x-4 relative">
      <div class="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-mono rounded-full">
        {{ time }}
      </div>

      <button class="btn-secondary btn-sm">Start Work</button>

      <div class="relative">
        <button
          @click="toggleNotifications"
          v-click-outside="closeNotifications"
          class="text-gray-600 hover:text-indigo-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        <div
          v-if="showNotifications"
          class="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden z-50"
        >
          <div class="p-4 text-sm">
            <p class="font-semibold mb-2">Notifications</p>
            <ul class="space-y-2">
              <li>You have 3 new tasks</li>
              <li>Project update: Q3 Launch</li>
              <li>New comment on API Board</li>
            </ul>
          </div>
          <div class="border-t px-4 py-2 text-xs text-gray-500 bg-gray-50 flex justify-between">
            <a href="#" class="hover:underline">Settings</a>
            <a href="#" class="hover:underline">View All</a>
          </div>
        </div>
      </div>

      <!-- Profile -->
      <div class="relative">
        <button @click="open = !open" class="flex items-center space-x-2">
          <img :src="avatarUrl" class="w-8 h-8 rounded-full border-2 border-indigo-500" />
        </button>

        <div v-if="open" class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow text-sm">
          <RouterLink class="block px-4 py-2 hover:bg-gray-100" to="/profile"> Profile </RouterLink>
          <button
            @click="logout"
            class="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// import { logout } from '@/api/auth/api.js'

const open = ref(false)
const time = ref('')

const avatarUrl = 'https://ui-avatars.com/api/?name=User'

onMounted(() => {
  setInterval(() => {
    time.value = new Date().toLocaleTimeString()
  }, 1000)
})

const showNotifications = ref(false)

const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value
}

const closeNotifications = () => {
  showNotifications.value = false
}
</script>
