<script setup lang="ts">
import { ref, watch, onMounted } from "vue";

const props = defineProps({
	modelValue: {
		type: Date,
		required: true,
	},
});
const emit = defineEmits(["update:modelValue"]);

const years = ref<any[]>([]);
const months = ref<any[]>([]);
const days = ref<any[]>([]);
const selectedYear = ref(props.modelValue.getFullYear());
const selectedMonth = ref(props.modelValue.getMonth());
const selectedDay = ref(props.modelValue.getDate());
console.log(props.modelValue.getDate());

const updateYears = () => {
	const currentYear = new Date().getFullYear();
	const startYear = currentYear - 100;
	const endYear = currentYear + 100;
	years.value = Array.from({ length: endYear - startYear }, (_, i) => startYear + i);
};

const updateMonths = () => {
	months.value = Array.from({ length: 12 }, (_, i) => `${i + 1}`);
};

const updateDays = () => {
	const year = selectedYear.value;
	const month = selectedMonth.value + 1;
	const daysInMonth = new Date(year, month, 0).getDate();
	days.value = Array.from({ length: daysInMonth }, (_, i) => i + 1);
};

const selectYear = (year: number, $event: any) => {
	$event.target.scrollIntoView({
		block: "center",
		inline: "center",
	});
	selectedYear.value = year;
	updateDays();
	emit("update:modelValue", new Date(selectedYear.value, selectedMonth.value, selectedDay.value));
};

const selectMonth = (month: number, $event: any) => {
	$event.target.scrollIntoView({
		block: "center",
		inline: "center",
	});
	selectedMonth.value = month;
	updateDays();
	emit("update:modelValue", new Date(selectedYear.value, selectedMonth.value, selectedDay.value));
};

const selectDay = (day: number, $event: any) => {
	$event.target.scrollIntoView({
		block: "center",
		inline: "center",
	});
	console.log(day);
	selectedDay.value = day;
	console.log(new Date(selectedYear.value, selectedMonth.value, selectedDay.value));
	emit("update:modelValue", new Date(selectedYear.value, selectedMonth.value, selectedDay.value));
};

watch(
	() => props.modelValue,
	newValue => {
		selectedYear.value = newValue.getFullYear();
		selectedMonth.value = newValue.getMonth();
		selectedDay.value = newValue.getDate();
		updateDays();
	},
);

updateYears();
updateMonths();
updateDays();

// 滚动选择
const yearRef = ref();
const monthRef = ref();
const dateRef = ref();
const yearTimeout = ref();
const monthTimeout = ref();
const dateTimeout = ref();
const onYearScroll = (e: any) => {
	clearTimeout(yearTimeout.value);
	yearTimeout.value = setTimeout(() => {
		const ITEM_HEIGHT = 30;
		const { scrollTop, children } = e.target;
		const pickNum = Math.floor((scrollTop + ITEM_HEIGHT) / ITEM_HEIGHT);
		children[pickNum]?.click?.();
	}, 300);
};
const onMonthScroll = (e: any) => {
	clearTimeout(monthTimeout.value);
	monthTimeout.value = setTimeout(() => {
		const ITEM_HEIGHT = 30;
		const { scrollTop, children } = e.target;
		const pickNum = Math.floor((scrollTop + ITEM_HEIGHT) / ITEM_HEIGHT);
		children[pickNum]?.click?.();
	}, 300);
};
const onDateScroll = (e: any) => {
	clearTimeout(dateTimeout.value);
	dateTimeout.value = setTimeout(() => {
		const ITEM_HEIGHT = 30;
		const { scrollTop, children } = e.target;
		const pickNum = Math.floor((scrollTop + ITEM_HEIGHT) / ITEM_HEIGHT);
		children[pickNum]?.click?.();
	}, 300);
};
onMounted(() => {
	yearRef.value.children[101]?.click?.();
	monthRef.value.children[1]?.click?.();
	dateRef.value.children[1]?.click?.();
});
</script>

<template>
	<div class="date-picker">
		<div class="date-picker-item">
			<div class="date-picker-wheel" @scroll="onYearScroll" ref="yearRef">
				<div class="date-picker-option" key="null"></div>
				<div
					class="date-picker-option"
					v-for="year in years"
					:key="year"
					:class="{ active: year === selectedYear }"
					@click="selectYear(year, $event)"
				>
					{{ year }}
				</div>
				<div class="date-picker-option" key="null"></div>
			</div>
		</div>
		<div class="date-picker-item">
			<div class="date-picker-wheel" @scroll="onMonthScroll" ref="monthRef">
				<div class="date-picker-option" key="null" />
				<div
					class="date-picker-option"
					v-for="month in months"
					:key="month"
					:class="{ active: month - 1 === selectedMonth }"
					@click="selectMonth(month - 1, $event)"
				>
					{{ month }}
				</div>
				<div class="date-picker-option" key="null"></div>
			</div>
		</div>
		<div class="date-picker-item">
			<div class="date-picker-wheel" @scroll="onDateScroll" ref="dateRef">
				<div class="date-picker-option" key="null" />
				<div
					class="date-picker-option"
					v-for="day in days"
					:key="day"
					:class="{ active: day === selectedDay }"
					@click="selectDay(day, $event)"
				>
					{{ day }}
				</div>
				<div class="date-picker-option" key="null"></div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.date-picker {
	margin-top: 4rem;
	position: relative;
	display: flex;
	justify-content: space-around;
	height: 100px;
	overflow: hidden;
}

.date-picker-item {
	flex: 1;
	text-align: center;
	margin-right: 20px;
	height: 100%;
	overflow: hidden;
}
.date-picker-wheel {
	display: flex;
	flex-direction: column;
	height: 90px;
	line-height: 30px;
	overflow-y: auto;
	scroll-snap-type: y mandatory;
	overscroll-behavior: none;
}
.date-picker-wheel::-webkit-scrollbar {
	display: none;
}

.date-picker-option {
	font-size: 18px;
	min-height: 30px;
	height: 30px;
	line-height: 30px;
	cursor: pointer;
	scroll-snap-align: center;
	overscroll-behavior: none;
}

.date-picker-option {
	color: #376b54;
}
.date-picker-option.active {
	color: #ffffff;
}
</style>
