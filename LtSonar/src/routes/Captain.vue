<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="captain-container">
        <div class="about">
            <h1 class="title">Captain</h1>
            <div class="Left-Side">
                <table class="captain-map">
                    <tr v-for="(row, i) in mapData" :key="i">
                        <td v-for="(col, j) in row" :key="j" class="col"></td>
                    </tr>
                </table>
            </div>
            <div class="Right-Side">

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
                mapData: [
                    "water", "water", "water", "island", "water", "water",
                    "island", "island", "water", "water", "water", "water",
                    "water", "water", "water", "island", "water", "water",
                    "water", "water", "water", "water", "water", "water",
                    "water", "water", "water", "water", "island", "water",
                    "water", "water", "island", "water", "water", "water"
                ],
                row: [
                    "A", "B", "C", "D", "E", "F"
                ]
            }

        }
    }

    export default new CaptainController('lsCaptain');

</script>
<style>
/* Local styles for this template */
    .captain-container {
        display: inline-block;
        width: 100%;
        height: 100%;
    }

    .about {
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
    }

    .island {
        background-color: green;
    }

    .cell {
        width: 4em;
        height: 4em;
        border: 1em solid black;
    }

    .water_traveled {
        background-color: darkblue;
    }

    .water_current_location {
        background-color: cyan;
    }
</style>
