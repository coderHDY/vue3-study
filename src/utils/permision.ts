const permission = {
	async mounted(el: any, binding: any) {
		const { value } = binding;
		const permissions = JSON.parse(localStorage.getItem("permission") || "[]");
		if (permissions.includes(value)) {
			return;
		} else {
			el.parentNode && el.parentNode.removeChild(el);
		}
	},
};

export default {
	install(Vue: any) {
		Vue.directive("permission", permission);
	},
};
