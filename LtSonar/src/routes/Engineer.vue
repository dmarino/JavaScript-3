<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>
    <section class="engineer-container player-container inside-container">
        <playerInfo
            name="Jonathan"
            team="A"
            role="Officer"
        />
        <div class="engineer-inside-container"> 
            <h2 class="title">Engineer</h2>
            <div class="submarine-overview"></div>
            <div class="engineer-areas">
                <engineer-area  v-for="(item, index) in engineer.areas" :key="index" :area="item"></engineer-area>
            </div>
        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'
    import engineerArea  from '@/components/EngineerArea.vue'
    import playerInfo from '@/components/PlayerInfo.vue'

    class EngineerController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'VFS Vue Template',
            }
            this.injectGetters(['player'])
            this.injectGetters(['engineer'])
        }
    }

    export default new EngineerController('lsEngineer', {engineerArea, playerInfo});

</script>
<style scoped>
/* Local styles for this template */
    
    .engineer-inside-container {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78%;
        width: 96%;
    }

    .engineer-container{
        width:100%;
        height:100%;

        background-image:url("../assets/background.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    
    .submarine-overview{
        background-image:url("../assets/submarine-wireframe.png");
        width:100%;
        height:40%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .engineer-areas{
        width: 100%;
        height: 60%;

    }

</style>
