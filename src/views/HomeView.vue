<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { RouterLink, RouterView } from 'vue-router'

const { increment } = useCounterStore();

</script>

<template>
	<h1>Home Page</h1>
	<div>
		<button @click="increment">+</button>
	</div>
	<RouterView />
</template>
