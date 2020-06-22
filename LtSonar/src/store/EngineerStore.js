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
            console.log(symbol)
            commit('SET_SYMBOL_STATUS',symbol);
        },
    },

    mutations: {
        SET_SYMBOL_STATUS:   ( state, symbol )  => { state.engineer.areas[symbol.areaPos].areaGrid[symbol.pos].comprommised = true }
    },

    getters: {
        engineer:   state => state.engineer
    },
}
