<template>
    <f7-page>
        <template #fixed>
            <f7-navbar title="Settings" back-link="Back"></f7-navbar>
        </template>
        <f7-list>
            <f7-list-item title="Language" smart-select :smart-select-params="{openIn: 'popup'}">
            <select name="language">
                <option value="en" selected>English</option>
                <option value="fa">فارسی</option>
            </select>
            </f7-list-item>
        </f7-list>
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