'use strict';

import Express from 'express'
import Player from '../src/model/Player.js'
import Result from '../lib/result.js'
const Router = Express.Router();


//so here i'll store the players as if it was the database... 
//i think this should be in the server but... i wouldn't know how to call it if it was over there
const players = []; 

Router.post('/login', (req, res) =>{

    //creates representation of the player
    var player = new Player();
    player.name = req.body.name;
    player.id = players.length;

    //adds it to the list of players
    players.push(player);

    //creates the representation of the result
    var result = new Result();
    result.payload = player;
    result.ok();

    console.log(players) //this is to prove that is working
    res.send(result)
});

Router.post('/update/:id', (req, res) =>{

    //creates the representation of the result
    var result = new Result();


    //finds the player by id    
    var p = players[req.params.id]

    //TODO: here i should check things like if the role is aviable in the team and stuff

    //then i have to update the player
    players[req.params.id] = req.body.player

    result.ok();

    console.log(players) //this is to prove that is working
    res.send(result)
});


Router.get('/:id', (req, res) =>{

    //finds the player by id and updates the team and role
    var player = players[req.params.id]

    //creates the representation of the result
    var result = new Result();
    result.payload = player;
    result.ok();

    res.send(result)
});

module.exports = Router;