<!--

@copyright (c) 2020. Riley Gauchier
-->
<template>


    <div class="Right-Side">
        <form v-if="role == 'Captain'">
            <label for="MovementList">Movement List:</label>
            <input type="button" id="buttonNorth" value="North" @click="addtoCAParray(inputArray[0])">
            <input type="button" id="buttonEast" value="East" @click="addtoCAParray(inputArray[2])">
            <input type="button" id="buttonSouth" value="South" @click="addtoCAParray(inputArray[1])">
            <input type="button" id="buttonWest" value="West" @click="addtoCAParray(inputArray[3])">
            <div id="ListOfMovements"> 
                {{getCaptain}}
            </div>
        </form>
        <form v-if="role == 'Navigator'">
            <label for="MovementList">Movement List:</label>
            <input type="button" id="buttonNorth" value="North" @click="addtoNAVarray(inputArray[0])">
            <input type="button" id="buttonEast" value="East" @click="addtoNAVarray(inputArray[2])">
            <input type="button" id="buttonSouth" value="South" @click="addtoNAVarray(inputArray[1])">
            <input type="button" id="buttonWest" value="West" @click="addtoNAVarray(inputArray[3])">
            <div id="ListOfMovements">
                {{getNavigator}}
            </div>
        </form>
    </div>

</template>
<script>
    import Controller from '@/../lib/controller'
    import { mapActions, mapGetters } from 'vuex'

    class RecordCard extends Controller {
        constructor( name, subComponentList = []){
            super( name, subComponentList );
            this.vm = {
                name: "Record Panel",
                recordArray:[],
                arrayTracker:0,
                inputArray:["N","S","E","W"]
            }
            this.props={role: String }
            this.injectActions(mapActions(['CaptainHistory', 'NavigatorHistory']));
            this.injectGetters(mapGetters(['getCaptain', 'getNavigator']));
        }

        addtoCAParray(buttonReturn)
        {
            this.CaptainHistory(buttonReturn)
        }

        addtoNAVarray(buttonReturn)
        {
            this.NavigatorHistory(buttonReturn)
        }
        
    }
    export default new RecordCard ('keepRecord'/* , { subComponent, anotherComponent } */);
</script>
<style scoped>
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