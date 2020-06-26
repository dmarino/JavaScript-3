<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="navigator-container player-container inside-container">
        <playerInfo
            :name="player.name"
            :team="player.team"
            :role="player.role"
        />
        <pgNavbar></pgNavbar>
        <div class="main-content">
            <div class="about">
                <h1 class="title">Navigator</h1>
                <gridAndForm role="Navigator" :currentPosition="this.getNavigator.currentPosition">
                </gridAndForm>
                <keepRecord role="Navigator">
                </keepRecord>
            
            </div>
            <pgChat speaker="Navigator"></pgChat>
        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'
    import gridAndForm from '@/components/MapCard.vue'
    import keepRecord from '@/components/RecordCard'
    import playerInfo from '@/components/PlayerInfo.vue'
    import pgNavbar from '@/views/Navbar.vue'
    import pgChat from '@/components/chatComponent.vue'
    
    class NavigatorController extends Controller {
        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Navigator Control Panel',
                isStarted: false,
            }
            
            this.injectGetters(['player', 'getNavigator']);
        }
    }

    export default new NavigatorController('lsNavigator', {gridAndForm, keepRecord, playerInfo, pgNavbar, pgChat});
    

</script>
<style>
/* Local styles for this template */
    .navigator-container {
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

