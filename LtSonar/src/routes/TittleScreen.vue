<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <div class="tittle-screen">

        <div class="tittle-center">

            <div class="lt-logo"></div>
            <button class="button" @click="openName()"> Join A Game</button>

        </div>

        <nameComponent v-show= "showName" ></nameComponent>

    </div>

</template>
<script>
    import Controller from '@/../lib/controller'
    import nameComponent from '@/components/NameComponent.vue'

    class TittleController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'VFS Vue Template',
                showName: false            }

        }

        openName( ) {
            this.showName=true;
        }
    }

    export default new TittleController('pgTittle',{nameComponent});

</script>
<style scoped>
/* Local styles for this template */
    .tittle-screen {
        height: 100%;
        width: 100%;

        background-image:url("../assets/background.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .tittle-center {

        width:50%;
        height:80%;

        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);

        text-align: center;
    }

    .lt-logo{

        width:100%;
        height:70%;

        background-image:url("../assets/logo white.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .button{

        display: inline-block;
        width: 30%;

        background: #fff;

        color: black;
        font-family: 'Oswald', sans-serif;
        text-align: center;
        font-size: 1.875em;

        margin-top: 5%;
        padding: 2%;
        border-radius: 25px;
        
    }

    .button:hover{
        cursor: pointer;
        background: #ddd;
    }

</style>
