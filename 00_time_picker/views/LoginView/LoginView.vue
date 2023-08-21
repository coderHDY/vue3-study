<script setup lang="ts">
import { ref, inject } from "vue";
import { loginPageText, LANG } from "@/utils/constance";
import { LanguageTypes } from "@/interface/tools";

const lang = inject(LANG) as LanguageTypes;
const { TOP_TIP } = loginPageText[lang];
</script>

<template>
	<div class="root">
		{{ TOP_TIP }}
		<v-btn>按钮</v-btn>
	</div>
</template>

<style scoped lang="less">
.root {
	width: 100vw;
	height: 100vh;
}
</style>
