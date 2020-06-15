/*
VUEX Data Store.
Copyright (c) 2020. Jonathan, Kibble Online Inc. All Rights Reserved.
*/
import Vue from 'vue'
import Vuex from 'vuex'
import FirstOfficer from '@/model/FirstOfficer' 

export default {
    state: {
        firstOfficer: new FirstOfficer(),
    },

    actions: {
        setMinesStatus({commit}, minesStatus) {
            commit('SET_MINES_STATUS', minesStatus);
        },
        setDronesStatus({commit}, dronesStatus) {
            commit('SET_DRONES_STATUS', dronesStatus);
        },
        setSilenceStatus({commit}, silenceStatus) {
            commit('SET_SILENCE_STATUS', silenceStatus);
        },
        setTorpedoStatus({commit}, torpedoStatus) {
            commit('SET_TORPEDO_STATUS', torpedoStatus);
        },
        setSonarStatus({commit}, sonarStatus) {
            commit('SET_SONAR_STATUS', sonarStatus);
        }
    },

    mutations: {
        SET_MINES_STATUS:   ( state, minesStatus )     => { state.firstOfficer.minesStatus = minesStatus },
        SET_DRONES_STATUS:  ( state, dronesStatus )    => { state.firstOfficer.dronesStatus = dronesStatus },
        SET_SILENCE_STATUS: ( state, silenceStatus )   => { state.firstOfficer.silenceStatus = silenceStatus },
        SET_TORPEDO_STATUS: ( state, torpedoStatus )   => { state.firstOfficer.torpedoStatus = torpedoStatus },
        SET_SONAR_STATUS:   ( state, sonarStatus )     => { state.firstOfficer.sonarStatus = sonarStatus }
    },

    getters: {
        minesStatus:   state => state.firstOfficer.minesStatus,
        dronesStatus:  state => state.firstOfficer.dronesStatus,
        silenceStatus: state => state.firstOfficer.silenceStatus,
        torpedoStatus: state => state.firstOfficer.torpedoStatus,
        sonarStatus:   state => state.firstOfficer.sonarStatus
    },
}
