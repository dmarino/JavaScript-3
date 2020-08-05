'use strict';

import Express from 'express'
import Result from '../lib/result.js'
const Router = Express.Router();

const games = []; 

Router.post('/create', (req, res) =>{

    //creates new game 
});


Router.get('/:id', (req, res) =>{

    //finds the game by id
});

Router.get('/:id', (req, res) =>{

    //finds all games
});

module.exports = Router;