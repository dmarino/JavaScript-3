<!--

@copyright (c) 2020. Riley Gauchier
-->
<template>


    <div class="Right-Side">
        <div v-if="role == 'Captain'">
            <label for="MovementList">Movement List:</label>
            <input type="button" id="buttonNorth" value="North" @click="addtoCAParray(inputArray[0])">
            <input type="button" id="buttonEast" value="East" @click="addtoCAParray(inputArray[2])">
            <input type="button" id="buttonSouth" value="South" @click="addtoCAParray(inputArray[1])">
            <input type="button" id="buttonWest" value="West" @click="addtoCAParray(inputArray[3])">
            <div class="ListOfMovements">
                <ul>
                    <li v-for="(index, i) in getCaptain.History" :key="i">{{ (i + 1) + " - " + getCaptain.History[i]}}</li>
                </ul>
            </div>
        </div>
        <div v-if="role == 'Navigator'">
            <label for="MovementList">Movement List:</label>
            <input type="button" id="buttonNorth" value="North" @click="addtoNAVarray(inputArray[0])">
            <input type="button" id="buttonEast" value="East" @click="addtoNAVarray(inputArray[2])">
            <input type="button" id="buttonSouth" value="South" @click="addtoNAVarray(inputArray[1])">
            <input type="button" id="buttonWest" value="West" @click="addtoNAVarray(inputArray[3])">
            <div class="ListOfMovements">
                <ul>
                    <li v-for="(index, i) in getNavigator.History" :key="i">{{ (i + 1) + " - " + getNavigator.History[i]}}</li>
                </ul>
            </div>
        </div>
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
            this.injectActions(['CaptainPosition', 'NavigatorPosition']);
            this.injectGetters(['getCaptain', 'getNavigator']);
        }

        addtoCAParray(buttonReturn)
        {
            let currentPos = this.getCaptain.currentPosition
            let newPosition = {}
            switch (buttonReturn) {
                
                case "N":
                    newPosition = {x:this.getCaptain.currentPosition.x -1,y:this.getCaptain.currentPosition.y, direction:"North"}
                    this.CaptainPosition(newPosition)
                    break;
                case "E":
                    newPosition = {x:this.getCaptain.currentPosition.x,y:this.getCaptain.currentPosition.y +1, direction:"East"}
                    this.CaptainPosition(newPosition)
                    break;
                case "S":
                    newPosition = {x:this.getCaptain.currentPosition.x +1,y:this.getCaptain.currentPosition.y, direction:"South"}
                    this.CaptainPosition(newPosition)
                    break;
                case "W":
                    newPosition = {x:this.getCaptain.currentPosition.x ,y:this.getCaptain.currentPosition.y-1, direction:"West"}
                    this.CaptainPosition(newPosition)
                    break;
            
                default:
                    break;
            }
            //this.CaptainHistory(buttonReturn)
        }

        addtoNAVarray(buttonReturn)
        {
            //this.NavigatorHistory(buttonReturn)

            let currentPos = this.getNavigator.currentPosition
            let newPosition = {}
            switch (buttonReturn) {
                
                case "N":
                    newPosition = {x:this.getNavigator.currentPosition.x -1,y:this.getNavigator.currentPosition.y, direction:"North"}
                    this.NavigatorPosition(newPosition)
                    break;
                case "E":
                    newPosition = {x:this.getNavigator.currentPosition.x,y:this.getNavigator.currentPosition.y +1, direction:"East"}
                    this.NavigatorPosition(newPosition)
                    break;
                case "S":
                    newPosition = {x:this.getNavigator.currentPosition.x +1,y:this.getNavigator.currentPosition.y, direction:"South"}
                    this.NavigatorPosition(newPosition)
                    break;
                case "W":
                    newPosition = {x:this.getNavigator.currentPosition.x ,y:this.getNavigator.currentPosition.y-1, direction:"West"}
                    this.NavigatorPosition(newPosition)
                    break;
                default:
                    break;
            }
        }
        
    }
    export default new RecordCard ('keepRecord');
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
    .ListOfMovements {
        display: block;
    }
    .ListOfMovements > ul {
        display: flex;
        width: 100%;
        height: 500px;
        justify-content: flex-start;
        flex-direction: column;
        overflow-y: scroll;

    }
    .ListOfMovements > ul > li {
        color: white;
    }
</style>