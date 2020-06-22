// Copyright (c) 2020 Riley Gauchier. All Rights Reserved.

'use strict';

export default class HistoryModel {

    constructor ( History = [] ) {
        this.History = History;
        this.currentCounter = 0;

    }
    
    AddLocation(updateLocations)
    {
        this.History.splice(this.currentCounter++, updateLocations)
    }
}