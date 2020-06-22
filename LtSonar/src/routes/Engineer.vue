<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>
    <section class="engineer-container">
        <h1>Player Name: {{player.name}}</h1>
        <div>
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

    export default new EngineerController('lsEngineer', {engineerArea});

</script>
<style scoped>
/* Local styles for this template */

    .engineer-container > div {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .engineer-container{
        display: inline-block;
        width:100%;
        height:100%;
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
