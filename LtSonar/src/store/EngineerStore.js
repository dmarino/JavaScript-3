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
        }
    },

    mutations: {
        SET_SYMBOL_COMP:   ( state, symbol )  => { 

            if(symbol.circuit==-1){
                state.engineer.areas[symbol.areaPos].areaGrid[symbol.pos].comprommised = true 
                
            }
            else{
                if(state.engineer.circuits[symbol.circuit].amountCompromised!=state.engineer.circuits.length){
                    state.engineer.areas[symbol.areaPos].areaGrid[symbol.pos].comprommised = true 
                    state.engineer.circuits[symbol.circuit].amountCompromised++
                }
                else{

                    var circuit = state.engineer.circuits[symbol.circuit]

                    for(var i =0; i< circuit.symbols.length;i++ ){
                        var s = circuit.symbols[i];
                        state.engineer.areas[s.areaPos].areaGrid[s.pos].comprommised = false
                        state.engineer.circuits[symbol.circuit].amountCompromised=0
                    }
                }
            }
            
        }
    },

    getters: {
        engineer:   state => state.engineer
    },
}
