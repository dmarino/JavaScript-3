<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <div class="symbol" :class="component.type" v-on:click="select"><!-- Just one main element per template -->
        <div class="x" v-show="component.comprommised"></div>
    </div>

</template>
<script>
    import Controller from '@/../lib/controller'

    // import other components you use here...

    class ComponentController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                isCompromised: false
            }
            this.props = { // props are passed in when using this component
                component: Object,
                areaPos: Number
            }
            
            this.methods = {
                select() { 

                    var symbol={}
                    symbol.areaPos = this.areaPos
                    symbol.pos = this.component.pos
                    this.setSymbolStatus(symbol)
                }
            }

            this.injectActions(['setSymbolStatus']);            
        }
    }

    export default new ComponentController('lsAreaSymbol');

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    
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


    .x{
        width: 100%;
        height: 100%;

        background-image:url("../assets/x.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;

        border-radius: 50%;
    }

</style>