/*
VUEX Data Store.
Copyright (c) 2020. Jonathan, Kibble Online Inc. All Rights Reserved.
*/
import Vue from 'vue'
import Vuex from 'vuex'
import ChatInfo from '@/model/ChatInfo' 

export default {
    // PRIVATE: model state of the application, a bunch of POJS objects
    state: {
        chat: new ChatInfo()
    },

    actions: {
        SendMessage: ({commit}, message) => commit('SET_NEW_MESSAGE', message)
    },

    // PRIVATE: caled by actions to modify the state to prevent deadlock
    mutations: {
        SET_NEW_MESSAGE: (state, message) => {state.chat.SaveNewMessage(message)},
    },

    // PUBLIC: injected into components
    // called to retrieve state data from the store
    getters: {
        getChat: state =>{ return state.chat},
    },
}