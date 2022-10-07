<template>
    <f7-page>
        <template #fixed>
            <f7-navbar :title="$t('settings.PAGE_TITLE')" :back-link="$t('navbar.BACK')"></f7-navbar>
        </template>
        <f7-list>
            <f7-list-item :title="$t('settings.LANGUAGE')" smart-select :smart-select-params="{openIn: 'popup', popupCloseLinkText: $t('navbar.CLOSE')}">
            <select v-model="$i18n.locale" @change="onLanguagechange">
                <option v-for="(language,index) in languages" :value="language.key" :key="`Lang${index}`">{{ language.label }}</option>
            </select>
            </f7-list-item>
        </f7-list>
    </f7-page>
</template>

<script>
export default {
    data() {
        return {
            languages: [
                { key: 'en', label: 'English' },
                { key: 'fa', label: 'فارسی' },
            ]
        }
    },
    methods: {
        onLanguagechange(event) {
            this.$store.dispatch('setLocale', event.target.value);
        }
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 100%;
        max-height: 600px;
        color: #727272;
    }
    .logo {
        width: 128px;
    }
    .app-title-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1.5;
    }
    .app-title {
        font-weight: 700;
        font-size: 24px;
        color: #3a3a3a;
    }
    .heading {
        margin-top: 32px;
        font-weight: 500;
        font-size: 16px;
        color: #545454;
        line-height: 0.5;
    }
    a {
        font-style: italic;
    }
    .github a {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .github a img {
        margin-top: 10px;
    }

    .license {
        margin-top: 10px;
    }
</style>