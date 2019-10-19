<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline">
        <span>Passer</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>
