import { createApp } from "vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import store from './store'
import App from "./App.vue";

import "./index.css";

library.add(faAngleUp)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).mount("#app");
