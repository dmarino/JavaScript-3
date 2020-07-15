/*
VUEX Data Store.
Copyright (c) 2020. Jonathan, Kibble Online Inc. All Rights Reserved.
*/
import Vue from 'vue'
import Vuex from 'vuex'
import Player from '@/model/Player' 

const Axios = require('axios');
Axios.defaults.baseURL = "http://localhost:3000"

export default {
    state: {
        player: new Player(),
    },

    actions: {

        setName({commit}, name) {
            
            Axios.post("/api/player/login", name)
            .then(response => console.log(response))
            //commit('SET_NAME', name);
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
