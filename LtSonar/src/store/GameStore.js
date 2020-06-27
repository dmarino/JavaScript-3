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

        endTurn({commit}) {
            commit('SET_ROLE_TURN');
        },    
    },

    mutations: {
        SET_TEAM_TURN: ( state, team ) => { state.gameState.teamTurn = team },
        SET_ROLE_TURN: ( state) => { 
            
            if(state.gameState.rolesTurn == state.gameState.roles.length-1){
                state.gameState.rolesTurn=0;
                state.gameState.teamTurn = state.gameState.teamTurn == "A" ? "B":"A";
            }
            else{
                state.gameState.rolesTurn++;
            }
        },
    },

    getters: {
        gameState: state => state.gameState,
    },
}
