import axios from "axios";
import { environment } from '@/environments/environment'
import {API, KNOWLEDGE_TYPE} from "@/helpers/endPoints";
import {getCandidateType} from "@/helpers/helpers";
import router from "@/router";
export default {
    state: {

    },
    mutations: {},
    actions: {
        getKnowledge(store) {
            const data = axios(`${environment.prodApi + API + KNOWLEDGE_TYPE}/all/${getCandidateType()}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(r => r.data)

            return data
        },
        submitForm(store, payload) {
            function navigate() {
                store.rootState.modals.popup = false
                store.rootState.modals.type.login = true
            }
            axios({
                method: 'POST',
                url: `${environment.prodApi + API}/candidate/save`,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    ...payload
                }
            }).then(res => {
                store.rootState.modals.type.action = true
                store.rootState.modals.type.withOutBtn = false
                store.rootState.modals.type.description = false
                store.rootState.modals.popup = true
                store.rootState.modals.title = 'Подтверждение'
                store.rootState.modals.text = `Мы отправили на почту код, подтвердите пожалуйста!`
                store.rootState.modals.btnText = 'Войти';
                store.rootState.modals.img = require('../assets/beeline/save.png');
                store.commit('setAction', navigate)

            })
        },
    },
}