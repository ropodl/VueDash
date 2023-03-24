<script setup>
import { useTitle } from "@vueuse/core";
useTitle("Cards Example Page");
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Cards</h1>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card border flat>
          <v-img
            cover
            src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
            height="200"
          ></v-img>
          <v-card-text>
            Visit ten places on our planet that are undergoing the biggest
            changes today.
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn text color="primary"> Card link </v-btn>
            <v-btn text color="primary"> Another link </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card border flat>
          <v-img
            cover
            src="https://appstack.bootlab.io/img/photos/unsplash-1.jpg"
          >
          </v-img>
          <v-card-title>Card with image and links</v-card-title>
          <v-card-subtitle
            >Some quick example text to build on the card title and make up the
            bulk of the card's content.</v-card-subtitle
          >
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn text color="primary" router link to="/"> Card link </v-btn>
            <v-btn text color="primary" router link to="/">
              Another link
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card border flat>
          <v-img
            cover
            src="https://appstack.bootlab.io/img/photos/unsplash-1.jpg"
          >
          </v-img>
          <v-card-title>Card with image and button</v-card-title>
          <v-card-subtitle
            >Some quick example text to build on the card title and make up the
            bulk of the card's content.</v-card-subtitle
          >
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn class="px-6" color="primary" router link to="/">
              Go somewhere
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card border flat>
          <v-img
            cover
            src="https://appstack.bootlab.io/img/photos/unsplash-1.jpg"
          >
          </v-img>
          <v-card-title>Card with image and list</v-card-title>
          <v-card-subtitle
            >Some quick example text to build on the card title and make up the
            bulk of the card's content.</v-card-subtitle
          >
          <v-divider></v-divider>
          <v-card-text class="pa-0">
            <v-list>
              <v-list-item v-for="i in 3" :key="i">
                <v-list-item-content>
                  <v-list-item-title>Single-line item</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card border flat>
          <v-card-title>Card with links</v-card-title>
          <v-card-subtitle
            >Some quick example text to build on the card title and make up the
            bulk of the card's content.</v-card-subtitle
          >
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn text router link to="/" color="primary"> Card link </v-btn>
            <v-btn text router link to="/" color="primary">
              Another link
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card border flat>
          <v-card-title>Card with button</v-card-title>
          <v-card-subtitle
            >Some quick example text to build on the card title and make up the
            bulk of the card's content.</v-card-subtitle
          >
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn class="px-6" to="/" color="primary"> Card link </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card border flat>
          <v-card-title>Card with list</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-0">
            <v-list>
              <v-list-item v-for="i in 3" :key="i">
                <v-list-item-content>
                  <v-list-item-title>Single-line item</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
