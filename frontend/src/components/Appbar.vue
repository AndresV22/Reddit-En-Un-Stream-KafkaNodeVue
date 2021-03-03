<template>
  <v-app-bar app class="primary lighten-1 text-center white--text" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/logo_reddit.png"
        transition="scale-transition"
        width="40"
      />

      <h2>Reddit en un Stream</h2>
    </div>

    <v-spacer></v-spacer>

    <v-btn href="https://www.reddit.com/" target="_blank" text>
      <span class="mr-2">Ir a Reddit</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style></style>
