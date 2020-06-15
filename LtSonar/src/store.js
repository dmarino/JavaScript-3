/*
VUEX Data Store.
Copyright (c) 2020. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use( Vuex )

// Modules
import ModelStore from '@/store/modelStore'
import PlayerStore from '@/store/playerStore'
import FirstOfficerStore from '@/store/firstOfficerStore'

// Store with modules
const store = new Vuex.Store({
    modules: {
        ModelStore,
        PlayerStore,
        FirstOfficerStore
    }
});

export default store;