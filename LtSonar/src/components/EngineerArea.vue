<!--

@copyright (c) 2020. Daniela Marino
-->
<template>

    <section class="area-component">
        <div class="area-title">{{ area.name }}</div>
        <div class="area-grid">
            <lsAreaSymbol :component="item" v-for="(item, index) in area.areaGrid" :key="index" :areaPos="area.pos">
            </lsAreaSymbol>
        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'
    import lsAreaSymbol from '@/components/EngineerAreaSymbol.vue'

    // import other components you use here...

    class AreaController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {

            }
            this.props = { // props are passed in when using this component
                area: Object
            }
        }

    }

    export default new AreaController('engineerArea',{lsAreaSymbol});

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
        height: 30%;
        margin: 1%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .Y{
        background-image:url("../assets/yellow.png");
    }

    .R{
        background-image:url("../assets/missile.png");
    }

    .G{
        background-image:url("../assets/radar.png");
    }

    .B{
        background-image:url("../assets/reactor.png");
    }

</style>