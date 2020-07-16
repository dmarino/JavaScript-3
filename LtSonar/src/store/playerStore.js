/*
VUEX Data Store.
Copyright (c) 2020. Jonathan, Kibble Online Inc. All Rights Reserved.
*/
import Vue from 'vue'
import Vuex from 'vuex'
import Player from '@/model/Player' 

const Axios = require('axios');
Axios.defaults.baseURL = "http://localhost:3000"

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

            Axios.post("/api/player/login", info)
                .then(response => response.data) //just takes the data out 
                .then(data => data.error!=0? error =>{throw(error)} : data.payload) //here checks if there is an error in the server message
                .then(player => {
                    commit('SET_PLAYER', player); //here it actually just has the name and the id (if we are ussing data bases i prefer the ids than just the name)
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
            var url = `/api/player/update/${player.id}`;

            //create the json to send
             var info = {
                player: player
            }

            Axios.put(url, info)
                .then(response => response.data) //just takes the data out 
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
