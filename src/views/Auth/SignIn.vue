<template>
  <div class="signin h-100">
    <v-container fluid class="h-100">
      <v-row justify="center" class="h-100">
        <v-col cols="12" md="6" class="h-100">
          <div class="d-flex align-center justify-center h-100">
            <div>
              <v-card variant="text" class="mb-6">
                <v-card-title class="text-center text-h4"
                  >Welcome to VueDash</v-card-title
                >
                <v-card-subtitle class="text-center">
                  Sign in to your account to continue
                </v-card-subtitle>
              </v-card>
              <v-card border>
                <v-card-text class="pb-0">
                  <v-text-field placeholder="Email Address"></v-text-field>
                  <v-text-field placeholder="Password">
                    <template v-slot:details>
                      <router-link to="/signup">Forgot Password</router-link>
                    </template>
                  </v-text-field>
                  <v-checkbox
                    hide-details
                    color="primary"
                    label="Remember Me"
                  ></v-checkbox>
                </v-card-text>
                <v-btn block size="x-large" class="text-capitalize" rounded="0"
                  >Sign In</v-btn
                >
              </v-card>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
