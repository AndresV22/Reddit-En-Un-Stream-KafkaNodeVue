<template>
  <div>
    <v-btn class="backBtn" color="primary" to="/Pipeline">Volver</v-btn>
    <v-col class="text-center"><h1>Informacion de comentario</h1></v-col>
    <v-row>
      <v-col class="columna"
        ><v-text-field
          v-model="selectedComment.author"
          label="Autor"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="selectedComment.comentario"
          label="Comentario"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="selectedComment.num_voca"
          label="Vocales"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="selectedComment.num_cons"
          label="Consonantes"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="selectedComment.num_mayus"
          label="Mayusculas"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="selectedComment.num_minus"
          label="Minusculas"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="selectedComment.idioma"
          label="Idioma"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="selectedComment.subreddit"
          label="Subreddit"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="selectedComment.post"
          label="Post"
          readonly
        ></v-text-field>
      </v-col>
      <v-col class="columna">
        <v-row>
          <v-col>
            <v-card>Grafico neg</v-card>
          </v-col>
          <v-col>
            <v-card>Grafico pos</v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card>Grafico neu</v-card>
          </v-col>
          <v-col>
            <v-card>Grafico comp</v-card>
          </v-col>
        </v-row>
        <v-text-field
          value="El analisis de sentimiento demuestra que esta feliz"
          label="Analisis"
          readonly
          class="textF"
        >
        </v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Comment",
  data: () => ({}),
  computed: {
    ...mapState(["selectedComment"])
  }
};
</script>

<style scoped>
.backBtn {
  margin-top: 20px;
  margin-left: 20px;
}
.columna {
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
  margin-top: 30px;
}
.textF {
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
  margin-top: 30px;
}
</style>
