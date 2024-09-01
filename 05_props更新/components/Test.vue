<template>
	<div>{{ $props.msg }}</div>
</template>
<script setup>
import { defineProps, watch } from "vue";
const $props = defineProps({
	msg: Number,
});

console.log("组件使用调用", $props.msg);

watch($props, (newVal) => {
	console.log("watch依赖", newVal.msg);
});
</script>
<style scoped></style>
