<script setup lang="ts">
import { ref, watch, onMounted } from "vue";

const count = ref(0);

</script>

<template>
	<div>
		<div>{{ $t("hello") }}</div>
		<div class="transBtn">
			<button @click="$i18next.changeLanguage('zh')">中文</button>
			<button @click="$i18next.changeLanguage('en')">英文</button>
			<button @click="$i18next.changeLanguage('jp')">日语</button>
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
