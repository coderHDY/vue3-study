<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const { increment } = useCounterStore();

</script>

<template>
	<h1>Home Page</h1>
	<div>
		<button @click="increment">+</button>
	</div>
</template>
