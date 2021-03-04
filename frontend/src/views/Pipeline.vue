<template>
  <div>
    <v-btn class="backBtn" color="primary" to="/">Volver</v-btn>
    <v-btn class="backBtn" color="primary">Actualizar</v-btn>
    <v-row>
      <v-col>
        <v-col class="text-center">
          <h2 class="display-1 font-weight-bold mb-3">Entradas</h2>
        </v-col>
        <v-card class="table">
          <v-card-title>
            <v-text-field
              class="search"
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="comments"
            :items-per-page="5"
            :search="search"
            class="elevation-1"
          >
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon big color="blue" @click="enterComment(item)">
                mdi-door
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    search: "",
    headers: [
      {
        text: "id",
        value: "id"
      },
      { text: "Autor", value: "author" },
      { text: "Comentario", value: "comentario" },
      { text: "Idioma", value: "idioma" },
      { text: "Acciones", value: "actions", sorteable: false }
    ]
  }),
  computed: {
    ...mapState(["comments", "selectedComment"])
  },
  methods: {
    fetchComments() {
      this.$store.dispatch("getComments");
    },
    enterComment(comment) {
      this.$store.commit("SET_SELECTED_COMMENT", comment);
      console.log("Comentario:", this.selectedComment);
      this.$router.push("/Comment");
    }
  },
  mounted() {
    this.fetchComments();
    console.log("comentarios: ", this.comments);
  }
};
</script>

<style scoped>
.backBtn {
  margin-top: 20px;
  margin-left: 20px;
}

.row {
  margin-top: 20px;
}

.table {
  margin-left: 80px;
  margin-right: 80px;
  margin-bottom: 50px;
}

.search {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
