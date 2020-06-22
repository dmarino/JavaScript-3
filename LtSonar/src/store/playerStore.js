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
        },

        setTeam({commit}, team){
            commit("SET_TEAM", team);
        },

        setRole({commit}, role){
            commit("SET_ROLE", role);
        }       
    },

    mutations: {
        SET_NAME: ( state, name ) => { state.player.name = name },
        SET_TEAM: ( state, team ) => { state.player.team = team },
        SET_ROLE: ( state, role ) => { state.player.role = role },
    },

    getters: {
        player: state => state.player,
    },
}
