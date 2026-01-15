<template>
  <div
    class="grid items-center px-4 py-3 hover:bg-gray-50 transition cursor-pointer"
    :style="gridStyle"
  >
    <div v-for="col in columns" :key="col.key" :class="alignClass(col)" class="text-sm">
      <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]">
        {{ row[col.key] }}
      </slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  row: Object,
  columns: Array,
  gridStyle: Object,
})
const alignClass = (col) => {
  if (col.align === 'right') return 'text-right'
  if (col.align === 'center') return 'text-center'
  return 'text-left'
}
</script>
