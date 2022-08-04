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
              title="About"
              panel-close
            >
              <template #media>
                <f7-icon md="material:person" aurora="f7:person_fill" ios="f7:person_fill" />
              </template>
            </f7-list-item>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-panel>
</template>

<script>
export default {
    
}
</script>

<style>

</style>