<!--

@copyright (c) 2020. Riley Gauchier
-->
<template>


    <div class="Left-Side">
        <table class="map" v-if="role == 'Captain'">
            <tr v-for="(row, i) in this.getCaptain.mapData" :key="i" class="row">
                <td @click="doClick($event, i, j)" v-for="(col, j) in row" :key="j" v-bind:class="col" ></td>
            </tr>
        </table>
        <table class="map" v-if="role == 'Navigator'">
            <tr v-for="(row, i) in this.getNavigator.mapData" :key="i" class="row">
                <td @click="doClick($event, i, j)" v-for="(col, j) in row" :key="j" v-bind:class="col" ></td>
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
                isFirstPosition: false,
                row: [
                    "A", "B", "C", "D", "E", "F", "G", "H", "I", "K"
                ]
            }

            this.props = {
                role: String
            }
            this.injectActions(['CaptainPosition', 'NavigatorPosition']);
            this.injectGetters(['getCaptain', 'getNavigator']);

        }

        doClick(event, i, j)
        {
            if( this.isFirstPosition == false)
            {
                if(this.role == "Captain")
                {
                    console.log("ship")
                    let newPosition = {x:i,y:j}
                    this.CaptainPosition(newPosition)
                }
                else if (this.role == "Navigator")
                {
                    let newPosition = {x:i,y:j}
                    this.NavigatorPosition(newPosition)
                }
                this.isFirstPosition = true;
            }
            else
            {
                console.log("x " + this.getCaptain.currentPosition.x)
                console.log("y " + this.getCaptain.currentPosition.y)
            }
            
        }

    }

    export default new MapCard('gridAndForm' /* , { subComponent, anotherComponent } */ );

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
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

    .water {
        background-color: blue;
        width: 4em;
        height: 4em;
        border: 0.25em solid black;
    }

    .water-ship{
        background-color: red;
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