<!--

@copyright (c) 2020. Daniela Marino
-->
<template>

    <section class="area-component">
        <div class="area-title">{{ title }}</div>
        <div class="area-grid">
            <div  class="symbol" v-for="(item, index) in areaGrid" :key="index">
                {{item.type}}
            </div>
        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'

    // import other components you use here...

    class AreaController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                areaGrid:[
                    { type: "Y" },
                    { type: " " },
                    { type: " " },
                    { type: "R" },
                    { type: " " },
                    { type: "Y" },
                    { type: "G" },
                    { type: "R" },
                    { type: "B" },
                ]
            }
            this.props = { // props are passed in when using this component
                title: String
            }
        }

    }

    export default new AreaController('engineerArea');

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .area-component {
        height: 100%;
        width: 20%;
        display: inline-block;
        margin: 2%;
    }

    .area-title{
        text-align: center;
    }

    .area-grid{
        border-style: solid;
        height: 70%;
        width: 100%;
    }

    .symbol{

        display: inline-block;
        width: 30%;
        height: 25%;
        text-align: center;
    }

</style>