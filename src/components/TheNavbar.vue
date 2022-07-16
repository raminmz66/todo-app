<template>
    <f7-navbar>
      <f7-nav-left>
        <f7-link panel-open="left" icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu"></f7-link>
      </f7-nav-left>
      <f7-nav-title>
        {{ title }}
      </f7-nav-title>
      <f7-nav-right>
        <f7-link class="searchbar-enable" :data-searchbar="`.searchbar-${searchKey}`" icon-ios="f7:search" icon-aurora="f7:search" icon-md="material:search"></f7-link>
      </f7-nav-right>
      <f7-searchbar
        :class="`searchbar-${searchKey}`"
        expandable
        search-container=".search-list"
        search-in=".item-title"
        :disable-button="!theme.aurora"
      ></f7-searchbar>
    </f7-navbar>
</template>

<script>
import { theme } from 'framework7-vue';

export default {
    data() {
        return {
            theme
        }
    },
    props: {
      title: "",
      searchKey: ""
    }
}
</script>

<style>
    
</style>