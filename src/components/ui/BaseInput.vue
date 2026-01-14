<template>
  <div>
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
  </div>

  <div class="mt-1">
    <input
      :id="id"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="inputClasses"
    />
  </div>
  <p v-if="error" class="mt-1 text-sm text-red-600">
    {{ error }}
  </p>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  id: String,
  name: String,
  label: String,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: String,
  autocomplete: String,
  error: String,
})

defineEmits(['update:modelValue'])

const inputClasses = computed(() => [
  'appearance-none rounded-md relative block w-full px-3 py-2',
  'border placeholder-gray-500 text-gray-900 sm:text-sm',
  'focus:outline-none focus:z-10',
  props.error
    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
    : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500',
])
</script>
<style scoped></style>
