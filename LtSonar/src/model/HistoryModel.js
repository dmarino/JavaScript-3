// Copyright (c) 2020 Riley Gauchier. All Rights Reserved.

'use strict';

export default class HistoryModel {

    constructor ( ) {
        //this.History = History;
        this.currentCounter = 0;
        this.currentPosition = {x:0, y:0};
        this.mapData = [];
        for(let i = 0; i < 10; i++)
        {
            this.mapData[i] = []
            for(let j = 0; j < 10; j++)
            {
                this.mapData[i][j] = "water"
            }
        }
    }
    
    AddLocation( position )
    {
        //this.History.splice(this.currentCounter++, updateLocations)
        this.currentPosition.x = position.x
        this.currentPosition.y = position.y
        this.mapData[position.x][position.y] = "water-ship"
    }
}