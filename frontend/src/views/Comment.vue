<template>
  <div>
    <v-btn class="backBtn" color="primary" to="/Pipeline">Volver</v-btn>
    <v-col class="text-center"><h1>Analisis del comentario</h1></v-col>
    <v-row>
      <v-col class="columna">
        <v-row
          ><v-col
            ><CardComment
              class="cardComment"
              v-bind:comment="selectedComment"/></v-col
        ></v-row>
      </v-col>
      <v-col class="columna">
        <v-card>
          <h3>
            Vocales
          </h3>
          <p>
            {{ selectedComment.num_voca }}
          </p>
          <h3>
            Consonantes
          </h3>
          <p>
            {{ selectedComment.num_cons }}
          </p>
          <h3>
            Mayusculas
          </h3>
          <p>
            {{ selectedComment.num_mayus }}
          </p>
          <h3>
            Minusculas
          </h3>
          <p>
            {{ selectedComment.num_minus }}
          </p>
          <h3>
            Stop words
          </h3>
          <p>
            {{ selectedComment.num_sw }}
          </p>
          <h3>
            Idioma
          </h3>
          <p>
            {{ selectedComment.idioma }}
          </p>
          <h3>
            Subreddit
          </h3>
          <p>
            {{ selectedComment.subreddit }}
          </p>
          <h3>
            Post
          </h3>
          <p>
            {{ selectedComment.post }}
          </p>
        </v-card>
      </v-col>
      <v-col class="columna">
        <v-row>
          <v-col>
            <v-card>
              <v-col class="text-center">
                <h2>Negatividad</h2>
                <v-progress-circular
                  :rotate="360"
                  :size="100"
                  :width="15"
                  :value="negatividad"
                  color="red"
                >
                  {{ negatividad }}%
                </v-progress-circular>
              </v-col>
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <v-col class="text-center">
                <h2>Positividad</h2>
                <v-progress-circular
                  :rotate="360"
                  :size="100"
                  :width="15"
                  :value="positividad"
                  color="blue"
                >
                  {{ positividad }}%
                </v-progress-circular>
              </v-col>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card>
              <v-col class="text-center">
                <h2>Neutro</h2>
                <v-progress-circular
                  :rotate="360"
                  :size="100"
                  :width="15"
                  :value="neutralidad"
                  color="gray"
                >
                  {{ neutralidad }}%
                </v-progress-circular>
              </v-col>
            </v-card>
          </v-col>
          <v-col>
            <v-card
              ><v-col class="text-center">
                <h2>Compuesto</h2>
                <v-progress-circular
                  :rotate="360"
                  :size="100"
                  :width="15"
                  :value="compuesto"
                  color="purple"
                >
                  {{ compuesto }}
                </v-progress-circular>
              </v-col></v-card
            >
          </v-col>
        </v-row>
        <v-card class="cardComment">
          <h2 class="text-center">Analisis</h2>
          <p v-if="positividad > negatividad">1) {{ analisis.pos }}</p>
          <p v-if="negatividad > positividad">1) {{ analisis.neg }}</p>
          <p v-if="negatividad == positividad">1) {{ analisis.medio }}</p>
          <p v-if="neutralidad > 50">2) {{ analisis.neuAlto }}</p>
          <p v-if="neutralidad < 50">2) {{ analisis.neuBajo }}</p>
          <p v-if="neutralidad == 50">2) {{ analisis.neuMedio }}</p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardComment from "@/components/CardComment";
export default {
  name: "Comment",
  components: {
    CardComment
  },
  data: () => ({
    analisis: {
      pos:
        "El analisis concluye que el comentario tiene una connotacion mas positiva que negativa.",
      neg:
        "El analisis concluye que el comentario tiene una connotacion mas negativa que positiva.",
      medio: "Hay tantas palabras negativas como positivas.",
      neuAlto:
        "El comentario tiene un nivel alto de neutralidad. Esto quiere decir que el comentario no es exageradamente negativo ni positivo.",
      neuBajo:
        "El comentario tiene un nivel bajo de neutralidad. Esto quiere decir que tiene una connotacion demasiado positiva o demasiado negativa.",
      neuMedio: "El comentario tiene un 50% de palabras neutras."
    }
  }),
  computed: {
    ...mapState(["selectedComment"]),
    negatividad() {
      return this.selectedComment.neg.toFixed(2) * 100;
    },
    positividad() {
      return this.selectedComment.pos.toFixed(2) * 100;
    },
    neutralidad() {
      return this.selectedComment.neu.toFixed(2) * 100;
    },
    compuesto() {
      return this.selectedComment.comp.toFixed(2) * 100;
    }
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
  margin-right: 80px;
  margin-top: 30px;
}
.cardComment {
  margin-bottom: 20px;
  margin-top: 30px;
}
h1 {
  margin-top: 30px;
}
h2 {
  color: #393939;
}
h3 {
  padding: 0 1.5em;
  color: #393939;
}
p {
  padding: 0 3em;
  padding-bottom: 10px;
}
</style>
