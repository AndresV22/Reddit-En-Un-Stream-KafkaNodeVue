<template>
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn color="white" text rounded class="my-2" to="/">
        Home
      </v-btn>
      <v-btn color="white" text rounded class="my-2" to="/Team">
        Team
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        <strong>Reddit en un Stream</strong> - USACH
        {{ new Date().getFullYear() }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style></style>
