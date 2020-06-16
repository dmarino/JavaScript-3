/*
VUEX Data Store.
Copyright (c) 2020. Jonathan, Kibble Online Inc. All Rights Reserved.
*/
import Vue from 'vue'
import Vuex from 'vuex'
import Player from '@/model/Player' 

export default {
    state: {
        player: new Player(),
    },

    actions: {
        setName({commit}, name) {
            commit('SET_NAME', name);
        }
    },

    mutations: {
        SET_NAME: ( state, name ) => { state.player.name = name }
    },

    getters: {
        player: state => state.player,
    },
}
