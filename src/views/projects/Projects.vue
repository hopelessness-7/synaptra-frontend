<template>
  <AppLayout>
    <View title="Projects" subtitle="All projects you have access to">
      <!-- actions -->
      <template #actions>
        <button class="btn-primary">Create project</button>
      </template>

      <!-- filters -->
      <template #filters>
        <!-- filters UI -->
      </template>

      <!-- data -->
      <Table :columns="columns" :rows="projects" :loading="loading" row-key="id">
        <template #cell-name="{ row }">
          <RouterLink
            :to="`/projects/${row.id}`"
            class="text-indigo-600 font-medium hover:underline"
          >
            {{ row.name }}
          </RouterLink>
        </template>

        <template #cell-actions="{ row }">
          <button class="text-gray-400 hover:text-indigo-600">⋯</button>
        </template>
      </Table>
    </View>
  </AppLayout>
</template>
<script setup>
import View from '@/components/ui/view/View.vue'
import Table from '@/components/ui/dataTable/Table.vue'
import AppLayout from '@/layouts/App.vue'
import { ref } from 'vue'

const columns = [
  {
    key: 'name',
    label: 'Name',
    grow: 2,
  },
  {
    key: 'owner',
    label: 'Owner',
  },
  {
    key: 'status',
    label: 'Status',
  },
  {
    key: 'actions',
    label: '',
    align: 'right',
  },
]

const projects = ref([
  {
    id: 1,
    name: 'Test',
    owner: 'Test',
    status: 'active',
  },
])

const loading = ref(false)
</script>
