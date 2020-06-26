// Copyright (c) 2020 Riley Gauchier. All Rights Reserved.

'use strict';

const TABLE_SIZE = 15
export default class HistoryModel {

    constructor ( ) {
        this.History = [];
        this.moveCounter = 0
        this.currentPosition = {x:-1, y:-1};
        this.mapData = [];

        for(let i = 0; i < TABLE_SIZE; i++)
        {
            this.mapData[i] = []
            for(let j = 0; j < TABLE_SIZE; j++)
            {
                this.mapData[i][j] = "water"
            }
        }
    }
    
    MoveLocation( position)
    {
        if((position.x >= 0 && position.x < TABLE_SIZE) && (position.y >= 0 && position.y < TABLE_SIZE))
        {
            if (this.moveCounter > 0)
            {
                this.mapData[this.currentPosition.x][this.currentPosition.y] = "water_traveled"
                this.History.push(position.direction)
            }
            
            this.currentPosition.x = position.x
            this.currentPosition.y = position.y
            this.moveCounter++
            this.mapData[position.x][position.y] = "water_current_location"
        } 
    }
}