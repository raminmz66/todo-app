<script>
import ToDoPage from './pages/ToDoPage.vue';
import DonePage from './pages/DonePage.vue';
import AboutPage from './pages/AboutPage.vue';

export default {
  components: {
    ToDoPage
  },
  data() {
    return {
      f7params: {
        theme: 'ios',
        name: 'Todo',
        id: 'com.demoapp.test',
        disableContextMenu: true,
        routes: [
          {
            path: '/',
            component: ToDoPage,
          },
          {
            path: '/done',
            component: DonePage,
          },
          {
            path: '/about',
            component: AboutPage,
          },
        ]
      }
    }
  }
}
</script>

<template>
  <f7-app v-bind="f7params">
    <!-- Your main view, should have "main" prop -->
    <f7-view main url="/"></f7-view>
  </f7-app>
</template>

<style>

</style>
