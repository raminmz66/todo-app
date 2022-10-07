<template>
    <f7-page>
        <template #fixed>
            <f7-navbar :title="$t('about.PAGE_TITLE')" :back-link="$t('navbar.BACK')"></f7-navbar>
        </template>
        <div class="container">
            <div class="logo">
                <img src="../assets/logo.svg" />
            </div>
            <div class="app-title-container">
                <span class="app-title">
                    {{ this.appTitle }}
                </span>
                <span>
                    {{ this.appVersion }}
                </span>
                <span class="license">
                    <a class="external" target="_blank" href="https://www.gnu.org/licenses/gpl-3.0.en.html">
                    licensed under GNU GPL v3
                    </a>
                </span>
            </div>
            <p class="github">
                <a class="external" target="_blank" href="https://github.com/raminmz66/todo-app">
                    Source code available at GitHub
                    <img src="../assets/github.svg" width="64" />
                </a>
            </p>
            <div class="heading">
                {{ $t('about.DEVELOPED_BY') }}
            </div>
            <div>
                {{ $t('about.DEVELOPER') }}
            </div>
            <p>
                <a class="external" target="_blank" href="mailto:ramin.mz66@gmail.com">
                    <img src="../assets/mail.svg" width="64" />
                </a>
            </p>
        </div>
    </f7-page>
</template>

<script>
export default {
    
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