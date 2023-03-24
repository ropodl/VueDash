<script setup>
import { ref } from "vue";
import { useTitle } from "@vueuse/core";
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
  mdiAccount,
  mdiMagnify,
  mdiBellCancel,
  mdiCloseCircle,
  mdiPin,
} from "@mdi/js";
useTitle("Chat Page");
let tab = ref(0);
let drawer = ref(false);

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
  <v-container fluid class="chat-page pa-0">
    <v-row no-gutters>
      <v-col cols="12" md="4" lg="4">
        <v-card flat rounded="0" class="h-100">
          <v-card-text style="height: 64px">
            <v-text-field
              density="compact"
              hide-details
              placeholder="Search"
            ></v-text-field>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text class="pa-0 chat-list-body">
            <v-tabs v-model="tab" direction="vertical" color="primary">
              <v-tab
                block
                mandatory
                v-for="(item, i) in items"
                :value="i"
                height="auto"
                class="text-capitalize px-0"
              >
                <v-list density="compact" bg-color="transparent" class="w-100">
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
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="8" lg="8">
        <v-card flat rounded="0" class="border-s">
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
                  <v-btn flat icon variant="text" @click="drawer = !drawer">
                    <v-icon :icon="mdiInformation"></v-icon>
                  </v-btn>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text class="overflow-auto chat-body">
                  <template v-for="msg in item['message']">
                    <v-hover v-slot="{ isHovering, props }">
                      <div
                        v-bind="props"
                        class="d-inline-flex align-center mb-3 justify-start w-100"
                        :class="isMe(msg['sender']) ? 'flex-row-reverse' : ''"
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
                            isMe(msg['sender']) ? 'primary' : 'grey-darken-3'
                          "
                          density="compact"
                        >
                          <v-card-text>
                            {{ msg["text"] }}
                          </v-card-text>
                        </v-card>
                        <template v-if="isHovering">
                          <v-btn icon size="small" variant="text">
                            <v-icon :icon="mdiEmoticonHappyOutline"></v-icon>
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
  </v-container>
  <v-navigation-drawer v-model="drawer" order="10" location="right">
    <v-card-text class="position-absolute d-flex w-100">
      <v-spacer></v-spacer>
      <v-btn icon variant="tonal" size="x-small" @click="drawer = false">
        <v-icon :icon="mdiCloseCircle"></v-icon>
      </v-btn>
    </v-card-text>
    <v-card-text class="text-center">
      <v-avatar size="100">
        <v-img src="https://appstack.bootlab.io/img/avatars/avatar.jpg"></v-img>
      </v-avatar>
    </v-card-text>
    <v-card-text class="text-center text-h6 font-weight-bold">
      {{ items[tab].name }}
    </v-card-text>
    <v-card-text class="d-flex align-center justify-space-between">
      <v-btn
        icon
        stacked
        class="text-capitalize"
        variant="tonal"
        size="x-small"
        title="test"
      >
        <v-icon :icon="mdiAccount"></v-icon>
        Profile
      </v-btn>
      <v-btn
        icon
        stacked
        class="text-capitalize"
        variant="tonal"
        size="x-small"
      >
        <v-icon :icon="mdiBellCancel"></v-icon>
        Mute
      </v-btn>
      <v-btn
        icon
        stacked
        class="text-capitalize"
        variant="tonal"
        size="x-small"
      >
        <v-icon :icon="mdiMagnify"></v-icon>
        Search
      </v-btn>
    </v-card-text>
    <v-divider></v-divider>
    <v-expansion-panels variant="accordion" multiple>
      <v-expansion-panel rounded="0" elevation="0" content-class="pa-0">
        <v-expansion-panel-title>Chat Info</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-btn
            block
            height="50"
            rounded="0"
            variant="text"
            class="text-capitalize"
          >
            <v-icon start :icon="mdiPin"></v-icon> View Pinned Messages
          </v-btn>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel elevation="0">
        <v-expansion-panel-title>Customize Chat</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-btn block rounded="0" variant="text" class="text-capitalize">
            Change Theme
          </v-btn>
          <v-btn block rounded="0" variant="text" class="text-capitalize">
            Change Emoji
          </v-btn>
          <v-btn block rounded="0" variant="text" class="text-capitalize">
            Edit Nicknames
          </v-btn>
          <v-btn block rounded="0" variant="text" class="text-capitalize">
            Search in Conversation
          </v-btn>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel elevation="0">
        <v-expansion-panel-title>Test</v-expansion-panel-title>
      </v-expansion-panel>
      <v-expansion-panel elevation="0">
        <v-expansion-panel-title>Test</v-expansion-panel-title>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-divider></v-divider>
  </v-navigation-drawer>
</template>
<style lang="scss">
.chat-page {
  .v-tab .v-btn__content {
    width: 100% !important;
  }
  .chat-list-body {
    height: calc(100vh - 162px);
    overflow-y: scroll;
  }
  .chat-body {
    height: calc(100vh - 235px);
  }
}
</style>
<script>
export default {
  data() {
    return {
      items: [
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
        {
          name: "Fillip Nas",
          image: "https://appstack.bootlab.io/img/avatars/avatar-5.jpg",
          status: "online",
          msgCount: 0,
        },
        {
          name: "Fillip Nas",
          image: "https://appstack.bootlab.io/img/avatars/avatar-5.jpg",
          status: "online",
          msgCount: 0,
        },
        {
          name: "Fillip Nas",
          image: "https://appstack.bootlab.io/img/avatars/avatar-5.jpg",
          status: "online",
          msgCount: 0,
        },
        {
          name: "Fillip Nas",
          image: "https://appstack.bootlab.io/img/avatars/avatar-5.jpg",
          status: "online",
          msgCount: 0,
        },
        {
          name: "Fillip Nas",
          image: "https://appstack.bootlab.io/img/avatars/avatar-5.jpg",
          status: "online",
          msgCount: 0,
        },
        {
          name: "Fillip Nas",
          image: "https://appstack.bootlab.io/img/avatars/avatar-5.jpg",
          status: "online",
          msgCount: 0,
        },
      ],
    };
  },
};
</script>
