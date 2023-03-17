<script setup>
import { mdiCheckboxMarkedCircle, mdiMessage, mdiPlusCircle } from "@mdi/js";
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Welcome back, John Doe!</h1>
      </v-col>
      <v-col cols="12" md="8">
        <v-card flat border>
          <v-card-text>
            <v-row>
              <v-col lg="1">
                <v-avatar
                  ><v-img
                    src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                  ></v-img
                ></v-avatar>
              </v-col>
              <v-col cols="12" lg="11">
                <div class="text-h6">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </div>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  aperiam magni tempore repellat mollitia repudiandae ullam
                  beatae esse inventore earum eos, reprehenderit ducimus
                  exercitationem eveniet molestiae placeat animi veniam
                  possimus.
                  <div class="imageGallery">
                    <v-avatar tile size="">
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                      ></v-img>
                    </v-avatar>
                    <v-avatar tile size="">
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                      ></v-img>
                    </v-avatar>
                  </div>
                </div>
                <v-card-actions class="px-0">
                  <v-btn color="primary" text small>
                    <v-icon class="mr-3">thumb_up</v-icon> Like</v-btn
                  >
                  <v-btn color="primary" text small>
                    <v-icon class="mr-3">comment</v-icon> Comment</v-btn
                  >
                  <v-btn color="primary" text small>
                    <v-icon class="mr-3">reply</v-icon>
                    Share</v-btn
                  >
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text class="d-flex">
            <v-col class="py-0">
              <v-card-actions class="px-0"> </v-card-actions>
            </v-col>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card flat border class="mb-3">
          <v-list color="transparent" density="compact">
            <v-list-item>
              <template v-slot:prepend>
                <v-avatar size="60">
                  <v-img
                    src="https://appstack.bootlab.io/img/avatars/avatar-4.jpg"
                  ></v-img>
                </v-avatar>
              </template>
              <v-list-item-title>Stacie Hall</v-list-item-title>
              <v-list-item-subtitle>Lead Developer</v-list-item-subtitle>
              <template v-slot:append>
                <v-btn icon variant="text">
                  <v-icon :icon="mdiCheckboxMarkedCircle"></v-icon>
                </v-btn>
              </template>
            </v-list-item>
          </v-list>
          <v-card-actions>
            <v-row>
              <v-col cols="6">
                <v-btn block border class="text-capitalize">
                  <v-icon start :icon="mdiPlusCircle"></v-icon>
                  Follow
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn block border class="text-capitalize">
                  <v-icon start :icon="mdiMessage"></v-icon>
                  Message
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
        <v-card flat border class="mb-3">
          <v-card-title>Following</v-card-title>
          <v-divider></v-divider>
          <v-list density="compact">
            <v-list-item>
              <template v-slot:prepend>
                <v-avatar size="50">
                  <v-img
                    cover
                    src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                  ></v-img>
                </v-avatar>
              </template>
              <v-list-item-title>Steve Jobs</v-list-item-title>
              <v-list-item-subtitle> UI/UX Designer </v-list-item-subtitle>
              <template v-slot:append>
                <v-btn variant="tonal" size="small" class="text-capitalize"
                  >Unfollow</v-btn
                >
              </template>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <template v-slot:prepend>
                <v-avatar size="50">
                  <v-img
                    cover
                    src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                  ></v-img>
                </v-avatar>
              </template>
              <v-list-item-title>Steve Jobs</v-list-item-title>
              <v-list-item-subtitle> UI/UX Designer </v-list-item-subtitle>
              <template v-slot:append>
                <v-btn variant="tonal" size="small" class="text-capitalize"
                  >Unfollow</v-btn
                >
              </template>
            </v-list-item>
          </v-list>
        </v-card>
        <!-- <v-card class="mb-5">
          <v-card-title class="d-flex justify-space-between">
            Activities
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" icon>
                  <v-icon>more_vert</v-icon>
                </v-btn>
              </template>
              <v-list dense>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title @click="alert('awdaw')"
                    >{{ item.title }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-0">
            <v-list-item three-line>
              <v-list-item-avatar size="60">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Ashley Briggs</v-list-item-title>
                <v-list-item-subtitle>
                  <v-btn outlined small> Follow </v-btn>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
          </v-card-text>
        </v-card> -->
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss">
.imageGallery {
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  img {
    width: 100%;
  }
}
</style>
