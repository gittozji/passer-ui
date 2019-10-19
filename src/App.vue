<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline">
        <span>Passer</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <div style="margin-top: 56px">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>
