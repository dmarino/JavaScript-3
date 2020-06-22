/*
VUEX Data Store.
Copyright (c) 2019. Riley Gauchier, Kibble Online Inc. All Rights Reserved.
*/
import Vue from 'vue'
import Vuex from 'vuex'
import HistoryModel from '@/model/HistoryModel' 

//const baseURL = `${LOCATION.PROTOCOL}//${LOCATION.HOSTNAME}:${LOCATION.PORT}`;
//const Remote = Axios.create( { baseURL: baseURL });

// import User from '@/model/user' // import POJS model objects

export default {
    // PRIVATE: model state of the application, a bunch of POJS objects
    state: {
        captain: new HistoryModel(),
        navigator: new HistoryModel(),
    },

    // PUBLIC: injected into components
    // called to do things to the state via ajax and mutations
    actions: {
        CaptainHistory: ({commit}, newPosition) => commit('SET_NEW_CAPTAIN_HISTORY', newPosition),
        NavigatorHistory: ({commit}, newPosition) => commit('SET_NEW_NAVIGATOR_HISTORY', newPosition)
    },

    // PRIVATE: caled by actions to modify the state to prevent deadlock
    mutations: {
        SET_NEW_CAPTAIN_HISTORY: (state, newPosition) => {state.captain.AddLocation(newPosition)},
        SET_NEW_NAVIGATOR_HISTORY: (state, newPosition) => {state.navigator.AddLocation(newPosition)}
    },

    // PUBLIC: injected into components
    // called to retrieve state data from the store
    getters: {
        getCaptain: state =>{ return state.captain.History},
        getNavigator: state => {return state.navigator.History}
    },
}