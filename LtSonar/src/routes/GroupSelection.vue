<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <div class="group-selection inside-container">
        <h1>{{player.name}}</h1>
        <h2 class="instructions"> Choose your team and your role</h2>
        <teamComponent title="Team A"></teamComponent>
        <teamComponent title="Team B"></teamComponent>
    </div>

</template>
<script>
    import Controller from '@/../lib/controller'
    import teamComponent from '@/components/TeamChoosingComponent.vue'

    class GroupController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'VFS Vue Template'
            }
            this.injectGetters(['player'])

        }

        openName( ) {
            this.showName=true;
        }
    }

    export default new GroupController('pgGroup',{teamComponent});

</script>
<style>
/* Local styles for this template */
    .group-selection {
        height: 100%;
        width: 100%;

        text-align: center;
    }

    .instructions{
        margin-bottom: 2%;
    }

</style>
