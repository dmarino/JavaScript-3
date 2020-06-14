<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <div class="nameModalContainer"> 

        <div class="nameModal">
            <form @submit.prevent="login( nickname )">
                <label>NICKNAME: </label>
                <input name="nick" v-model="nickname" placeholder="playerName">
                <button value="Submit"> OK</button>
            </form>
        </div>

    </div>

</template>
<script>
    import Controller from '@/../lib/controller'

    // import other components you use here...

    class NameController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                someData: "Hello world",
                nickname: ""
            }

            this.injectActions(['setName']);
            this.injectGetters(['playerName']);
        }

        login (nickname) {
            this.setName( nickname );
            this.$router.push('/home')
        }
    }

    export default new NameController('pgNameComponent');

</script>
<style>

    .nameModalContainer{
        width: 100%;
        height: 100%;

        position: absolute;
        background: rgba(0, 0, 0, 0.5);
    }

    .nameModal{

        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);

        background: #10659c;
        padding: 1% 2% 1% 2%;

        border-radius: 25px;
        border-style: solid;
        border-color: #fff;
    }


</style>