<script lang="ts" setup>
import { useCounterStore } from '@/store/count'
import { useServerData } from '@/hooks'
const counterStore = useCounterStore()
useServerData(() => {
  counterStore.increment()
})
</script>

<template>
  <div>ABOUT</div>
  <div id="count" @click="counterStore.increment()">
    {{ counterStore.count }}
  </div>
</template>
