import { Capacitor } from "@capacitor/core";
const platform = Capacitor.getPlatform();

const state = () => ({
  isIOS: platform === "ios",
  isWeb: platform === "web",
  lang: 'EN'
});

export default {
  namespaced: true,
  state
};
