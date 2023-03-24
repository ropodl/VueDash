<script setup>
import { dependencies } from "../../../package.json";
import { useTitle } from "@vueuse/core";
useTitle("Introduction");
</script>
<template>
  <div class="introduction">
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="py-0">
          <h1>Introduction</h1>
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-card-title> Introduction </v-card-title>
            <v-card-text class="text-body-1">
              <p>
                Hello, I hope you find this template useful. VueDash has been
                crafted on top of vuetify and uses modern web technologies such
                as HTML5, CSS3 and Vue Js 3. The included docs don't replace the
                official ones, but provide a clear view of all extended styles
                and new components that this template provides on top of Vuetify
                {{ dependencies["vuetify"] }}.
              </p>
              <br />
              <p>
                The docs includes information to understand how the theme is
                organized, how to make changes to the source code, and how to
                compile and extend it to fit your needs. We care about our
                customers, so in case you have any questions or feedback, please
                don't hesistate to reach out via email or by filling out our
                contact form on our website.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" class="px-10">Get Started</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-card-title>Contents</v-card-title>
            <v-card-text>
              Inside the zip-file you'll find the following directories and
              files. Both compiled and minified distrubution files, as well as
              the source files are included in the package.
            </v-card-text>
            <!-- <v-card-text>
              <v-treeview
                v-model="tree"
                :open="open"
                :items="items"
                activatable
                item-key="name"
                open-on-click
              >
                <template v-slot:prepend="{ item, open }">
                  <v-icon v-if="!item.file">
                    {{ open ? "mdi-folder-open" : "mdi-folder" }}
                  </v-icon>
                  <v-icon v-else>
                    {{ files[item.file] }}
                  </v-icon>
                </template>
              </v-treeview>
            </v-card-text> -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Introduction",
  data() {
    return {
      open: ["public"],
      files: {
        html: "mdi-language-html5",
        js: "mdi-nodejs",
        json: "mdi-json",
        md: "mdi-markdown",
        pdf: "mdi-file-pdf",
        png: "mdi-file-image",
        txt: "mdi-file-document-outline",
        xls: "mdi-file-excel",
      },
      tree: [],
      items: [
        {
          name: ".git",
        },
        {
          name: "node_modules",
        },
        {
          name: "public",
          children: [
            {
              name: "static",
              children: [
                {
                  name: "logo.png",
                  file: "png",
                },
              ],
            },
            {
              name: "favicon.ico",
              file: "png",
            },
            {
              name: "index.html",
              file: "html",
            },
          ],
        },
        {
          name: ".gitignore",
          file: "txt",
        },
        {
          name: "babel.config.js",
          file: "js",
        },
        {
          name: "package.json",
          file: "json",
        },
        {
          name: "README.md",
          file: "md",
        },
        {
          name: "vue.config.js",
          file: "js",
        },
        {
          name: "yarn.lock",
          file: "txt",
        },
      ],
    };
  },
};
</script>
