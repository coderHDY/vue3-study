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
					v-for="(month, index) in months"
					:key="month"
					:class="{ active: index === selectedMonth }"
					@click="selectMonth(index, $event)"
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
					v-for="(day, index) in days"
					:key="day"
					:class="{ active: index === selectedDay }"
					@click="selectDay(index, $event)"
				>
					{{ day }}
				</div>
				<div class="date-picker-option" key="null"></div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

const props = defineProps({
	value: {
		type: Date,
		required: true,
	},
});

const years = ref([]);
const months = ref([]);
const days = ref([]);
const selectedYear = ref(new Date().getFullYear());
const selectedMonth = ref(new Date().getMonth() + 1);
const selectedDay = ref(new Date().getDate());

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

const selectYear = (year, $event) => {
	$event.target.scrollIntoView({
		block: "center",
		inline: "center",
	});
	selectedYear.value = year;
	updateDays();
	// emit("input", new Date(selectedYear.value, selectedMonth.value, selectedDay.value));
};

const selectMonth = (month, $event) => {
	$event.target.scrollIntoView({
		block: "center",
		inline: "center",
	});
	selectedMonth.value = month;
	updateDays();
	// emit("input", new Date(selectedYear.value, selectedMonth.value, selectedDay.value));
};

const selectDay = (day, $event) => {
	$event.target.scrollIntoView({
		block: "center",
		inline: "center",
	});
	selectedDay.value = day;
	// emit("input", new Date(selectedYear.value, selectedMonth.value, selectedDay.value));
};

watch(
	() => props.value,
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
const onYearScroll = e => {
	clearTimeout(yearTimeout.value);
	yearTimeout.value = setTimeout(() => {
		const ITEM_HEIGHT = 30;
		const { scrollTop, children } = e.target;
		const pickNum = Math.floor((scrollTop + ITEM_HEIGHT) / ITEM_HEIGHT);
		children[pickNum]?.click?.();
	}, 300);
};
const onMonthScroll = e => {
	clearTimeout(monthTimeout.value);
	monthTimeout.value = setTimeout(() => {
		const ITEM_HEIGHT = 30;
		const { scrollTop, children } = e.target;
		const pickNum = Math.floor((scrollTop + ITEM_HEIGHT) / ITEM_HEIGHT);
		children[pickNum]?.click?.();
	}, 300);
};
const onDateScroll = e => {
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

<style scoped>
.date-picker {
	margin-top: 100px;

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
	overflow: auto;
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

.date-picker-option.active {
	color: #42b983;
}
</style>
