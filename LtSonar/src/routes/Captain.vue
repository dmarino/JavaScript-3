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
        <div class="main-content">
            <div class="about">
                <h1 class="title">Captain</h1>
                <gridAndForm role="Captain" :currentPosition="this.getCaptain.currentPosition">
                </gridAndForm>
                <keepRecord role="Captain">
                </keepRecord>
            </div>
            <pgChat speaker="Captain"></pgChat>
        </div>
        
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'
    import gridAndForm from '@/components/MapCard'
    import keepRecord from '@/components/RecordCard'
    import playerInfo from '@/components/PlayerInfo.vue'
    import pgNavbar from '@/views/Navbar.vue'
    import pgChat from '@/components/chatComponent.vue'

    class CaptainController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Captain Control Panel',
                isStarted: false,
            }
            this.injectGetters(['player', 'getCaptain']);
            this.injectActions(['CaptainPosition']);
        }
    }

    export default new CaptainController('lsCaptain', {gridAndForm, keepRecord, playerInfo, pgNavbar, pgChat});

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

</style>
