<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          HoneyDo App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-footer>
      Footer
    </q-footer>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
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
