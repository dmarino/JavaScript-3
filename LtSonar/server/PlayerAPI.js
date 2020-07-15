'use strict';

import Express from 'express'

const Router = Express.Router();

Router.post('/login', (req, res) =>{
    console.log(req)
    res.send("something")
});

module.exports = Router;