<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const { count } = useCounterStore();

</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ count }}</div>
  </div>
</template>

<style></style>
