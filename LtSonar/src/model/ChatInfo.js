// Copyright (c) 2020 Jonathan. All Rights Reserved.

'use strict';

export default class ChatInfo {

    constructor () {
        this.messages = []
    }
    
    SaveNewMessage(message) {
        this.messages.push(message);
    }
}