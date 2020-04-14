<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          HoneyDo App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="link in navigationLinks"
          :key="link.title"
          :to="link.path"
          :icon="link.icon"
          :label="link.caption"/>
      </q-tabs>
    </q-footer>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
      :breakpoint="767"
      :width="200"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>
        <NavigationLink
          v-for="link in navigationLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import NavigationLink from 'components/NavigationLink'

export default {
  name: 'MainLayout',

  components: {
    NavigationLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      navigationLinks: [
        {
          title: "Todo's",
          caption: "Todo's List",
          icon: 'list',
          path: '/'
        },
        {
          title: 'Settings',
          caption: 'Configuration',
          icon: 'settings',
          path: '/settings'
        }
      ]
    }
  }
}
</script>

<style type="text/css">
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }
</style>
