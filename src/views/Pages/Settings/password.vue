<template>
  <v-card border flat>
    <v-card-title>Password</v-card-title>
    <v-divider></v-divider>
    <v-card-text class="pb-0">
      <v-row>
        <v-col cols="12" class="pb-0">
          <v-text-field label="Current Password">
            <template v-slot:details>
              <router-link to="/reset-password">Forgot Password</router-link>
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-text-field label="New Password"></v-text-field>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-text-field label="Verify Password"></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="px-10" variant="flat">Save Changes</v-btn>
    </v-card-actions>
  </v-card>
</template>
