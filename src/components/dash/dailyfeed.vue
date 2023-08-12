<script setup>
let dailyfeed = [
  {
    avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
    title: "Brunch this weekend?",
    subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
  },
  { divider: true, inset: true },
  {
    avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
    title: "Summer BBQ",
    subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
  },
  { divider: true, inset: true },
  {
    avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
    title: "Oui oui",
    subtitle:
      '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  { divider: true, inset: true },
  {
    avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    title: "Birthday gift",
    subtitle:
      '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
  { divider: true, inset: true },
  {
    avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
    title: "Recipe to try",
    subtitle:
      '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
  },
];
</script>
<template>
  <v-card flat border class="mb-3">
    <v-card-title class="d-flex">
      Daily Feed <v-spacer></v-spacer>
      <v-chip color="info">Today</v-chip>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <v-list density="compact" lines="three">
        <template v-for="feed in dailyfeed">
          <v-divider v-if="feed.divider"></v-divider>
          <v-list-item v-else :key="feed.title">
            <template v-slot:prepend>
              <v-avatar size="60">
                <v-img :src="feed.avatar"></v-img>
              </v-avatar>
            </template>
            <v-list-item-title v-html="feed.title"></v-list-item-title>
            <v-list-item-subtitle v-html="feed.subtitle"></v-list-item-subtitle>
            <template v-slot:append>
              <span>3h ago</span>
            </template>
          </v-list-item>
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<style></style>
