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
        <v-btn large color="primary">开始</v-btn>
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
    created() {
    },
  }
</script>
<style scoped>
  .my-3 {
    margin-top: 30%;
  }

  .advertise {
    text-align: center;

  }
</style>