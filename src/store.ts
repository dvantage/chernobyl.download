import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import axios from 'axios';
import {IRootState} from '@/interfaces';


Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
    state:     {
        videoSources: [],
        server:       '',
    },
    mutations: {
        setServer(state: any, payload: any) {
            state.server = payload;
        },
        setSources(state: any, payload: any) {
            state.videoSources = payload;
        },
    },
    actions:   {
        async getSources({commit}, endpoint: string) {
            const request = await axios.get(endpoint);
            commit('setSources', request.data.videoSources);
            commit('setServer', request.data.server);
        },
    },
};

export default new Vuex.Store<IRootState>(store);
