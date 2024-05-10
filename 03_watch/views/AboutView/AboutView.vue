<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";

const nav = useRouter();


const $counter = useCounterStore();

</script>

<template>
	<div>
		<div>{{ $counter.count }}</div>
		<div class="transBtn">
			<button @click="$counter.increment()">+</button>
			<button @click="nav.push('/')">jump to home</button>
		</div>
	</div>
</template>

<style scoped>
.transBtn {
	margin-top: 10px;
	button {
		margin-right: 10px;
		border: 1px solid #000;
		border-radius: 5px;
		padding: 5px 10px;
		cursor: pointer;
		background-color: #dbe4dc;
	}
}
</style>
