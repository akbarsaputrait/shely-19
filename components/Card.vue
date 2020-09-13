<template>
  <div class="w-full max-w-sm rounded overflow-hidden shadow-lg bg-blue-sky-300 dark:bg-blue-sky-600">
    <div class="p-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-base">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description']
}
</script>
