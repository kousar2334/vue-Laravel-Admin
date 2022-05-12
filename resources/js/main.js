import "core-js/stable";
import Vue from "vue";
import App from "./App";
import router from "./router";
import CoreuiVue from "@coreui/vue";
import VueFlashMessage from "vue-flash-message";
import { iconsSet as icons } from "./assets/icons/icons.js";
import store from "./store/index";
import vSelect from "vue-select";
//Component
Vue.component("v-select", vSelect);

Vue.config.performance = true;
Vue.use(CoreuiVue);
Vue.component("v-select", vSelect.vSelect);
Vue.prototype.$log = console.log.bind(console);
import VueMeta from "vue-meta";
Vue.use(VueMeta);
//flash Message
require("vue-flash-message/dist/vue-flash-message.min.css");
Vue.use(VueFlashMessage, {
    messageOptions: {
        timeout: 4000,
        important: false,
        autoEmit: true,
        pauseOnInteract: true
    }
});
new Vue({
    el: "#app",
    router,
    store,
    icons,
    template: "<App/>",
    components: {
        App
    }
});
