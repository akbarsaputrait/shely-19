<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-blue-sky-300 dark:bg-blue-sky-600">
    <div class="p-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-base">
        {{ description }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description']
}
</script>
