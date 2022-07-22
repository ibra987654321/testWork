import axios from "axios";
import { environment } from '@/environments/environment'
import {API, KNOWLEDGE_TYPE} from "@/helpers/endPoints";
export default {
    state: {

    },
    mutations: {},
    actions: {
        getKnowledge(store) {
            const data = axios(`${environment.prodApi + API + KNOWLEDGE_TYPE}/all/7`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(r => r.data)

            return data
        }
    },
}