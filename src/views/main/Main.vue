<template>
  <AppLayout>
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Left -->
      <div class="flex-1 space-y-8">
        <section>
          <h2 class="text-2xl font-semibold mb-2">Welcome back, {{ user.name }}!</h2>
          <p class="text-gray-600">You have {{ stats.today }} tasks due today.</p>
        </section>

        <!-- Boards -->
        <section>
          <h3 class="text-xl font-semibold mb-4">Your Boards</h3>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="board in boards"
              :key="board.id"
              class="bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <div
                class="h-32 bg-indigo-600 flex items-center justify-center text-white text-xl font-semibold"
              >
                {{ board.title.slice(0, 2) }}
              </div>
              <div class="p-4">
                <h4 class="font-bold text-lg">{{ board.title }}</h4>
                <p class="text-sm text-gray-500">Tasks: {{ board.tasks }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Right -->
      <aside class="w-full lg:w-80 space-y-8">
        <section class="bg-white rounded-xl shadow p-4">
          <h3 class="text-xl font-semibold mb-4">Your Stats</h3>
          <div class="grid grid-cols-2 gap-4 text-center">
            <div>
              <p class="text-2xl font-bold">{{ stats.completed }}</p>
              <p class="text-sm text-gray-500">Tasks Closed</p>
            </div>
            <div>
              <p class="text-2xl font-bold">{{ stats.projects }}</p>
              <p class="text-sm text-gray-500">Projects</p>
            </div>
          </div>
        </section>
      </aside>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "@/layouts/App.vue"

const user = { name: 'User' }

const stats = {
  today: 3,
  completed: 42,
  projects: 5,
}

const boards = [
  { id: 1, title: 'API', tasks: 12 },
  { id: 2, title: 'Frontend', tasks: 8 },
]
</script>
