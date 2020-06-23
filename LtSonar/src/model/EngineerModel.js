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
                        type: "R", comprommised: false, pos:0
                    },
                    { 
                        type: " ", comprommised: false, pos:1
                    },
                    { 
                        type: "Y", comprommised: false, pos:2
                    },
                    { 
                        type: " ", comprommised: false , pos:3
                    },
                    { 
                        type: " ", comprommised: false , pos:4
                    },
                    { 
                        type: "G", comprommised: false , pos:5
                    },
                    { 
                        type: "G", comprommised: false , pos:6
                    },
                    { 
                        type: "B", comprommised: false , pos:7
                    },
                    { 
                        type: "B", comprommised: false , pos:8
                    },

                ]
            },
            {
                name:"N",
                pos:1,
                areaGrid:[
                    { 
                        type: "Y", comprommised: false , pos:0
                    },
                    { 
                        type: " ", comprommised: false , pos:1
                    },
                    { 
                        type: " ", comprommised: false , pos:2
                    },
                    { 
                        type: "R", comprommised: false , pos:3
                    },
                    { 
                        type: " ", comprommised: false , pos:4
                    },
                    { 
                        type: "Y", comprommised: false , pos:5
                    },
                    { 
                        type: "G", comprommised: false , pos:6
                    },
                    { 
                        type: "R", comprommised: false , pos:7
                    },
                    { 
                        type: "B", comprommised: false , pos:8
                    },

                ]
            },
            {
                name:"S",
                pos:2,
                areaGrid:[
                    { 
                        type: "G", comprommised: false , pos:0
                    },
                    { 
                        type: " ", comprommised: false , pos:1
                    },
                    { 
                        type: " ", comprommised: false , pos:2
                    },
                    { 
                        type: "Y", comprommised: false , pos:3
                    },
                    { 
                        type: " ", comprommised: false, pos:4
                    },
                    { 
                        type: "R", comprommised: false, pos:5
                    },
                    { 
                        type: "R", comprommised: false, pos:6
                    },
                    { 
                        type: "B", comprommised: false, pos:7
                    },
                    { 
                        type: "Y", comprommised: false, pos:8
                    },

                ]
            },
            {
                name:"E",
                pos:3,
                areaGrid:[
                    { 
                        type: "G", comprommised: false, pos:0
                    },
                    { 
                        type: " ", comprommised: false, pos:1
                    },
                    { 
                        type: " ", comprommised: false, pos:2
                    },
                    { 
                        type: "Y", comprommised: false, pos:3
                    },
                    { 
                        type: " ", comprommised: false, pos:4
                    },
                    { 
                        type: "R", comprommised: false, pos:5
                    },
                    { 
                        type: "B", comprommised: false, pos:6 
                    },
                    { 
                        type: "G", comprommised: false, pos:7
                    },
                    { 
                        type: "B", comprommised: false, pos:8
                    },

                ]
            },

        ]
 
        this.circuits =[{
            
            
        }]
    }
}