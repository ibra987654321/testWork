import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";

// modules--------------
import profile from "@/store/profile";
import {environment} from "@/environments/environment";
import {API, CANDIDATE, CANDIDATE_TYPE, USER} from "@/helpers/endPoints";
import {getId, setCandidateType, setId, setToken} from "@/helpers/helpers";
import testing from "@/store/testing";
import video from "@/store/video";

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
            routeTitle: '',
            action: '',
            actionTitle: '',
            list: [],
            description: '',
            type: {
                strong: false,
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
        successData: '',
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
        },
        setSuccess(state, data) {
            state.successData = data
        }
    },
    actions: {
        candidateType({commit}) {
            const candidateTypes = axios(`${environment.prodApi + API + CANDIDATE_TYPE}/allActiveAndExternal`, {
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
                    if (res.data.stage === 'completed') {
                       axios(`${environment.prodApi + API + CANDIDATE}/success/${res.data.candidateId}`, {
                            method: 'GET',
                        }).then(r => {
                            state.modals.popup = true
                            state.modals.type.default = false
                            state.modals.type.action = false
                            state.modals.type.withRoute = false
                            state.modals.type.strong = false
                            state.modals.type.description = false
                            state.modals.type.withList = false
                            state.modals.type.withOutBtn = true
                            state.modals.img = require('../assets/beeline/Candidate.png')
                            state.modals.description = 'Еще раз спасибо, данные рекрутера'
                            state.modals.title = r.data.title
                            state.modals.text = r.data.text
                        })
                    } else if (res.data.stage === 'failed') {
                        state.modals.popup = true
                        state.modals.type.default = false
                        state.modals.type.action = false
                        state.modals.type.withRoute = false
                        state.modals.type.strong = false
                        state.modals.type.description = false
                        state.modals.type.withList = false
                        state.modals.type.withOutBtn = true
                        state.modals.img = require('../assets/beeline/failed.png')
                        state.modals.title = 'Сожалеем,Вы не набрали проходной балл'
                        state.modals.text = 'Никогда не отчаивайтесь. Если план "А" не сработал, у Вас есть еще 32 буквы, чтобы попробовать'
                    } else {
                        commit('setIterator', res.data.index)
                        setToken(res.data.token)
                        setId(res.data.candidateId)
                        setCandidateType(res.data.candidateTypeId)
                        router.push({ name: res.data.stage })
                    }

                }
            }).catch(e => {
                state.loading = false
                state.modals.popup = true
                state.modals.btnText = "Вернуться назад"
                state.modals.type.default = true
                state.modals.type.action = false
                state.modals.type.withRoute = false
                state.modals.type.strong = false
                state.modals.type.description = false
                state.modals.type.withList = false
                state.modals.type.withOutBtn = false
                if (e.response.status === 403 || 401) {
                    state.modals.title = e.response.data
                } else {
                    state.modals.title = 'Произошла серверная ошибка'
                }
            })
        },
        getSuccess() {
            const date = axios(`${environment.prodApi + API + CANDIDATE}/success/${getId()}`, {
                method: 'GET',
            }).then(r => r.data)

            return date
        },
    },
    getters: {
        error: state => state.error
    },
    modules: {
        profile,
        testing,
        video
    }
});
