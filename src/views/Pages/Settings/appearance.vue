<script setup>
let language = [
  { title: "English", abbr: "en" },
  { title: "Nepali", abbr: "np" },
];
</script>
<template>
  <v-card border flat>
    <v-list lines="three" density="default" class="py-0">
      <v-list-item value="widgets">
        <v-list-item-title>Dark Mode</v-list-item-title>
        <v-list-item-subtitle>
          Automatically add home screen widgets when downloads complete
        </v-list-item-subtitle>
        <template v-slot:append="{ isActive }">
          <v-list-item-action start>
            <v-switch :model-value="isActive" hide-details></v-switch>
          </v-list-item-action>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>Primary Color</v-list-item-title>
        <v-list-item-subtitle>
          What is your favourite color?
        </v-list-item-subtitle>
        <template v-slot:append>
          <!-- <v-list-item-action start> -->
          <v-text-field
            hide-details
            density="compact"
            style="width: 180px"
          ></v-text-field>
          <!-- </v-list-item-action> -->
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>Primary Language</v-list-item-title>
        <v-list-item-subtitle>
          What is your favourite language?
        </v-list-item-subtitle>
        <template v-slot:append>
          <!-- <v-list-item-action start> -->
          <v-select
            item-value="Nepali"
            :items="language"
            hide-details
            density="compact"
            style="width: 180px"
          ></v-select>
          <!-- </v-list-item-action> -->
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>
