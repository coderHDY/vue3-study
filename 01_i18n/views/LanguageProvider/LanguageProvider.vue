<script setup lang="ts">
import { LanguageTypes } from "@/interface/tools";
import { LANG } from "@/utils/constance";
import { provide } from "vue";
import { RouterView, useRoute } from "vue-router";

const Route = useRoute();
provide<LanguageTypes>(LANG, Route.params.lang as LanguageTypes);
</script>

<template>
	<!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
	<RouterView />
</template>
