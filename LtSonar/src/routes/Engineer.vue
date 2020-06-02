<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="engineer-container">
        <div>
            <h1 class="title">Engineer</h1>
            <div class="submarine-overview"></div>
            <div class="engineer-areas">
                <engineer-area title="W"></engineer-area>
                <engineer-area title="N"></engineer-area>
                <engineer-area title="S"></engineer-area>
                <engineer-area title="E"></engineer-area>
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
