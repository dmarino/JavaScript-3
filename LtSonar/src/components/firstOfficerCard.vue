<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2020. Jonathan. All Rights Reserved.
-->
<template>

    <div class="fo-card-style">
        <div class="fo-card-btns">  
            <h3 class="fo-card-title">Title</h3>      
            <div class="fo-card-image"></div>
            <div class="fo-side-btn fo-side-btn-1 fo-side-btn-active"></div>
            <div class="fo-side-btn fo-side-btn-2 fo-side-btn-active"></div>
            <div class="fo-side-btn fo-side-btn-3"></div>
            <div class="fo-side-btn fo-side-btn-4"></div>
            <div class="fo-side-btn fo-side-btn-5"></div>
        </div>
        <div class="fo-card-info">
            
        </div>
    </div>

</template>
<script>
    import Controller from '@/../lib/controller'

    class FirstOfficerCardController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                someData: "Card"
            }
            this.props = { 
                title: String
            }
        }

        doIt( event ) {
        }
    }

    export default new FirstOfficerCardController('ltFirstOfficerCard');

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .fo-card-style {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        height: 400px;
        width: 300px;
        background-color: #444444;
        border: 2px solid white;
        border-radius: 5px;
        padding: 10px;
    }

    .fo-card-btns {
        padding: 20px;
        display: block;
        position:relative;
        width:300px;
        height:300px;
    }  

    .fo-card-title {
        position: relative;
        top:  5px;
        left: 50px;
        text-transform: uppercase;
    }

    .fo-card-title::before {
        content: "";
        position: absolute;
        display: block;
        width: 50px;
        height: 50px;
        top: -15px;
        left:-55px;
        border-radius: 50%;
        background-image:url("https://dummyimage.com/300x300/fff/aaa");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .fo-card-image {
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        width:200px;
        height:200px;
        background-image:url("https://dummyimage.com/300x300/fff/aaa");
        background-repeat: no-repeat;
        background-size: cover;
        border-radius:50%;
    }

    .fo-side-btn {
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%) rotate(45deg);
        border: 20px solid white;
        display: inline-block;
        width:250px;
        height:250px;
        border-radius: 50%;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }

    .fo-side-btn::after {
        content: '';
        display: block;
        position: absolute;
        width:250px;
        height:250px;
        left: -20px;
        top: -20px;
        transform: rotate(40deg);
        border: 20px solid #444444;
        border-radius: 50%;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }

    .fo-side-btn-active {
        border-top-color: red;
    }

    
    .fo-side-btn-2 {
        transform: translate(-50%, -50%) rotate(90deg);
        z-index: 2;
    }
    .fo-side-btn-3 {
        transform: translate(-50%, -50%) rotate(135deg);
        z-index: 3;
    }
    .fo-side-btn-4 {
        transform: translate(-50%, -50%) rotate(180deg);
        z-index: 4;
    }
    .fo-side-btn-5 {
        transform: translate(-50%, -50%) rotate(225deg);
        z-index: 5;
    }

    .fo-card-info {
        border: 2px solid black;
        border-radius: 5px;
        width: 100%;
        height: 80px;
        background-image:url("https://dummyimage.com/300x300/fff/aaa");
        background-repeat: no-repeat;
        background-size: cover;
    }

</style>