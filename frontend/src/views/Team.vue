<template>
  <div>
    <v-btn class="backBtn" color="primary" to="/">Volver</v-btn>
    <v-row>
      <v-col class="text-center">
        <h1>Equipo</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="434" tile>
          <v-img height="100%" src="@/assets/Andres.jpg" aspect-ratio="1">
            <v-row align="end" class="fill-height">
              <v-col align-self="start" class="pa-0" cols="12"> </v-col>
              <v-col class="py-0">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content>
                    <v-list-item-title class="title">
                      Andrés Alcaíno
                    </v-list-item-title>
                    <v-list-item-subtitle
                      >Frontend Developer</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-col>
      <v-card class="mx-auto" max-width="434" tile>
        <v-img height="100%" src="@/assets/Valentina.jpeg" aspect-ratio="1">
          <v-row align="end" class="fill-height">
            <v-col align-self="start" class="pa-0" cols="12"> </v-col>
            <v-col class="py-0">
              <v-list-item color="rgba(0, 0, 0, .4)" dark>
                <v-list-item-content>
                  <v-list-item-title class="title">
                    Valentina Ligueño
                  </v-list-item-title>
                  <v-list-item-subtitle>Backend Developer</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
      <v-col>
        <v-card class="mx-auto" max-width="434" tile>
          <v-img height="100%" src="@/assets/Alberto.jpeg" aspect-ratio="1">
            <v-row align="end" class="fill-height">
              <v-col align-self="start" class="pa-0" cols="12"> </v-col>
              <v-col class="py-0">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content>
                    <v-list-item-title class="title">
                      Alberto Rodríguez
                    </v-list-item-title>
                    <v-list-item-subtitle
                      >Backend | Engineer</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.backBtn {
  margin-top: 20px;
  margin-left: 20px;
}
</style>
