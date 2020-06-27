/*
VUEX Data Store.
Copyright (c) 2020. Jonathan, Kibble Online Inc. All Rights Reserved.
*/
import Engineer from '@/model/EngineerModel.js' 

export default {
    state: {
        engineer: new Engineer(),
    },

    actions: {
        setSymbolStatus({commit}, symbol) {
            commit('SET_SYMBOL_COMP',symbol);
        },
        resetStatus({commit}, symbol) {
            commit('RESET_SYMBOL',symbol);
        },
        addSymbolOFCircuit({commit}, circuitPos){
            commit('ADD_SYMBOL_CIRCUIT',circuitPos);
        },
        resetCircuit({commit}, circuitPos) {
            commit('RESET_CIRCUIT',circuitPos);
        }
    },

    mutations: {
        SET_SYMBOL_COMP:   ( state, symbol )  => { state.engineer.areas[symbol.areaPos].areaGrid[symbol.pos].comprommised = true },
        RESET_SYMBOL:   ( state, symbol )  => { state.engineer.areas[symbol.areaPos].areaGrid[symbol.pos].comprommised = false },
        ADD_SYMBOL_CIRCUIT: ( state, circuitPos )  => { state.engineer.circuits[circuitPos].amountCompromised++},
        RESET_CIRCUIT: ( state, circuitPos )  => { state.engineer.circuits[circuitPos].amountCompromised=0}
    },

    getters: {
        engineer:   state => state.engineer
    },
}
