<script setup>
import {
  mdiCheckboxMarkedCircle,
  mdiCommentOutline,
  mdiMessage,
  mdiPlusCircle,
  mdiShareOutline,
  mdiThumbUp,
  mdiThumbUpOutline,
} from "@mdi/js";
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Welcome back, John Doe!</h1>
      </v-col>
      <v-col cols="12" md="8">
        <v-card flat border>
          <v-list>
            <v-list-item lines="three">
              <template #prepend>
                <v-avatar>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                  ></v-img>
                </v-avatar>
              </template>
              <v-list-item-title>Asley Briggs</v-list-item-title>
              <v-list-item-subtitle class="mb-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                aperiam magni tempore repellat mollitia repudiandae ullam beatae
                esse inventore earum eos, reprehenderit ducimus exercitationem
                eveniet molestiae placeat animi veniam possimus.
              </v-list-item-subtitle>
              <v-list-item-title class="mb-3">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-img
                      rounded="lg"
                      src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-img
                      rounded="lg"
                      src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-list-item-title>
              <v-list-item-action>
                <v-row>
                  <v-col cols="12" md="4">
                    
                    <v-badge inline content="10">
                      <v-btn block variant="text" class="mr-3 text-capitalize">
                        <v-icon start :icon="mdiThumbUpOutline"></v-icon> Like
                      </v-btn>
                    </v-badge>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-btn block variant="text" class="mr-3 text-capitalize">
                      <v-icon start :icon="mdiCommentOutline"></v-icon> Comment
                    </v-btn>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-btn block variant="text" class="mr-3 text-capitalize">
                      <v-icon start :icon="mdiShareOutline"></v-icon> Share
                    </v-btn>
                  </v-col>
                </v-row>
              </v-list-item-action>
            </v-list-item>
          </v-list>
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
          <v-list>
            <v-list-item>
              <template v-slot:prepend>
                <v-avatar>
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
            <v-divider class="my-1"></v-divider>
            <v-list-item>
              <template v-slot:prepend>
                <v-avatar>
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
      </v-col>
    </v-row>
  </v-container>
</template>
