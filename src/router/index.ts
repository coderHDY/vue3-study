import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			redirect: "/en-US",
		},
		{
			path: "/:path(zh-CN|es-ES|en-US)",
			name: "home",
			component: HomeView,
			children: [
				{
					path: "about",
					name: "about",
					component: () => import("../views/AboutView.vue"),
				},
			],
		},
	],
});

export default router;
