//copyright (c) 2020 Daniela Mariño

'use strict'


import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const Axios = require('axios');
Axios.defaults.baseURL = "http://localhost:3000"

import Result from './result.js'

export default class Connection{

    constructor(local=false){

        this.local = local;
        var firebaseConfig = {
            apiKey: "AIzaSyDfkFkrtMGRcbKBIWLGEsoSr3DWV5NAmRQ",
            authDomain: "lt-sonar.firebaseapp.com",
            databaseURL: "https://lt-sonar.firebaseio.com",
            projectId: "lt-sonar",
            storageBucket: "lt-sonar.appspot.com",
            messagingSenderId: "798446817912",
            appId: "1:798446817912:web:b897377de739d3cd10138d",
            measurementId: "G-CE7TXYFCLK"
        };

        firebase.initializeApp(firebaseConfig);
        this.db = firebase.firestore();
    }

    get(edge){

        const response = new Result()

        return new Promise(async(resolve, reject) => {

            if(this.local){
                response = await Axios.get(edge).catch(error =>{});
            }
            else{

                let cmd = this._parseEdge(edge);
                const collection = this.db.collection(cmd.collection);

                let results = await collection.get()
                response.payload = results.docs;
                
            }

            resolve(response)
        })

    }


    getValidGame(edge){

        const response = new Result()

        return new Promise(async(resolve, reject) => {

            if(this.local){
                response = await Axios.get(edge).catch(error =>{});
            }
            else{

                let cmd = this._parseEdge(edge);
                const collection = this.db.collection(cmd.collection);
                const query = collection.where("state", "==", "register");
                let results = await collection.get()
                response.payload = results.docs;
                
            }

            resolve(response)
        })

    }

    getById(edge){

        const response = new Result()

        return new Promise(async(resolve, reject) => {

            if(this.local){
                response = await Axios.get(edge).catch(error =>{});
            }
            else{

                let cmd = this._parseEdge(edge);
                const collection = this.db.collection(cmd.collection);
                const query = collection.where("id", "==", cmd.params[0]);

                let docList = await query.get();
                response.payload = docList.docs();
            }

            resolve(response)
        })

    }

    post(edge, data){
     
        const response = new Result()

        return new Promise(async(resolve, reject) => {

            if(this.local){
                let ob = await Axios.post(edge, data);
                response = ob.data;
            }
            else{

                let cmd = this._parseEdge(edge);
                const collection = this.db.collection(cmd.collection);
                
                if(cmd.command=="update"){

                    console.log(data);
                    let ob = await collection.doc(data.id).set(data);
                    response.payload = ob
                }
                else{

                    let ob = await collection.doc();
                    data.id = ob.id;
                    ob.set(data);

                    response.payload = data;
                    response.ok();
                }
            }

            resolve(response)
        })
    }

    _parseEdge(edge ="/"){

        const paramList = edge.split("/");
        return{
            collection: paramList[2],
            command : paramList[3],
            params : paramList.slice(4)
        }
    }
}
