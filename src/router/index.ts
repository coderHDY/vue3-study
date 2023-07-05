import { createRouter } from "vue-router";
import { routeDefault, routeLanguageProvider } from "@/utils/constance";
import LanguageProvider from "@/views/LanguageProvider/LanguageProvider.vue";
import ErrorView from "@/views/ErrorView/ErrorView.vue";
import webHistory from "@/utils/webHistory";

const router = createRouter({
	history: webHistory,
	routes: [
		{
			path: "/",
			redirect: routeDefault,
		},
		{
			path: routeLanguageProvider,
			component: LanguageProvider,
			children: [
				{
					path: "login",
					component: () => import("@/views/LoginView/LoginView.vue"),
				},
			],
		},
		{
			path: "/:w+",
			component: ErrorView,
		},
	],
});

export default router;
