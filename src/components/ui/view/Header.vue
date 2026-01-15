<template>
  <div class="w-full flex items-center justify-between">
    <!-- Left -->
    <div class="space-y-0.5">
      <h1 class="text-xl font-semibold text-gray-900">
        {{ title }}
      </h1>

      <p v-if="subtitle" class="text-sm text-gray-400">
        {{ subtitle }}
      </p>
    </div>

    <!-- Right -->
    <div class="flex items-center gap-2">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
})
</script>
