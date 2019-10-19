<template>
  <v-row align="center">
    <v-col class="text-center" cols="12" sm="12">
      <div class="my-2">
        <v-flex xs12>
          <v-img
            :src="require('../assets/logo.png')"
            class="my-3"
            contain
            height="200"
          ></v-img>
        </v-flex>
      </div>
    </v-col>
    <v-col class="text-center" cols="12" sm="12">
      <div class="my-2">
        <v-btn large color="primary" @click="sign">开始</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'welcome',
    data() {
      return {}
    },
    methods: {
      sign() {
        this.$router.replace({path: "./sign", query: {refresh: true}});
      }
    },
    created() {
    },
  }
</script>