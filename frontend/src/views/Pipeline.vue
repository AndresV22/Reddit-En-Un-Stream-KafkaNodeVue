<template>
  <div>
    <v-btn class="backBtn" color="primary" to="/">Volver</v-btn>
    <v-btn class="backBtn" color="primary">Actualizar</v-btn>
    <v-col class="text-center">
      <h1 class="display-1 font-weight-bold mb-3">Dashboard</h1>
    </v-col>
    <v-row class="row">
      <v-col>
        <Chart
          name="Usuarios"
          description="Cantidad de usuarios que se registran"
        />
      </v-col>
      <v-col>
        <Chart name="Comentarios" description="Cantidad de comentarios" />
      </v-col>
      <v-col>
        <Chart name="Otros" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-col class="text-center">
          <h2 class="display-1 font-weight-bold mb-3">Entradas</h2>
        </v-col>
        <v-text-field
          class="search"
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1 table"
        ></v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Chart from "@/components/Chart.vue";

export default {
  components: {
    Chart
  },
  data: () => ({
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Iron (%)", value: "iron" }
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%"
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%"
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%"
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%"
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%"
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: "0%"
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%"
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%"
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%"
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%"
      }
    ]
  })
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
  margin-left: 90px;
  margin-right: 90px;
}
</style>
