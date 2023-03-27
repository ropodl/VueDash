<script setup>
import { ref, reactive } from "vue";
import { useTitle } from "@vueuse/core";
useTitle("Modals Example Page");

let normal = reactive({});
let colored = reactive({});
let centered = reactive({});
let size = reactive({});

let colors = [
  {
    color: "primary",
  },
  {
    color: "secondary",
  },
  {
    color: "success",
  },
  {
    color: "error",
  },
  {
    color: "warning",
  },
  {
    color: "info",
  },
];
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Modals</h1>
      </v-col>
      <v-col cols="12" md="6">
        <v-card border flat title="Default Modal">
          <v-card-text>
            <v-dialog
              v-for="(color, i) in colors"
              v-model="normal[i]"
              scrim="black"
              width="auto"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  class="text-capitalize mr-3 mb-3"
                  :color="color['color']"
                  v-bind="props"
                >
                  {{ color["color"] }}
                </v-btn>
              </template>
              <v-card
                border
                flat
                title="Default Modal"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              >
                <v-row no-gutters>
                  <v-col cols="6">
                    <v-btn
                      block
                      rounded="0"
                      class="text-capitalize"
                      color="error"
                      height="50"
                      @click="normal[i] = false"
                    >
                      Close
                    </v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      block
                      rounded="0"
                      class="text-capitalize"
                      height="50"
                      :color="color['color']"
                      @click="normal[i] = false"
                    >
                      Save Changes
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-dialog>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card border flat title="Colored Modal">
          <v-card-text>
            <v-dialog
              v-for="(color, i) in colors"
              v-model="colored[i]"
              scrim="black"
              width="auto"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  class="text-capitalize mr-3 mb-3"
                  :color="color['color']"
                  v-bind="props"
                >
                  {{ color["color"] }}
                </v-btn>
              </template>
              <v-card
                border
                flat
                :color="color['color']"
                title="Default Modal"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              >
                <v-row no-gutters>
                  <v-col cols="6">
                    <v-btn
                      block
                      rounded="0"
                      class="text-capitalize"
                      color="error"
                      height="50"
                      @click="colored[i] = false"
                    >
                      Close
                    </v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      block
                      rounded="0"
                      class="text-capitalize"
                      height="50"
                      color="black"
                      @click="colored[i] = false"
                    >
                      Save Changes
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-dialog>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card border flat title="Modal Sizes">
          <v-card-text>
            <v-dialog v-model="size['sm']" scrim="black" width="300">
              <template v-slot:activator="{ props }">
                <v-btn class="text-capitalize mr-3" v-bind="props">
                  Small
                </v-btn>
              </template>
              <v-card
                border
                flat
                title="Default Modal"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              >
                <v-row no-gutters>
                  <v-col cols="6">
                    <v-btn
                      block
                      rounded="0"
                      class="text-capitalize"
                      color="error"
                      height="50"
                      @click="size['sm'] = false"
                    >
                      Close
                    </v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      block
                      rounded="0"
                      class="text-capitalize"
                      height="50"
                      color="black"
                      @click="size['sm'] = false"
                    >
                      Save Changes
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-dialog>
            <v-dialog v-model="size['md']" scrim="black" width="500">
              <template v-slot:activator="{ props }">
                <v-btn class="text-capitalize mr-3" v-bind="props">
                  Medium
                </v-btn>
              </template>
              <v-card
                border
                flat
                title="Default Modal"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              >
                <v-row no-gutters>
                  <v-col cols="6">
                    <v-btn
                      block
                      rounded="0"
                      class="text-capitalize"
                      color="error"
                      height="50"
                      @click="size['md'] = false"
                    >
                      Close
                    </v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      block
                      rounded="0"
                      class="text-capitalize"
                      height="50"
                      color="black"
                      @click="size['md'] = false"
                    >
                      Save Changes
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-dialog>
            <v-dialog v-model="size['lg']" scrim="black" width="800">
              <template v-slot:activator="{ props }">
                <v-btn class="text-capitalize mr-3" v-bind="props">
                  Large
                </v-btn>
              </template>
              <v-card
                border
                flat
                title="Default Modal"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              >
                <v-row no-gutters>
                  <v-col cols="6">
                    <v-btn
                      block
                      rounded="0"
                      class="text-capitalize"
                      color="error"
                      height="50"
                      @click="size['lg'] = false"
                    >
                      Close
                    </v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      block
                      rounded="0"
                      class="text-capitalize"
                      height="50"
                      color="black"
                      @click="size['lg'] = false"
                    >
                      Save Changes
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-dialog>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
