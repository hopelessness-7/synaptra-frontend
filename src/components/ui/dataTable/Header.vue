<template>
  <div class="px-1" :class="alignClass(column)">
    {{ column.label }}
  </div>
</template>

<script setup>
defineProps({
  column: Object,
})

const alignClass = (col) => {
  if (col.align === 'right') return 'text-right'
  if (col.align === 'center') return 'text-center'
  return 'text-left'
}
</script>
