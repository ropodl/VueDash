<script setup>
import { reactive } from "vue";
import draggable from "vuedraggable";
import { mdiDotsHorizontal } from "@mdi/js";
import { useTitle } from "@vueuse/core";
useTitle("Tasks Page");

let enabled = true;
let list = reactive([
  { id: 0, name: "John" },
  { id: 1, name: "Joao" },
  { id: 2, name: "Jean" },
]);
let dragging = false;
let yest = reactive([]);

const checkMove = (e) => {
  window.console.log("Future index: " + e.draggedContext.futureIndex);
};

const add = () => {
  list.push({ name: "Juan " + id, id: id++ });
};
const replace = () => {
  list = [{ name: "Edgard", id: id++ }];
};
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Tasks</h1>
      </v-col>
      <v-col cols="12" md="4">
        <v-card border flat>
          <v-list>
            <v-list-item>
              <v-list-item-title>Upcoming</v-list-item-title>
              <v-list-item-subtitle>
                Nam pretium turpis et arcu. Duis arcu.
              </v-list-item-subtitle>
              <template #append>
                <v-btn icon variant="text" color="white" size="small">
                  <v-icon :icon="mdiDotsHorizontal"></v-icon>
                </v-btn>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card border flat>
          <v-list>
            <v-list-item>
              <v-list-item-title>In Progress</v-list-item-title>
              <v-list-item-subtitle>
                Nam pretium turpis et arcu. Duis arcu.
              </v-list-item-subtitle>
              <template #append>
                <v-btn icon variant="text" color="white" size="small">
                  <v-icon :icon="mdiDotsHorizontal"></v-icon>
                </v-btn>
              </template>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-card-text>
            <draggable
              :list="list"
              :disabled="!enabled"
              item-key="name"
              class="list-group"
              ghost-class="ghost"
              :move="checkMove"
              @start="dragging = true"
              @end="dragging = false"
            >
              <!-- <div
              class="list-group-item"
              :class="{ 'not-draggable': !enabled }"
            >
              {{ element.name }}
            </div> -->
              <template #item="{ element }">
                <v-card border flat class="mb-3">
                  <v-card-text>{{ element.name }}</v-card-text>
                </v-card>
              </template>
            </draggable>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card border flat>
          <v-list>
            <v-list-item>
              <v-list-item-title>Completed</v-list-item-title>
              <v-list-item-subtitle>
                Nam pretium turpis et arcu. Duis arcu.
              </v-list-item-subtitle>
              <template #append>
                <v-btn icon variant="text" color="white" size="small">
                  <v-icon :icon="mdiDotsHorizontal"></v-icon>
                </v-btn>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
