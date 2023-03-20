<script setup>
import { ref } from "vue";
import {
  mdiImage,
  mdiFileGifBox,
  mdiEmoticonHappyOutline,
  mdiDotsHorizontal,
  mdiInformation,
  mdiMessageVideo,
  mdiPhone,
  mdiPlusCircle,
  mdiThumbUp,
  mdiStickerEmoji,
  mdiCircle,
  mdiReply,
  mdiMore,
} from "@mdi/js";

let tab = ref(0);
let items = [
  {
    name: "Ashley Briggs",
    image: "https://appstack.bootlab.io/img/avatars/avatar.jpg",
    status: "online",
    msgCount: 5,
    message: [
      {
        text: "Hello there I am text",
      },
      {
        sender: "me",
        text: "Hi",
      },
    ],
  },
  {
    name: "Tim Cooks",
    image: "https://appstack.bootlab.io/img/avatars/avatar-2.jpg",
    status: "Do not Disturb",
    msgCount: 0,
  },
  {
    name: "John Doe",
    image: "https://appstack.bootlab.io/img/avatars/avatar-3.jpg",
    status: "offline",
    msgCount: 2,
  },
  {
    name: "Jimmy Doe",
    image: "https://appstack.bootlab.io/img/avatars/avatar-4.jpg",
    status: "online",
    msgCount: 0,
  },
  {
    name: "Fillip Nas",
    image: "https://appstack.bootlab.io/img/avatars/avatar-5.jpg",
    status: "online",
    msgCount: 0,
  },
];

const getStatus = (status) => {
  if (status == "online") {
    return "green";
  } else if (status == "Do not Disturb") {
    return "error";
  } else return "grey-darken-3";
};
const isMe = (sender) => {
  return sender == "me" ? true : false;
};
const test = (i) => {
  alert("test" + i);
};
</script>
<template>
  <v-container class="chat-page">
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Messages {{ tab }}</h1>
      </v-col>
      <v-col cols="12">
        <v-row no-gutters>
          <v-col cols="12" md="4">
            <v-card
              border
              flat
              class="h-100 border-e-0 rounded-te-0 rounded-be-0"
            >
              <v-card-text>
                <v-text-field
                  density="compact"
                  hide-details
                  placeholder="Search"
                ></v-text-field>
              </v-card-text>
              <v-divider></v-divider>
              <v-tabs v-model="tab" direction="vertical" color="primary">
                <v-tab
                  block
                  v-for="(item, i) in items"
                  :value="i"
                  height="auto"
                  class="text-capitalize px-0"
                >
                  <v-list
                    density="compact"
                    bg-color="transparent"
                    class="w-100"
                  >
                    <v-hover v-slot="{ isHovering, props }">
                      <v-list-item v-bind="props">
                        <template #prepend>
                          <v-avatar size="50">
                            <v-img :src="item['image']"></v-img>
                          </v-avatar>
                        </template>
                        <v-list-item-title class="d-flex">
                          {{ item["name"] }}
                        </v-list-item-title>
                        <v-list-item-subtitle
                          class="d-flex align-center text-capitalize"
                        >
                          <v-icon
                            start
                            :color="getStatus(item['status'])"
                            :icon="mdiCircle"
                          ></v-icon>
                          {{ item["status"] }}
                        </v-list-item-subtitle>
                        <template #append>
                          <template v-if="isHovering">
                            <v-btn
                              icon
                              size="small"
                              variant="tonal"
                              class="mr-3"
                              @click.stop="test(i)"
                            >
                              <v-icon :icon="mdiDotsHorizontal"></v-icon>
                            </v-btn>
                          </template>
                          <template v-if="item['msgCount']">
                            <v-chip
                              variant="flat"
                              density="compact"
                              color="green"
                              v-text="item['msgCount']"
                            ></v-chip>
                          </template>
                        </template>
                      </v-list-item>
                    </v-hover>
                  </v-list>
                </v-tab>
              </v-tabs>
            </v-card>
          </v-col>
          <v-col cols="12" md="8">
            <v-card border flat class="rounded-ts-0 rounded-bs-0">
              <v-window v-model="tab">
                <v-window-item
                  transition="none"
                  v-for="(item, i) in items"
                  :value="i"
                >
                  <v-card flat>
                    <v-card-text class="d-flex align-center py-0 pl-0">
                      <v-list>
                        <v-list-item
                          :prepend-avatar="item['image']"
                          :title="item['name']"
                          :subtitle="'Typing...'"
                        ></v-list-item>
                      </v-list>
                      <v-spacer> </v-spacer>
                      <v-btn flat icon variant="text">
                        <v-icon :icon="mdiPhone"></v-icon>
                      </v-btn>
                      <v-btn flat icon variant="text">
                        <v-icon :icon="mdiMessageVideo"></v-icon>
                      </v-btn>
                      <v-btn flat icon variant="text">
                        <v-icon :icon="mdiInformation"></v-icon>
                      </v-btn>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text class="overflow-auto" style="height: 500px">
                      <template v-for="msg in item['message']">
                        <v-hover v-slot="{ isHovering, props }">
                          <div
                            v-bind="props"
                            class="d-inline-flex align-center mb-3 justify-start w-100"
                            :class="
                              isMe(msg['sender']) ? 'flex-row-reverse' : ''
                            "
                          >
                            <template v-if="msg['sender'] !== 'me'">
                              <v-avatar class="mr-3">
                                <v-img :src="item['image']"></v-img>
                              </v-avatar>
                            </template>
                            <v-card
                              flat
                              rounded="pill"
                              :color="
                                isMe(msg['sender'])
                                  ? 'primary'
                                  : 'grey-darken-3'
                              "
                              density="compact"
                            >
                              <v-card-text>
                                {{ msg["text"] }}
                              </v-card-text>
                            </v-card>
                            <template v-if="isHovering">
                              <v-btn icon size="small" variant="text">
                                <v-icon
                                  :icon="mdiEmoticonHappyOutline"
                                ></v-icon>
                              </v-btn>
                              <v-btn icon size="small" variant="text">
                                <v-icon :icon="mdiReply"></v-icon>
                              </v-btn>
                              <v-btn icon size="small" variant="text">
                                <v-icon :icon="mdiDotsHorizontal"></v-icon>
                              </v-btn>
                            </template>
                          </div>
                        </v-hover>
                      </template>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text class="d-flex">
                      <v-btn icon variant="tonal" size="small" class="mr-1">
                        <v-icon :icon="mdiPlusCircle"></v-icon>
                      </v-btn>
                      <v-btn icon variant="tonal" size="small" class="mr-1">
                        <v-icon :icon="mdiImage"></v-icon>
                      </v-btn>
                      <v-btn icon variant="tonal" size="small" class="mr-1">
                        <v-icon :icon="mdiStickerEmoji"></v-icon>
                      </v-btn>
                      <v-btn icon variant="tonal" size="small" class="mr-1">
                        <v-icon :icon="mdiFileGifBox"></v-icon>
                      </v-btn>
                      <v-text-field
                        hide-details
                        color="white"
                        class="mx-3 border-0"
                        density="compact"
                        placeholder="Say hi"
                        :append-inner-icon="mdiEmoticonHappyOutline"
                        @click:append-inner="test"
                      ></v-text-field>
                      <v-btn icon variant="tonal" size="small" class="mr-1">
                        <v-icon :icon="mdiThumbUp"></v-icon>
                      </v-btn>
                    </v-card-text>
                  </v-card>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss">
.chat-page .v-tab .v-btn__content {
  width: 100% !important;
}
</style>
