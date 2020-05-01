<template>
  <div class="embedVideo">
      <v-container fluid>
          <v-row>
              <v-col cols="12" class="py-0">
                  <h1>Embed Video</h1>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                  <v-card>
                      <v-card-title>Responsive embed video 21:9</v-card-title>
                      <v-card-subtitle>21:9 aspect ratio</v-card-subtitle>
                      <v-card-text class="pa-0">
                      <v-responsive :aspect-ratio="21/9">
                      <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/noSGoH8JIxg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </v-responsive>
                      </v-card-text>
                  </v-card>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                  <v-card>
                      <v-card-title>Responsive embed video 16:9</v-card-title>
                      <v-card-subtitle>16:9 aspect ratio</v-card-subtitle>
                      <v-card-text class="pa-0">
                      <v-responsive :aspect-ratio="16/9">
                      <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/noSGoH8JIxg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </v-responsive>
                      </v-card-text>
                  </v-card>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                  <v-card>
                      <v-card-title>Responsive embed video 1:1</v-card-title>
                      <v-card-subtitle>1:1 aspect ratio</v-card-subtitle>
                      <v-card-text class="pa-0">
                      <v-responsive :aspect-ratio="1/1">
                      <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/noSGoH8JIxg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </v-responsive>
                      </v-card-text>
                  </v-card>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                  <v-card>
                      <v-card-title>Responsive embed video 4:3</v-card-title>
                      <v-card-subtitle>4:3 aspect ratio</v-card-subtitle>
                      <v-card-text class="pa-0">
                      <v-responsive :aspect-ratio="4/3">
                      <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/noSGoH8JIxg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </v-responsive>
                      </v-card-text>
                  </v-card>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>