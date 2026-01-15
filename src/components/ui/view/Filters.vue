<template>
  <div class="flex flex-wrap items-center gap-3 p-3 rounded-lg bg-white">
    <!-- Search -->
    <div class="relative">
      <input v-model="local.search" type="text" placeholder="Search..." class="filter-input" />
    </div>

    <!-- Custom filters -->
    <slot />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
})

const emit = defineEmits(['update:modelValue'])

const local = ref({ ...props.modelValue })

watch(local, () => emit('update:modelValue', local.value), { deep: true })
</script>
<style lang="scss" scoped>
.filter-input {
  @apply w-56
  px-3 py-2
  text-sm
  rounded-md
  border
  border-gray-200
  bg-white
  text-gray-800
  placeholder-gray-400
  outline-none
  transition;
}

.filter-input:focus {
  border-color: var(--color-focus);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-focus) 30%, transparent);
}
</style>
