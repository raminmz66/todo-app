<template>
    <f7-page>
        <template #fixed>
            <TheNavbar :title="navbarTitle"></TheNavbar>
            <TheLeftPanel></TheLeftPanel>
            <f7-toolbar bottom tabbar labels>
                <f7-link tab-link back :animate="false" href="/" :tab-link-active="pageKey == 'todo'" :text="$t('tabs.TODO')" icon-ios="f7:square_pencil" icon-aurora="f7:square_pencil" icon-md="material:edit"></f7-link>
                <f7-link tab-link back :animate="false" href="/done" :tab-link-active="pageKey == 'done'" :text="$t('tabs.DONE')" icon-ios="f7:checkmark_square" icon-aurora="f7:checkmark_square" icon-md="material:checkbox"></f7-link>
            </f7-toolbar>
        </template>
        <slot></slot>
    </f7-page>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue';
import TheLeftPanel from '../components/TheLeftPanel.vue';

export default {
    inject: ['pageKey'],
    components: {
        TheNavbar,
        TheLeftPanel
    },
    props: {
        navbarTitle: ""
    }    
}
</script>

<style>
    
</style>