import Vue from "vue";
import Vuex from "vuex";

import account from "./account";
import general from "./general";
import tokens from "./tokens";

Vue.use(Vuex);

export default function() {
  const Store = new Vuex.Store({
    modules: {
      general,
      account,
      tokens
    },

    strict: process.env.DEV
  });

  return Store;
}
