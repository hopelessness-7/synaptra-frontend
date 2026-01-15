<template>
  <section class="space-y-4">
    <!-- Header + actions -->
    <div class="flex items-start justify-between">
      <EntityHeader :title="title" :subtitle="subtitle">
        <template #actions>
          <slot name="actions" />
        </template>
      </EntityHeader>
    </div>

    <!-- Filters -->
    <Filters @update:modelValue="emit('filters-change', $event)">
      <slot name="filters" />
    </Filters>

    <!-- Content -->
    <div class="space-y-4">
      <slot />
    </div>
  </section>
</template>
<script setup>
import EntityHeader from './Header.vue'
import Filters from './Filters.vue'

defineProps({
  title: String,
  subtitle: String,
})

const emit = defineEmits(['filters-change'])
</script>
