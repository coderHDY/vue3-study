import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "@/assets/base.css";
import "vuetify/styles";
import i18n from "./i18n";
import "@mdi/font/css/materialdesignicons.min.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import permission from "./utils/permision";

const vuetify = createVuetify({
	components,
	directives,
});

const app = createApp(App);
app.use(permission);

app.use(createPinia());
app.use(vuetify);
app.use(router);
i18n(app).mount("#app");
