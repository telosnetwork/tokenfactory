<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!--
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        -->

        <q-toolbar-title>
          Token factory
        </q-toolbar-title>

        <login-button></login-button>
      </q-toolbar>
    </q-header>

    <!--
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Example pages
        </q-item-label>
        <PageLink
          v-for="link in pages"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import LoginButton from "components/LoginButton.vue";
//import PageLink from "components/PageLink.vue"

const pagesData = [
  {
    title: "Create token",
    caption: "Create a new token",
    icon: "new",
    path: "/create"
  },
];

export default {
  name: "MainLayout",
  components: { LoginButton },
  data() {
    return {
      leftDrawerOpen: false,
      pages: pagesData
    };
  }
};
</script>
