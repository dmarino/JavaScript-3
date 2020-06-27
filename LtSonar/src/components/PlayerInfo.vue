<!--
@copyright (c) 2020. Jonathan . All Rights Reserved.
-->
<template>
    <div class="player-info">
        <h2 class="player-info-item"><span>Name: </span>{{name}}</h2>
        <h2 class="player-info-item"><span>Team: </span>{{team}}</h2>
        <h2 class="player-info-item"><span>Role: </span>{{role}}</h2>
        <h2 class="player-info-item"><span>Turn: </span>{{turn}}</h2>
    </div>
</template>
<script>
    import Controller from '@/../lib/controller'

    class PlayerInfo extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.props = { 
                name: String,
                team: String,
                role: String,
                turn: String
            }
        }
        
    }

    export default new PlayerInfo('playerInfo');

</script>
<style scoped>
    .player-info {
        display: flex;
        align-items: center;
        border: 4px solid black;
        border-radius: 10px;
        background-color: lightgray;
        color: darkblue!important;
    }

    .player-info-item {
        margin-left: 10px;
        border-right: 2px solid black;
        padding: 5px 20px;
    }

    .player-info-item span {
        font-size: 28px;
    color: darkblue!important;
    
    }

    .player-info-item:last-child {
        border-right: none;
    }

</style>