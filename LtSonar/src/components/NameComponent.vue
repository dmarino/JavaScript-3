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
                <input  id="name_input" type="text" name="nick" v-model="nickname" placeholder="playerName">
                <button id="name_btn" value="Submit"> OK</button>
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
                nickname: ""
            }

            this.injectActions(['setName']);
            this.injectGetters(['playerName']);
        }

        login (nickname) {

            if(nickname!="" || nickname!= " "){
                this.setName( nickname );
                this.$router.push('/selection')
            }
            else{
                alert("the nickname can't be empty");
            }
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
        padding-left: 2%;

        border: 1px solid #aaa;
        border-radius: 25px;
    }

    #name_input{
        
        background: #10659c;
        width: 70%;
        margin-top: 1%;
        margin-left: 1%;
        font-size: 1.5vw;

        color: #fff;

        border: none !important;

    }

    #name_input:hover{
        outline: none;
        border: none !important;
    }

    #name_input::placeholder {
        color:#fff;
        opacity: 0.7; 
    }

    #name_btn{
        background-color: #0288D1;
        width: 20%;
        height: 100%;
        font-size: 1.5vw;
        border: none;
        color: white; 
        float: right;

        padding-right: 2%;

        -webkit-border-top-right-radius:25px;
        -webkit-border-bottom-right-radius:25px;
        -moz-border-radius-topright:25px;
        -moz-border-radius-bottomright:25px;
        border-top-right-radius:25px;
        border-bottom-right-radius:25px;
    }


</style>