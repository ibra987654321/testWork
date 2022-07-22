import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";

// modules--------------
import profile from "@/store/profile";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        error: null,
        landing: router.currentRoute.path,
        modals: {
            error: false,
            mini: false,
            text:'',
            type: {
                success: false,
                error: false
            }
        }
    },
    mutations: {
        setError(state, error) {
            state.error = error;
        },
        clearError(state) {
            state.error = null;
        }
    },
    actions: {

    },
    getters: {
        error: state => state.error
    },
    modules: {
        profile,
    }
});