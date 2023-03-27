<script setup>
import { useTitle } from "@vueuse/core";
useTitle("General Example Page");
const items = [
  {
    title: "Dashboard",
    disabled: false,
    href: "breadcrumbs_dashboard",
  },
  {
    title: "Link 1",
    disabled: false,
    href: "breadcrumbs_link_1",
  },
  {
    title: "Link 2",
    disabled: true,
    href: "breadcrumbs_link_2",
  },
];

let badges = [
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
        <h1>General</h1>
      </v-col>
      <v-col cols="12" md="6">
        <v-card border flat title="Accordion" class="mb-3">
          <v-card-text class="px-0 pb-0">
            <v-expansion-panels elevation="0" variant="accordion">
              <v-expansion-panel
                v-for="i in 5"
                :key="i"
                :title="'Accordion ' + i"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
              ></v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
        <v-card border flat title="Breadcrumb" class="mb-3">
          <v-card-text class="px-0">
            <v-breadcrumbs density="compact" :items="items"></v-breadcrumbs>
            <v-breadcrumbs
              density="compact"
              :items="items"
              divider="-"
            ></v-breadcrumbs>
          </v-card-text>
        </v-card>
        <v-card border flat title="Images" class="mb-3">
          <v-card-text class="d-flex justify-space-between">
            <v-avatar size="150">
              <v-img
                eager
                src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
              ></v-img>
            </v-avatar>
            <v-avatar size="150" style="border: 5px solid #3d3d3d">
              <v-img
                eager
                src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
              ></v-img>
            </v-avatar>
            <v-avatar rounded="0" size="150">
              <v-img
                eager
                src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
              ></v-img>
            </v-avatar>
          </v-card-text>
        </v-card>
        <v-card border flat title="Tooltip">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="3">
                <v-btn block class="text-capitalize">
                  Start
                  <v-tooltip activator="parent" location="start"
                    >Tooltip</v-tooltip
                  >
                </v-btn>
              </v-col>
              <v-col cols="12" md="3">
                <v-btn block class="text-capitalize">
                  End
                  <v-tooltip activator="parent" location="end"
                    >Tooltip</v-tooltip
                  >
                </v-btn>
              </v-col>
              <v-col cols="12" md="3">
                <v-btn block class="text-capitalize">
                  Top
                  <v-tooltip activator="parent" location="top"
                    >Tooltip</v-tooltip
                  >
                </v-btn>
              </v-col>
              <v-col cols="12" md="3">
                <v-btn block class="text-capitalize">
                  Bottom
                  <v-tooltip activator="parent" location="bottom">
                    Tooltip
                  </v-tooltip>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card border flat title="Badges" class="mb-3">
          <v-card-text>
            <v-badge
              inline
              rounded="0"
              v-for="badge in badges"
              :color="badge['color']"
              :content="badge['color']"
              class="mb-3"
            ></v-badge>
          </v-card-text>
          <v-card-text class="pt-0">
            <v-badge
              inline
              v-for="badge in badges"
              :color="badge['color']"
              :content="badge['color']"
            ></v-badge>
          </v-card-text>
        </v-card>
        <v-card border flat title="Pagination" class="mb-3">
          <v-card-text>
            <v-pagination
              class="mb-3"
              density="compact"
              :length="6"
              active-color="primary"
            ></v-pagination>
            <v-pagination
              class="mb-3"
              rounded="circle"
              density="comfortable"
              :length="6"
              active-color="primary"
            ></v-pagination>
            <v-pagination
              :length="6"
              rounded="0"
              active-color="primary"
            ></v-pagination>
          </v-card-text>
        </v-card>
        <v-card border flat title="Progress Bar" class="mb-3">
          <v-card-text>
            Default
            <v-progress-linear color="primary" class="mb-3" model-value="20">
            </v-progress-linear>
            Intermediate
            <v-progress-linear
              indeterminate
              color="primary"
              class="mb-3"
              model-value="20"
            >
            </v-progress-linear>
            Buffering
            <v-progress-linear
              stream
              class="mb-3"
              color="primary"
              model-value="40"
              buffer-value="60"
            ></v-progress-linear>
            Striped
            <v-progress-linear
              striped
              model-value="60"
              height="10"
              color="light-blue"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
        <v-card border flat title="Spinner">
          <v-card-text class="d-flex justify-space-between">
            <v-progress-circular
              width="5"
              indeterminate
              size="30"
              color="primary"
            ></v-progress-circular>
            <v-progress-circular
              width="5"
              indeterminate
              size="30"
              color="red"
            ></v-progress-circular>
            <v-progress-circular
              width="5"
              indeterminate
              size="30"
              color="purple"
            ></v-progress-circular>
            <v-progress-circular
              width="5"
              indeterminate
              size="30"
              color="green"
            ></v-progress-circular>
            <v-progress-circular
              width="5"
              indeterminate
              size="30"
              color="amber"
            ></v-progress-circular>
          </v-card-text>
          <v-card-text class="d-flex justify-space-between">
            <v-progress-circular
              width="10"
              indeterminate
              size="60"
              color="primary"
            ></v-progress-circular>
            <v-progress-circular
              width="10"
              indeterminate
              size="60"
              color="red"
            ></v-progress-circular>
            <v-progress-circular
              width="10"
              indeterminate
              size="60"
              color="purple"
            ></v-progress-circular>
            <v-progress-circular
              width="10"
              indeterminate
              size="60"
              color="green"
            ></v-progress-circular>
            <v-progress-circular
              width="10"
              indeterminate
              size="60"
              color="amber"
            ></v-progress-circular>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "general",
  data() {
    return {};
  },
};
</script>
<style></style>
