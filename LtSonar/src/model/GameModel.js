// Copyright (c) 2020 Jonathan. All Rights Reserved.

'use strict';


export default class Game {

    constructor ( ) {
        this.teamTurn = "A";
        this.rolesTurn = 0;
        this.roles = [
            "Captain",
            "Firstofficer",
            "Engineer",
            "Navigator"
        ]

        this.teams = []
        this.teams[0] ={
            name: "team A",
            players: {
                captain: "",
                firstofficer: "",
                engineer:"",
                navigator:""
            }
        }
        this.teams[0] ={
            name: "team B",
            players: {
                captain: "",
                firstofficer: "",
                engineer:"",
                navigator:""
            }
        }
    }
    
}