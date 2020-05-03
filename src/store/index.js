import Vue from "vue";
import Vuex from "vuex";
import * as game from './modules/game.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    game
  }
});
