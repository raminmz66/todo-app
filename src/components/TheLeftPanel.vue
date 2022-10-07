<template>
    <f7-panel left push backdrop>
      <f7-view>
        <f7-page class="sidebar-panel-left">
          <div class="sidebar-logo">
            <img src="../assets/logo.svg" />
          </div>
          <f7-list menu-list>
            <f7-list-item
              link="/about"
              view=".view-main"
              :title="$t('panel.ABOUT')"
              panel-close
            >
              <template #media>
                <f7-icon md="material:person" aurora="f7:person_fill" ios="f7:person_fill" />
              </template>
            </f7-list-item>
            <f7-list-item
              link="/settings"
              view=".view-main"
              :title="$t('panel.SETTINGS')"
              panel-close
            >
              <template #media>
                <f7-icon md="material:settings" aurora="f7:gear_alt_fill" ios="f7:gear_alt_fill" />
              </template>
            </f7-list-item>
          </f7-list>
          <div class="version">
            {{ $t('panel.VERSION') }}: {{ this.appVersion }}
          </div>
        </f7-page>
      </f7-view>
    </f7-panel>
</template>

<script>
export default {
    
}
</script>

<style scoped>
  .version {
    text-align: center;
    position: absolute;
    bottom: 10px;
    width: 100%;
  }
</style>