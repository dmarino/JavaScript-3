<!--
VFS VUE Single File Component

<pg-home user="User"></pg-home>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>
    <section class="home-container inside-container">
        <h1>Welcome {{player.name}}</h1>
        <div class="home">
            <pgNavbar></pgNavbar>

        </div>
    </section>

</template>
<script>

    import Controller from '@/../lib/controller'
    import pgNavbar from '@/views/Navbar.vue'

    class HomeController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                formData: {
                    sampleOne:"",
                    sampleTwo:42,
                },
                nickname: ""
            }
            this.props = {
                name: String,
            }
            this.injectActions(['setName']);
            this.injectGetters(['player']);
        }

        login (nickname) {
            this.setName( nickname );
        }
    }

    export default new HomeController('pgHome',{pgNavbar});

</script>
<style scoped>
    /* Local styles for this template */
    .home-container {
        display: inline-block;
        width: 100%;
    }

    .home {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .sample-form {
        border: 2px solid #333;
        margin: 1em;
        padding: 2em;
    }
</style>
