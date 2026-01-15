<template>
  <div class="space-y-6">
    <div v-if="loading" class="text-gray-500">Loading...</div>

    <Empty v-else-if="items.length === 0" title="Нет данных" description="Здесь пока ничего нет" />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <EntityCard v-for="item in items" :key="item.id" :item="item">
        <slot name="card" :item="item" />
      </EntityCard>
    </div>
  </div>
</template>

<script setup>
import EntityCard from '@/components/ui/Card.vue'
import Empty from '@/components/ui/Empty.vue'

defineProps({
  title: String,
  subtitle: String,
  items: Array,
  loading: Boolean,
  search: String,
  filters: Object,
  emptyText: {
    type: String,
    default: 'Nothing here yet',
  },
})
</script>
