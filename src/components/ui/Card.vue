<template>
  <div class="bg-white rounded-xl border p-4 hover:shadow transition">
    <slot :item="item" />
  </div>
</template>
<script setup>
defineProps({
  item: Object,
})
</script>
