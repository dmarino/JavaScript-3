<!--

@copyright (c) 2020. Riley Gauchier
-->
<template>


    <div class="Left-Side">
        <table class="map" v-if="role == 'Captain'" :key="this.getCaptain.moveCounter">
            <tr v-for="(row, i) in this.getCaptain.mapData" :key="i" class="row">
                <td @click="doClick(i, j)" v-for="(col, j) in row" :key="j" v-bind:class="col" class="unit-cell" ></td>
            </tr>
        </table>
        <table class="map" v-if="role == 'Navigator'" :key="this.getNavigator.moveCounter">
            <tr v-for="(row, i) in this.getNavigator.mapData" :key="i" class="row">
                <td @click="doClick(i, j)" v-for="(col, j) in row" :key="j" v-bind:class="col" class="unit-cell"></td>
            </tr>
        </table>
    </div>

</template>
<script>
    import Controller from '@/../lib/controller'

    // import other components you use here...

    class MapCard extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Control Panel',
                isStarted: false,
                row: [
                    "A", "B", "C", "D", "E", "F", "G", "H", "I", "K"
                ],
            }

            this.props = {
                role: String,
                currentPosition: Object
            }
            this.injectActions(['CaptainPosition', 'NavigatorPosition']);
            this.injectGetters(['getCaptain', 'getNavigator']);

        }

        doClick(i, j)
        {

            if(this.role == "Captain") {
                if (this.getCaptain.moveCounter == 0) {
                    let newPosition = {x:i,y:j}
                    this.CaptainPosition(newPosition)
                    this.$forceUpdate();
                }
            }
            
            else if (this.role == "Navigator") {
                if (this.getNavigator.moveCounter == 0) {
                    let newPosition = {x:i,y:j}
                    this.NavigatorPosition(newPosition)
                    this.$forceUpdate();
                }
            }
        }

    }

    export default new MapCard('gridAndForm' /* , { subComponent, anotherComponent } */ );

</script>
<style scoped>

    .Left-Side {
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

    .map {
        border-collapse: collapse;
    }

    .unit-cell {
        width: 3em;
        height: 3em;
        border: 0.25em solid black;
    }

    .water_current_location {
        background-color: cyan;
    }

    .water {
        background-color: blue;
    }

    .water_traveled {
        background-color: darkblue;
    
    }

</style>