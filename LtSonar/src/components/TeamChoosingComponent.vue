<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="team-choosing">  <!-- Just one main element per template -->
        <h1>{{ title }}</h1>
        <roleComponent v-for="(item, index) in roles" :key="index" :title="item.name" name="none" :team="title">
        </roleComponent>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'
    import roleComponent from '@/components/RoleSelectionComponent.vue'

    // import other components you use here...

    class TeamController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                roles:[
                    { name: "Navigator" },
                    { name: "Captain" },
                    { name: "Firstofficer" },
                    { name: "Engineer" },
                ]
            }
            this.props = { // props are passed in when using this component
                title: String
            }
        }
    }

    export default new TeamController('pgTeam',{roleComponent});

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .team-choosing {
        display: inline-block;
        height: 100%;
        width: 45%;
        text-align: center;
    }

</style>