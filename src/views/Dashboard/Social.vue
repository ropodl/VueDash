<script setup>
import { ref } from "vue";
import {
  mdiCheckboxMarkedCircle,
  mdiClose,
  mdiCommentOutline,
  mdiDotsHorizontal,
  mdiEarth,
  mdiMessage,
  mdiPlusCircle,
  mdiShareOutline,
  mdiStickerEmoji,
  mdiThumbUpOutline,
} from "@mdi/js";
import { useThemeMode } from "@/composable/isDark";

let dialog = ref(false);
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Welcome back, John Doe!</h1>
      </v-col>
      <v-col cols="12" md="8">
        <v-card flat border>
          <v-list class="pt-0">
            <v-list-item lines="three" class="pb-0">
              <template #prepend>
                <v-avatar>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                  ></v-img>
                </v-avatar>
              </template>
              <v-list-item-title class="d-flex align-center font-weight-bold">
                Asley Briggs <v-spacer></v-spacer>
                <span class="text-overline text-capitalize">5m ago</span>
              </v-list-item-title>
              <v-list-item-subtitle
                class="mb-3"
                style="-webkit-line-clamp: unset; line-height: 1.3em"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                aperiam magni tempore repellat mollitia repudiandae ullam beatae
                esse inventore earum eos, reprehenderit ducimus exercitationem
                eveniet molestiae placeat animi veniam possimus.
              </v-list-item-subtitle>
              <v-list-item-title class="mb-3">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-card flat>
                      <v-img
                        rounded="lg"
                        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                      ></v-img>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-card>
                      <v-img
                        rounded="lg"
                        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                      ></v-img>
                    </v-card>
                  </v-col>
                </v-row>
              </v-list-item-title>
              <v-divider class="mb-3"></v-divider>
              <v-list-item-action>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-btn block variant="text" class="mr-3 text-capitalize">
                      <v-icon start :icon="mdiThumbUpOutline"></v-icon> Like
                    </v-btn>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-dialog v-model="dialog" width="700" scrim="black">
                      <template v-slot:activator="{ props }">
                        <v-btn
                          block
                          variant="text"
                          class="mr-3 text-capitalize"
                          v-bind="props"
                        >
                          <v-icon start :icon="mdiCommentOutline"></v-icon>
                          Comment
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title class="d-flex align-center">
                          This is a test
                          <v-spacer></v-spacer>
                          <v-btn
                            icon
                            size="x-small"
                            variant="tonal"
                            @click="dialog = false"
                          >
                            <v-icon :icon="mdiClose"></v-icon>
                          </v-btn>
                        </v-card-title>
                        <v-divider></v-divider>
                        <div
                          style="height: calc(100% - 64px); overflow-y: scroll"
                        >
                          <v-list>
                            <v-list-item>
                              <template #prepend>
                                <v-avatar>
                                  <v-img
                                    src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                                  ></v-img>
                                </v-avatar>
                              </template>
                              <v-list-item-title>UserName</v-list-item-title>
                              <v-list-item-subtitle class="d-flex align-center">
                                12h
                                <span class="mx-1"> . </span>
                                <v-icon
                                  size="x-small"
                                  :icon="mdiEarth"
                                ></v-icon>
                              </v-list-item-subtitle>
                              <template #append>
                                <v-btn icon size="small" variant="text">
                                  <v-icon
                                    size="large"
                                    :icon="mdiDotsHorizontal"
                                  ></v-icon>
                                </v-btn>
                              </template>
                            </v-list-item>
                          </v-list>
                          <v-card-text class="pt-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </v-card-text>
                          <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                          ></v-img>
                        </div>
                        <v-card-actions class="d-flex align-start">
                          <v-avatar class="mr-3">
                            <v-img
                              src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                            ></v-img>
                          </v-avatar>
                          <v-text-field
                            class="comment-bar"
                            density="compact"
                            hint="Press Enter to Post"
                            persistent-hint
                            placeholder="Write a comment"
                          >
                            <template #append-inner>
                              <v-btn
                                icon
                                variant="tonal"
                                size="small"
                                :color="
                                  useThemeMode() ? 'white' : 'grey-darken-3'
                                "
                              >
                                <v-icon :icon="mdiStickerEmoji"></v-icon>
                              </v-btn>
                              <v-btn
                                icon
                                variant="tonal"
                                size="small"
                                :color="
                                  useThemeMode() ? 'white' : 'grey-darken-3'
                                "
                              >
                                <v-icon :icon="mdiStickerEmoji"></v-icon>
                              </v-btn>
                            </template>
                          </v-text-field>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
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
              <v-col class="pt-0" cols="6">
                <v-btn block border class="text-capitalize">
                  <v-icon start :icon="mdiPlusCircle"></v-icon>
                  Follow
                </v-btn>
              </v-col>
              <v-col class="pt-0" cols="6">
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
                    src="https://appstack.bootlab.io/img/avatars/avatar-2.jpg"
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
                    src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
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
                    src="https://appstack.bootlab.io/img/avatars/avatar-3.jpg"
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
                    src="https://appstack.bootlab.io/img/avatars/avatar-4.jpg"
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
                    src="https://appstack.bootlab.io/img/avatars/avatar-5.jpg"
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
<style lang="scss">
.comment-bar {
  .v-input__details {
    padding-inline-start: 0;
  }
  .v-field__append-inner {
    padding-top: 0;
  }
}
</style>
