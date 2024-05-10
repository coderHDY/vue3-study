import { createRouter } from "vue-router";
import ErrorView from "@/views/ErrorView/ErrorView.vue";
import AboutView from "@/views/AboutView/AboutView.vue";
import HomeView from "@/views/HomeView/HomeView.vue";
import webHistory from "@/utils/webHistory";

const router = createRouter({
	history: webHistory,
	routes: [
		{
			path: "/",
			component: HomeView,
		},
		{
			path: "/a/:xx",
			component: HomeView,
		},
		{
			path: "/about",
			component: AboutView,
		},
		{
			path: "/:w+",
			component: ErrorView,
		},
	],
});

export default router;
