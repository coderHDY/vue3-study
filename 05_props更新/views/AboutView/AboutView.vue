<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import Test from "../../components/Test.vue";

const nav = useRouter();
const count = ref(0);

const add = () => {
	count.value++;
};
const del = async () => {
	count.value--;
};
</script>

<template>
	<div>
		<h1 id="count">{{ count }}</h1>
		<div>
			child:
			<Test :msg="count" />
		</div>
		<div class="transBtn">
			<div>
				<button @click="add">+1</button>
			</div>
			<div>
				<button @click="del">-1</button>
			</div>
			<div>
				<button @click="nav.push('/')">jump to home</button>
			</div>
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
		/* animation: bigger 1s infinite; */
	}
}
</style>
