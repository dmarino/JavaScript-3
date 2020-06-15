// Copyright (c) 2020 Jonathan. All Rights Reserved.
'use strict';

export default class FirstOfficer {

    constructor ( minesStatus = false, dronesStatus = false, silenceStatus = false, torpedoStatus = false, sonarStatus = false) {
        this.minesStatus = minesStatus;
        this.dronesStatus = dronesStatus;
        this.silenceStatus = silenceStatus;
        this.torpedoStatus = torpedoStatus;
        this.sonarStatus = sonarStatus;
    }
}