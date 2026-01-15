<template>
  <div class="w-full space-y-2">
    <div
      class="grid text-xs font-semibold text-gray-500 uppercase px-4 py-2 border-b"
      :style="gridStyle"
    >
      <Header v-for="col in columns" :key="col.key" :column="col" />
    </div>

    <!-- Rows -->
    <div v-if="loading" class="p-4 text-gray-500">Loading...</div>

    <Empty v-else-if="rows.length === 0" title="Нет данных" description="Здесь пока ничего нет" />

    <div v-else class="divide-y">
      <Row
        v-for="row in rows"
        :key="row[rowKey]"
        :row="row"
        :columns="columns"
        :grid-style="gridStyle"
      >
        <template v-for="col in columns" #[`cell-${col.key}`]="slotProps">
          <slot :name="`cell-${col.key}`" v-bind="slotProps" />
        </template>
      </Row>
    </div>

    <div v-if="pagination && totalPages > 1" class="flex items-center justify-between px-4 py-3">
      <span class="text-sm text-gray-400"> Page {{ pagination.page }} from {{ totalPages }} </span>

      <div class="flex gap-2">
        <button
          class="btn-secondary"
          :disabled="pagination.page === 1"
          @click="changePage(pagination.page - 1)"
        >
          Back
        </button>

        <button
          class="btn-secondary"
          :disabled="pagination.page === totalPages"
          @click="changePage(pagination.page + 1)"
        >
          Forward
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Row from './Row.vue'
import Header from './Header.vue'
import { computed } from 'vue'

const props = defineProps({
  columns: Array,
  rows: Array,
  loading: Boolean,
  rowKey: {
    type: String,
    default: 'id',
  },
  pagination: {
    type: Object,
    default: null,
  },
})

const gridStyle = {
  gridTemplateColumns: props.columns.map((c) => (c.grow ? `${c.grow}fr` : '1fr')).join(' '),
}

const emit = defineEmits(['page-change'])
computed(() => {
  return props.columns.map((col) => (col.grow ? `${col.grow}fr` : '1fr')).join(' ')
})

const totalPages = computed(() => {
  if (!props.pagination) return 1
  return Math.ceil(props.pagination.total / props.pagination.perPage)
})

function changePage(page) {
  if (page < 1 || page > totalPages.value) return
  emit('page-change', page)
}
</script>
