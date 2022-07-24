<template>
    <f7-panel left push backdrop>
      <f7-view>
        <f7-page bgColor="white">
          <f7-list menu-list>
            <f7-list-item
              link
              title="Home"
              :selected="true"
              @click="() => (selected = 'home')"
            >
              <template #media>
                <f7-icon md="material:home" aurora="f7:house_fill" ios="f7:house_fill" />
              </template>
            </f7-list-item>
            <f7-list-item
              link
              title="About"
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