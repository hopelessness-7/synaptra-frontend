<template>
  <div class="flex flex-col items-center justify-center py-16 text-center">
    <div class="text-lg font-medium text-gray-300">
      {{ title }}
    </div>
    <div v-if="description" class="mt-2 text-sm text-gray-500">
      {{ description }}
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: 'Пусто',
  },
  description: {
    type: String,
    default: '',
  },
})
</script>
