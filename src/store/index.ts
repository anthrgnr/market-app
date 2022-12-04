import { createStore } from "vuex";
import settings from "./modules/settings";
import products from "./modules/products";

export default createStore({
  modules: {
    settings,
    products
  },
});
