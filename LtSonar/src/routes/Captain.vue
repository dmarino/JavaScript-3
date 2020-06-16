<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="captain-container">
        <h1>Player Name: {{player.name}}</h1>
        <div class="about">
            <h2 class="title">Captain</h2>
            <div class="Left-Side">
                <table class="captain-map">
                    <tr v-for="(row, i) in mapData" :key="i" class="row">
                        <td v-for="(col, j) in row" :key="j" v-bind:class="col"></td>
                    </tr>
                </table>
            </div>
            <div class="Right-Side">
                <form class="make-notes">
                </form>
                <div class="hold-notes">
                </div>
            </div>
        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'

    class CaptainController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Captain Control Panel',
                isStarted: false,
                mapData: [
                    ["water", "water", "water", "island", "water", "water","water", "water", "water", "island"],
                    ["island", "island", "water", "water", "water", "island","island", "water", "water", "island"],
                    ["water", "water", "water", "island", "water", "water","water", "water", "water", "water"],
                    ["water", "water", "water", "water", "water", "water","water", "island", "water", "water"],
                    ["water", "island", "water", "water", "island", "water","water", "island", "water", "water"],
                    ["water", "island", "water", "island", "water", "water","water", "water", "water", "water"],
                    ["water", "water", "water", "water", "water", "water","water", "island", "water", "water"],
                    ["island", "water", "water", "water", "island", "water","water", "water", "water", "island"],
                    ["water", "water", "water", "water", "island", "water","water", "water", "water", "water"],
                    ["water", "water", "island", "water", "water", "water","island", "island", "water", "water"]
                ],
                row: [
                    "A", "B", "C", "D", "E", "F", "G", "H", "I", "K"
                ]
            }
        
        this.injectGetters(['player']);
        }
    }

    export default new CaptainController('lsCaptain');

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
