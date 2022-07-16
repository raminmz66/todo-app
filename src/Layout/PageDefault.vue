<template>
    <f7-page>
        <template v-slot:fixed>
            <TheNavbar :title="navbarTitle" :searchKey="navbarKey"></TheNavbar>
            <TheLeftPanel></TheLeftPanel>
            <f7-toolbar bottom tabbar labels>
                <f7-link tab-link animate="false" href="/" :tab-link-active="navbarKey == 'todo'" text="TO DO" icon-ios="f7:square_pencil" icon-aurora="f7:square_pencil" icon-md="material:edit"></f7-link>
                <f7-link tab-link animate="false" href="/done" :tab-link-active="navbarKey == 'done'" text="DONE" icon-ios="f7:checkmark_square" icon-aurora="f7:checkmark_square" icon-md="material:checkbox"></f7-link>
            </f7-toolbar>
        </template>
        <slot></slot>
    </f7-page>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue';
import TheLeftPanel from '../components/TheLeftPanel.vue';

export default {
    components: {
        TheNavbar,
        TheLeftPanel
    },
    props: {
        navbarTitle: "",
        navbarKey: ""
    }    
}
</script>

<style>
    
</style>