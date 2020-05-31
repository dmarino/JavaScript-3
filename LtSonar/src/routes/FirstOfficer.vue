<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
Copyright (c) 2020. Jonathan Dean All Rights Reserved.
-->
<template>

    <section class="first-officer-container">
        <div class="first-officer">
            <h1 class="title"></h1>
            <div class="dialog">
                <h3 class="title">Welcome to {{ name }}</h3>
            </div>
            <ltFirstOfficerCard></ltFirstOfficerCard>
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
                name: 'VFS Vue Template',
            }
        }
    }

    export default new FirstOfficerController('lsFirstOfficer', { ltFirstOfficerCard });

</script>
<style>
/* Local styles for this template */
    .first-officer-container {
        display: inline-block;
        width: 100%;
    }

    .first-officer {
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
</style>
