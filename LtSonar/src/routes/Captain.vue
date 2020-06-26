<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="captain-container player-container inside-container">
        <playerInfo
            :name="player.name"
            :team="player.team"
            :role="player.role"
        />
        <pgNavbar></pgNavbar>
        <div class="about">
            <h1 class="title">Captain</h1>
            <gridAndForm role="Captain">
            </gridAndForm>
            <keepRecord role="Captain">
            </keepRecord>
        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'
    import gridAndForm from '@/components/MapCard'
    import keepRecord from '@/components/RecordCard'
    import playerInfo from '@/components/PlayerInfo.vue'
    import pgNavbar from '@/views/Navbar.vue'

    class CaptainController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Captain Control Panel',
                isStarted: false,
            }
        
        this.injectGetters(['player']);
        }
    }

    export default new CaptainController('lsCaptain', {gridAndForm, keepRecord, playerInfo, pgNavbar});

</script>
<style>
/* Local styles for this template */
    .captain-container {
        width: 100%;
        height: 100%;
    }

    .about {
        display: flex;
        flex-direction: row;
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .title {
        text-shadow: 2px 2px #777;
    }

    .water {
        background-color: blue;
        width: 4em;
        height: 4em;
        border: 0.25em solid black;
    }

    .island {
        background-color: green;
        width: 4em;
        height: 4em;
        border: 0.25em solid black;
    }

    .water_traveled {
        background-color: darkblue;
        width: 4em;
        height: 4em;
        border: 0.25em solid black;
    }

    .water_current_location {
        background-color: cyan;
        background-color: darkblue;
        width: 4em;
        height: 4em;
        border: 0.25em solid black;
    }

    .row {
        width: 4em;
        height: 4em;
        border: 0.25em solid black;
    }

    .col {
        width: 4em;
        height: 4em;
        border: 0.25em solid black;
    }

    .Right-Side {
        margin-left: 10%;
        height: 100%;
        width: 30%;
        border: 0.25em solid black;
    }

    .test {
        width: 16em;
        height: 16em;
        border: 0.25em solid black;
        background-color: darkblue;
    }
</style>
