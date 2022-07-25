import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";

// modules--------------
import profile from "@/store/profile";
import {environment} from "@/environments/environment";
import {API, CANDIDATE_TYPE, USER} from "@/helpers/endPoints";
import {setCandidateType, setId, setToken} from "@/helpers/helpers";
import testing from "@/store/testing";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        error: null,
        landing: router.currentRoute.path,
        loading: false,
        modals: {
            img: '',
            popup: false,
            title: '',
            text:'',
            btnText: '',
            route: '',
            action: '',
            list: [],
            description: '',
            type: {
                default: false,
                login: false,
                description: false,
                withOutBtn: false,
                withList: false,
                withRoute: false,
                action: false
            },
        },
        snacks: {
            snackbar: false,
            text: ``,
        },
        candidateType: '',
        candidateId: '',
        iterator: 0
    },
    mutations: {
        setError(state, error) {
            state.error = error;
        },
        clearError(state) {
            state.error = null;
        },
        setCandidate(state, data) {
            state.candidateType = data
        },
        setCandidateId(state, data) {
            state.candidateId = data
        },
        setAction(state, func) {
            state.modals.action = func
        },
        setIterator(state, count) {
            state.iterator = count
        }
    },
    actions: {
        candidateType({commit}) {
            const candidateTypes = axios(`${environment.prodApi + API + CANDIDATE_TYPE}/all`, {
                method: 'GET',
            }).then(r => {
                commit('setCandidate', r.data)
                return r.data
            })

            return candidateTypes
        },
        login({state, commit}, payload) {
            state.loading = true
            axios({
                method: 'POST',
                url: `${environment.prodApi + API + USER}/login`,
                data: {
                    ...payload
                }
            }).then(res => {
                if (res.data.token) {
                    commit('setIterator', res.data.index)
                    setToken(res.data.token)
                    setId(res.data.candidateId)
                    setCandidateType(res.data.candidateTypeId)
                    router.push({ name: res.data.stage })
                }
            }).catch(e => {
                state.loading = false
                state.modals.popup = true
                state.modals.type.withOutBtn = true
                if (e.response.status === 403 || 401) {
                    state.modals.title = e.response.data
                } else {
                    state.modals.title = 'Произошла серверная ошибка'
                }
            })
        },
        // knowledgeType() {
        //     const knowledgeType = axios(`${environment.authAPI + API + KNOWLEDGE_TYPE}/all/${getCandidateType()}`, {
        //         method: 'GET',
        //     }).then(r => r.data)
        //
        //     return knowledgeType
        // },
        // percentage() {
        //     const data = axios(`${environment.authAPI + API}/test/percentage/${getId()}`, {
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             Authorization: `Bearer_${getToken()}`,
        //         },
        //     }).then(r => r.data)
        //
        //     return data
        // }
    },
    getters: {
        error: state => state.error
    },
    modules: {
        profile,
        testing,
    }
});