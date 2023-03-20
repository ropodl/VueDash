<script setup>
import { mdiAttachment, mdiCallMade, mdiCircle } from "@mdi/js";
import { ref } from "vue";

let tab = ref(0);
let items = [
  {
    name: "Ashley Briggs",
    image: "https://appstack.bootlab.io/img/avatars/avatar-5.jpg",
    status: "Online",
    msgCount: 5,
    message: [
      {
        sender: "not-me",
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
    image: "https://appstack.bootlab.io/img/avatars/avatar-5.jpg",
    status: "Online",
    msgCount: 5,
  },
  {
    name: "John Doe",
    image: "https://appstack.bootlab.io/img/avatars/avatar-5.jpg",
    status: "Online",
    msgCount: 5,
  },
  {
    name: "Jimmy Doe",
    image: "https://appstack.bootlab.io/img/avatars/avatar-5.jpg",
    status: "Online",
    msgCount: 5,
  },
  {
    name: "Fillip Nas",
    image: "https://appstack.bootlab.io/img/avatars/avatar-5.jpg",
    status: "Online",
    msgCount: 5,
  },
];

const getStatus = (status) => {
  return status;
};
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Messages {{ tab }}</h1>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col cols="12" md="4">
            <v-card border flat>
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
                  <v-list bg-color="transparent" style="border: 1px solid">
                    <v-list-item
                      :prepend-avatar="item['image']"
                      :title="item['name']"
                    >
                      <v-list-item-subtitle>
                        <v-icon
                          start
                          :color="item['status'] == 'Online' ? 'green' : 'red'"
                          :icon="mdiCircle"
                        ></v-icon>
                        {{ item["status"] }}
                      </v-list-item-subtitle>
                    </v-list-item>
                  </v-list>
                </v-tab>
              </v-tabs>
            </v-card>
          </v-col>
          <v-col cols="12" md="8">
            <v-card border flat>
              <v-window v-model="tab" transition="none">
                <v-window-item v-for="(item, i) in items" :value="i">
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
                      <v-btn flat icon rounded="sm">
                        <v-icon :icon="mdiCallMade"></v-icon>
                      </v-btn>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text class="overflow-auto" style="height: 500px">
                      <div class="d-flex" v-for="(msg, i) in item['message']">
                        <template v-if="msg['sender'] !== 'me'">
                          <v-avatar class="mr-3">
                            <v-img :src="item['image']"></v-img>
                          </v-avatar>
                        </template>
                        <v-alert
                          rounded="pill"
                          color="primary"
                          class="mb-3"
                          :class="msg['sender'] == 'me' ? 'ml-auto' : 'mr-auto'"
                          max-width="70%"
                          density="compact"
                          style="width: max-content !important"
                        >
                          {{ msg["text"] }}
                        </v-alert>
                      </div>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text class="d-flex">
                      <v-btn icon class="mr-3">
                        <v-icon :icon="mdiAttachment"></v-icon>
                      </v-btn>
                      <v-text-field
                        class="mx-3"
                        density="comfortable"
                        hide-details
                        placeholder="Say hi"
                      ></v-text-field>
                      <v-btn icon class="mx-3">
                        <v-icon :icon="mdiAttachment"></v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon :icon="mdiAttachment"></v-icon>
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
<script>
export default {
  name: "Comments",
  // props: ["commentData", "msgError"],
  data() {
    return {
      commentData: [],
      msgError: "test",
      comment: "",
      time: "",
      error: this.msgError,
    };
  },
  watch: {
    commentData: function () {
      this.$nextTick(function () {
        this.scrollToEnd();
      });
    },
  },
  mounted() {
    // this.scrollToEnd();
  },
  methods: {
    scrollToEnd() {
      this.$vuetify.goTo(this.commentData.length != 0 ? "#last" : "#nothing", {
        container: "#scroll-target",
      });
    },
    sendData() {
      if (this.comment) {
        this.$emit("getResponse", this.comment);
        this.comment = "";
        this.error = this.msgError;
      } else return 0;
    },
  },
};
</script>
