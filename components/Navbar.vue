<template>
  <div class="flex flex-row justify-between p-4 items-center">
    <div class="text-left">
      <h1 class="font-extrabold text-xl">LOREM IPSUM</h1>
      <h3 class="font-medium text-base">Dolor Sit Amet</h3>
    </div>
    <button v-if="$colorMode.preference === 'light'"
            class="bg-gray-900 hover:bg-gray-700 focus:bg-gray-800 text-white font-bold p-2 rounded-full"
            @click="$colorMode.preference = 'dark'">
      <component is="icon-dark"></component>
    </button>
    <button v-if="$colorMode.preference === 'dark'"
            class="bg-gray-300 hover:bg-gray-100 focus:bg-gray-200 text-gray-700 font-bold p-2 rounded-full"
            @click="$colorMode.preference = 'light'">
      <component is="icon-light"></component>
    </button>
  </div>
</template>

<script>
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'

export default {
  name: 'Navbar',
  components: {
    IconLight,
    IconDark,
  },
  data() {
    return {
      colors: ['light', 'dark']
    }
  },
  methods: {
    getClasses(color) {
      // Does not set classes on ssr preference is system (because we know them on client-side)
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
    }
  }
}
</script>
