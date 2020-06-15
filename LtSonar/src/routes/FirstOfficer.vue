<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
Copyright (c) 2020. Jonathan Dean All Rights Reserved.
-->
<template>

    <section class="first-officer-container">
        <h1>{{playerName}}</h1>
        <div class="first-officer">
            <div class="top-container">
                <div class="first-officer-submarine">
                </div>
                <div class="first-officer-damage">
                    <div class="first-officer-damage-container"></div>
                    <div class="first-officer-damage-container"></div>
                    <div class="first-officer-damage-container"></div>
                    <div class="first-officer-damage-container"></div>
                </div>
            </div>
            <div>
                <div class="first-officer-cards" >
                    <ltFirstOfficerCard
                        title="Mines"
                        imageUrl="mines.png"
                        infoImageUrl="mines-info.png"
                        v-bind:numberOfItems="3"
                        @weaponReady="onMinesReady"
                    ></ltFirstOfficerCard>
                    <ltFirstOfficerCard
                        title="Drones"
                        imageUrl="drones.png"
                        infoImageUrl="drones-info.png"
                        v-bind:numberOfItems="4"
                        @weaponReady="onDronesReady"
                    ></ltFirstOfficerCard>
                    <ltFirstOfficerCard
                        title="Silence"
                        imageUrl="silence.png"
                        infoImageUrl="silence-info.png"
                        v-bind:numberOfItems="5"
                        @weaponReady="onSilenceReady"
                    ></ltFirstOfficerCard>
                </div>
                <div class="first-officer-cards">
                    <ltFirstOfficerCard
                        title="Torpedo"
                        imageUrl="torpedo.png"
                        infoImageUrl="torpedo-info.png"
                        v-bind:numberOfItems="3"
                        @weaponReady="onTorpedoReady"
                    ></ltFirstOfficerCard>
                    <ltFirstOfficerCard
                        title="Sonar"
                        imageUrl="sonar.png"
                        infoImageUrl="sonar-info.png"
                        v-bind:numberOfItems="3"
                        @weaponReady="onSonarReady"
                    ></ltFirstOfficerCard>
                </div>
            </div>
        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'
    import ltFirstOfficerCard from '@/components/firstOfficerCard'

    class FirstOfficerController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
            }

            this.methods = {
                onMinesReady (value) {
                    this.setMinesStatus(value);
                },
                onDronesReady(value) {
                    this.setDronesStatus(value);
                },
                onSilenceReady(value) {
                    this.setSilenceStatus(value);
                },
                onTorpedoReady(value) {
                    this.setTorpedoStatus(value);
                },
                onSonarReady(value) {
                    this.setSonarStatus(value);
                }
            }

            this.injectGetters([
                'playerName', 
                'minesStatus',
                'dronesStatus',
                'silenceStatus',
                'torpedoStatus',
                'sonarStatus'
            ]);

            this.injectActions(
                ['setMinesStatus', 
                'setDronesStatus', 
                'setSilenceStatus', 
                'setTorpedoStatus', 
                'setSonarStatus']
            );
        }
    }
    
    export default new FirstOfficerController('lsFirstOfficer', { ltFirstOfficerCard });

</script>
<style>
/* Local styles for this template */
    .top-container {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .first-officer-damage {
        display: flex;
        align-items: center;
    }

    .first-officer-damage-container {
        width: 100px;
        height: 30px;
        background-color: white;
        border: 2px solid black;
    }

    .first-officer-damaged {
        background-color: red;
    }

    .first-officer-container {
        width: 100%;
    }

    .first-officer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 80vh;
        width: 80vw;
    }

    .first-officer-submarine {
        width:350px;
        height: 100px;
        background-image: url("../assets/submarine.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    .first-officer-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>
