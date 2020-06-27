/*
VUEX Data Store.
Copyright (c) 2020. Jonathan, Kibble Online Inc. All Rights Reserved.
*/
import Vue from 'vue'
import Vuex from 'vuex'
import Game from '@/model/GameModel' 

export default {
    state: {
        gameState: new Game(),
    },

    actions: {

        endTurn({commit}, role, team) {

        },    
    },

    mutations: {
        SET_TEAM_TURN: ( state, team ) => { state.gameState.teamTurn = team },
        SET_ROLE_TURN: ( state, role ) => { state.gameState.roleTurn = role },
    },

    getters: {
        teamTurn: state => state.gameState.teamTurn,
        roleTurn: state => state.gameState.roleTurn,
        roles: state=> state.gameState.roles,
    },
}
