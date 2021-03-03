<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/reddit.jpg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Bienvenido a Reddit en un Stream
        </h1>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-btn rounded color="primary" to="/Pipeline"> Empezar </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Welcome",

  data: () => ({}),
};
</script>
