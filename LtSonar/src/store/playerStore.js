/*
VUEX Data Store.
Copyright (c) 2020. Jonathan, Kibble Online Inc. All Rights Reserved.
*/
import Vue from 'vue'
import Vuex from 'vuex'
import Player from '@/model/Player' 

import Connection from '@/../lib/Connection.js'

const connection = new Connection()

export default {
    state: {
        player: new Player(),
    },

    actions: {

        setName({commit}, name) {
            
            //create the json to send
            var info = {
                name: name
            }

            connection.post("/api/Players/login", info)
                .then(data => data.error!=0? err =>{throw(error)} : data.payload) //here checks if there is an error in the server message
                .then(player => {
                    commit('SET_PLAYER', player); //here it actually just has the name and the id (if we are using databases i prefer the ids than just the name)
                })
                .catch(error=>{
                    alert(error); //shows the error to the user
                }); 
        },

        setTeam({commit}, team){

            commit("SET_TEAM", team);
        },

        setRole({commit}, role){
            commit("SET_ROLE", role);
        },
        
        //had to make this new function to get the id of the player that i want to change the team and the role of
        updatePlayer({commit}, player){

            //creates the url
            var url = `/api/Players/update/${player.id}`;

            //create the json to send

            connection.post(url, player)
                .then(data => data.error!=0? error =>{throw(error)} : data.payload) //here checks if there is an error in the server message
                .then(p => {
                    commit('SET_PLAYER', player); //here i update the thing
                })
                .catch(error=>{
                    alert(error); //shows the error to the user
                }); 

        }
    },

    mutations: {
        SET_PLAYER: (state, player) => {state.player = player},
        SET_NAME: ( state, name ) => { state.player.name = name },
        SET_TEAM: ( state, team ) => { state.player.team = team },
        SET_ROLE: ( state, role ) => { state.player.role = role },
    },

    getters: {
        player: state => state.player,
    },
}
