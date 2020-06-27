<!--

@copyright (c) 2020. Daniela Marino
-->
<template>

    <section class="area-component">
        <h1 class="area-title">{{ area.name }}</h1>
        <div class="area-grid">
            <lsAreaSymbol :component="item" v-for="(item, index) in area.areaGrid" :key="index" :areaPos="area.pos">
            </lsAreaSymbol>
            <div class="blackout" v-if="!canClick()"></div>
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
            this.methods = {
                canClick() { 

                    var direction = this.getCaptain.History[this.getCaptain.History.length-1];
                    if( direction != null && direction.charAt(0) == this.area.name){
                        return true;
                    }
                    return false;
                }
            }
            this.injectGetters(['getCaptain'])
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
        color: white;
    }

    .area-grid{
        border-style: solid;
        border-color: white;
        height: 70%;
        width: 100%;
        position: relative;

        background: rgba(255, 255, 255, 0.2);
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