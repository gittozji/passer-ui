<template>
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="username"
            :counter="32"
            :rules="usernameRules"
            label="用户名"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="password"
            label="密码"
            :rules="passwordRules"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="12"
          class="text-center"
        >
          <v-btn large color="primary" @click="sign">注册</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    name: 'sign',
    data() {
      return {
        usernameRules: [
          v => !!v || '不能为空',
          v => (v && v.length <= 32) || '不能超过32字符',
        ],
        passwordRules: [
          v => !!v || '不能为空',
        ],
        emailRules: [
          v => !!v || '不能为空',
          v => /.+@.+\..+/.test(v) || '格式非法',
        ],
      }
    },
    methods: {
      sign() {
        if (this.$refs.form.validate()) {
          alert("调后台")
        }
      }
    },
    created() {
    },
  }
</script>