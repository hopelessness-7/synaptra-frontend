import { ref } from 'vue'

export function useEntityList(fetcher) {
  const items = ref([])
  const loading = ref(false)

  const pagination = ref({
    page: 1,
    perPage: 10,
    total: 0,
  })

  const filters = ref({})

  async function fetch() {
    loading.value = true

    try {
      const { data, meta } = await fetcher({
        page: pagination.value.page,
        perPage: pagination.value.perPage,
        filters: filters.value,
      })

      items.value = data
      pagination.value.total = meta.total
    } finally {
      loading.value = false
    }
  }

  function setPage(page) {
    pagination.value.page = page
    fetch()
  }

  function setFilters(newFilters) {
    filters.value = newFilters
    pagination.value.page = 1
    fetch()
  }

  return {
    items,
    loading,
    pagination,
    filters,
    fetch,
    setPage,
    setFilters,
  }
}
