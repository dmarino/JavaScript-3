// Copyright (c) 2020 Jonathan. All Rights Reserved.
'use strict';

export default class Engineer {

    constructor () {
        this.areas = [
            {
                name:"W",
                pos:0,
                areaGrid:[
                    { 
                        type: "R", comprommised: false, pos:0, circuit:0
                    },
                    { 
                        type: " ", comprommised: false, pos:1, circuit:-1
                    },
                    { 
                        type: "Y", comprommised: false, pos:2, circuit:0
                    },
                    { 
                        type: " ", comprommised: false , pos:3, circuit:-1
                    },
                    { 
                        type: " ", comprommised: false , pos:4, circuit:-1
                    },
                    { 
                        type: "G", comprommised: false , pos:5, circuit:0
                    },
                    { 
                        type: "G", comprommised: false , pos:6, circuit:-1
                    },
                    { 
                        type: "B", comprommised: false , pos:7, circuit:-1
                    },
                    { 
                        type: "B", comprommised: false , pos:8, circuit:-1
                    },

                ]
            },
            {
                name:"N",
                pos:1,
                areaGrid:[
                    { 
                        type: "Y", comprommised: false , pos:0, circuit:1
                    },
                    { 
                        type: " ", comprommised: false , pos:1, circuit:-1
                    },
                    { 
                        type: " ", comprommised: false , pos:2, circuit:-1
                    },
                    { 
                        type: "R", comprommised: false , pos:3, circuit:1
                    },
                    { 
                        type: " ", comprommised: false , pos:4, circuit:-1
                    },
                    { 
                        type: "Y", comprommised: false , pos:5, circuit:1
                    },
                    { 
                        type: "G", comprommised: false , pos:6, circuit:-1
                    },
                    { 
                        type: "R", comprommised: false , pos:7, circuit:-1
                    },
                    { 
                        type: "B", comprommised: false , pos:8, circuit:-1
                    },

                ]
            },
            {
                name:"S",
                pos:2,
                areaGrid:[
                    { 
                        type: "G", comprommised: false , pos:0, circuit:2
                    },
                    { 
                        type: " ", comprommised: false , pos:1, circuit:-1
                    },
                    { 
                        type: " ", comprommised: false , pos:2, circuit:-1
                    },
                    { 
                        type: "Y", comprommised: false , pos:3, circuit:2
                    },
                    { 
                        type: " ", comprommised: false, pos:4, circuit:-1
                    },
                    { 
                        type: "R", comprommised: false, pos:5, circuit:2
                    },
                    { 
                        type: "R", comprommised: false, pos:6, circuit:-1
                    },
                    { 
                        type: "B", comprommised: false, pos:7, circuit:-1
                    },
                    { 
                        type: "Y", comprommised: false, pos:8, circuit:-1
                    },

                ]
            },
            {
                name:"E",
                pos:3,
                areaGrid:[
                    { 
                        type: "G", comprommised: false, pos:0, circuit:1
                    },
                    { 
                        type: " ", comprommised: false, pos:1, circuit:-1
                    },
                    { 
                        type: " ", comprommised: false, pos:2, circuit:-1
                    },
                    { 
                        type: "Y", comprommised: false, pos:3, circuit:2
                    },
                    { 
                        type: " ", comprommised: false, pos:4, circuit:-1
                    },
                    { 
                        type: "R", comprommised: false, pos:5, circuit:0
                    },
                    { 
                        type: "B", comprommised: false, pos:6, circuit:-1
                    },
                    { 
                        type: "G", comprommised: false, pos:7, circuit:-1
                    },
                    { 
                        type: "B", comprommised: false, pos:8, circuit:-1
                    },

                ]
            },

        ]
 
        this.circuits =[
            {
                symbols:[
                    {
                        areaPos:0,
                        pos:0
                    },
                    {
                        areaPos:0,
                        pos:2
                    },
                    {
                        areaPos:0,
                        pos:5
                    },
                    {
                        areaPos:3,
                        pos:5
                    }
                ],
                amountCompromised:0
            },
            {
                symbols:[
                    {
                        areaPos:1,
                        pos:0
                    },
                    {
                        areaPos:1,
                        pos:3
                    },
                    {
                        areaPos:1,
                        pos:5
                    },
                    {
                        areaPos:3,
                        pos:0
                    }
                ],
                amountCompromised:0
            },
            {
                symbols:[
                    {
                        areaPos:2,
                        pos:0
                    },
                    {
                        areaPos:2,
                        pos:3
                    },
                    {
                        areaPos:2,
                        pos:5
                    },
                    {
                        areaPos:3,
                        pos:3
                    }
                ],
                amountCompromised:0
            }
        ]
    }
}