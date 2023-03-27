<script setup>
import { reactive } from "vue";
import draggable from "vuedraggable";
import { mdiDotsHorizontal, mdiDragVertical } from "@mdi/js";
import { useTitle } from "@vueuse/core";
useTitle("Tasks Page");

let enabled = true;
let list = reactive([
  { id: 0, name: "John" },
  { id: 1, name: "Joao" },
  { id: 2, name: "Jean" },
]);
let upcoming = reactive([
  {
    id: 0,
    title: "This is a upcoming task",
  },
  { id: 1, title: "This is a upcoming task" },
  {
    id: 2,
    title: "This is a upcoming task",
  },
]);
let progress = reactive([
  {
    id: 0,
    title: "This is a upcoming task",
  },
  { id: 1, title: "This is a upcoming task" },
  {
    id: 2,
    title: "This is a upcoming task",
  },
]);
let completed = reactive([
  {
    id: 0,
    title: "This is a upcoming task",
  },
  { id: 1, title: "This is a upcoming task" },
  {
    id: 2,
    title: "This is a upcoming task",
  },
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

const addItem = (parent) => {
  parent.push({
    id: parent.length,
    title: "This is a upcoming task",
  });
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
          <v-divider></v-divider>
          <v-card-text class="pb-0">
            <draggable
              :list="upcoming"
              item-key="name"
              class="list-group"
              ghost-class="ghost"
              :move="checkMove"
              @start="dragging = true"
              @end="dragging = false"
            >
              <template #item="{ element }">
                <v-card border flat class="mb-3">
                  <v-list-item>
                    <v-list-item-subtitle>
                      {{ element["title"] + " no: " + element["id"] }}
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-card>
              </template>
            </draggable>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
              block
              variant="flat"
              rounded="large"
              @click="addItem(upcoming)"
            >
              Add Items
            </v-btn>
          </v-card-actions>
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
          <v-card-text class="pb-0">
            <draggable
              :list="progress"
              item-key="name"
              class="list-group"
              ghost-class="ghost"
              :move="checkMove"
              @start="dragging = true"
              @end="dragging = false"
            >
              <template #item="{ element }">
                <v-card border flat class="mb-3">
                  <v-list-item>
                    <v-list-item-subtitle>
                      {{ element["title"] + " no: " + element["id"] }}
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-card>
              </template>
            </draggable>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
              block
              variant="flat"
              rounded="large"
              @click="addItem(progress)"
            >
              Add Items
            </v-btn>
          </v-card-actions>
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
          <v-divider></v-divider>
          <v-card-text class="pb-0">
            <draggable
              :list="completed"
              item-key="name"
              class="list-group"
              ghost-class="ghost"
              :move="checkMove"
              @start="dragging = true"
              @end="dragging = false"
            >
              <template #item="{ element }">
                <v-card border flat class="mb-3">
                  <v-list-item>
                    <v-list-item-subtitle>
                      {{ element["title"] + " no: " + element["id"] }}
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-card>
              </template>
            </draggable>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
              block
              variant="flat"
              rounded="large"
              @click="addItem(completed)"
            >
              Add Items
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss">
.ghost {
  border: 1px solid rgb(var(--v-theme-primary)) !important;
}
</style>
