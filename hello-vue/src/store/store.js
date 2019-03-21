import Vue from "vue"
import Vuex from "vuex"

import moduleA from "./modules/a"
import moduleB from "./modules/b"

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        moduleA,moduleB
    }
})