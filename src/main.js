import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import router from "./routes";
import firebase from "firebase";
import "./firebase/init";

Vue.config.productionTip = false;

Vue.use(VueResource);

let app;
firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      render: (h) => h(App),
      router: router,
    }).$mount("#app");
  }
});
