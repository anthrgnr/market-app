import { Capacitor } from "@capacitor/core";
const platform = Capacitor.getPlatform();

interface State {
  isIOS: String,
  isWeb: String,
  lang: String
};

const state = () => ({
  isIOS: platform === "ios",
  isWeb: platform === "web",
  lang: 'EN'
});

const mutations = {
  setLang: (state: State, payload: { lang: string }) => {
    state.lang = payload.lang
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
