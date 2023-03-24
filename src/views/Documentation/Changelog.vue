<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useTitle } from "@vueuse/core";
useTitle("Changelogs Page");

let commits = ref([]);

onMounted(() => {
  axios
    .get(
      "https://api.github.com/repos/ropodl/vueDash/commits?per_page=20&sha=master"
    )
    .then((res) => {
      commits.value = res.data;
      console.log(commits);
    });
});
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Changelog</h1>
      </v-col>
      <v-col cols="12">
        <v-card border flat class="mb-3" v-for="commit in commits">
          <v-list>
            <v-list-item>
              <template #prepend>
                <v-avatar size="60">
                  <v-img :src="commit.committer['avatar_url']"></v-img>
                </v-avatar>
              </template>
              <v-list-item-title
                ><a
                  :href="commit['html_url']"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ commit["sha"].slice(0, 7) }}
                </a>
                -
                {{ commit.commit["message"] }}
              </v-list-item-title>
              <v-list-item-subtitle>
                by
                <span class="author">
                  <a :href="commit.author.html_url" target="_blank">{{
                    commit.commit.author.name
                  }}</a>
                </span>
                at
                <span class="date">{{
                  new Date(commit.commit.author.date)
                }}</span>
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
