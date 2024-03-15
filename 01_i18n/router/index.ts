import { createRouter } from "vue-router";
import { routeDefault, routeLanguageProvider } from "@/utils/constance";
import LanguageProvider from "@/views/LanguageProvider/LanguageProvider.vue";
import ErrorView from "@/views/ErrorView/ErrorView.vue";
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
			path: "/:w+",
			component: ErrorView,
		},
	],
});

export default router;
