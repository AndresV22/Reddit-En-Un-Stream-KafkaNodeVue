<template>
  <v-card class="mx-auto" color="#FFC133" dark max-width="400">
    <v-card-title>
      <v-icon large left>
        mdi-reddit
      </v-icon>
      <span class="title font-weight-light">r/{{ comment.subreddit }}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      {{ comment.comentario }}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ comment.author }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CardComment",
  props: ["comment"]
};
</script>

<style scoped></style>
