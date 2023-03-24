<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Getting started</h1>
      </v-col>
      <v-col cols="12">
        <v-card border flat class="mb-3">
          <v-card-title>Installation</v-card-title>
          <v-card-text>
            <p>
              The theme includes a custom Webpack file, which can be used to
              quickly recompile and minify theme assets while developing or for
              deployment. You'll need to install Node.js before using Webpack.
            </p>
            <p>
              Once Node.js is installed, run <code>npm install</code> to install
              the rest of AppDash's dependencies. All dependencies will be
              downloaded to the <code>node_modules</code>
              directory.
            </p>
            <p>
              <kbd>npm install</kbd>
            </p>
            <p>
              Now you're ready to modify the source files and generate new dist/
              files. AppStack is using webpack and webpack-serve to
              automatically detect file changes and start a local webserver at
              http://localhost:8080.
            </p>
            <p>
              <kbd>npm start</kbd>
            </p>
          </v-card-text>
        </v-card>
        <v-card border flat>
          <v-card-title>Build Tools</v-card-title>
          <v-card-text>
            <p>
              Start a local webserver at <code>http://localhost:8080</code> and
              detect file changes:
            </p>
            <p>
              <kbd>npm start</kbd>
            </p>
            <p>
              Automatically detect file changes without starting a local
              webserver:
            </p>
            <p>
              <kbd>npm run serve</kbd>
            </p>
            <p>
              Compile, optimize, minify and uglify all source files to dist/:
            </p>
            <p>
              <kbd>npm run build</kbd>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
