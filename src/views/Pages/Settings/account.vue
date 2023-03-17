<script setup>
import { mdiCloudUpload, mdiHelpCircle, mdiOpenInNew } from "@mdi/js";
</script>

<template>
  <v-row>
    <v-col cols="12" md="4">
      <v-card border flat class="mb-3">
        <v-tooltip
          width="200"
          theme="light"
          location="bottom"
          content-class="text-center"
          text="For best results, use an image at least 128px by 128px in .jpg
            format"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              icon
              size="small"
              variant="text"
              style="position: absolute; top: 0; right: 0"
            >
              <v-icon :icon="mdiHelpCircle"></v-icon>
            </v-btn>
          </template>
        </v-tooltip>
        <v-card-text class="pb-0">
          <div class="text-center mb-3">
            <v-avatar size="128">
              <v-img
                src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
              ></v-img>
            </v-avatar>
          </div>
          <div></div>
        </v-card-text>
        <v-btn
          block
          rounded="0"
          variant="tonal"
          class="text-capitalize"
          color="primary"
        >
          <v-icon start :icon="mdiCloudUpload"></v-icon>
          Upload
        </v-btn>
      </v-card>
      <v-card border flat>
        <v-card-title>Download your data</v-card-title>
        <v-card-text>
          We believe one's personal data is personal.
          <br />
          <strong class="text-error"> It should not be for sale.</strong>
        </v-card-text>
        <v-btn block rounded="0" variant="tonal" class="text-capitalize">
          Download Data
          <v-icon end :icon="mdiOpenInNew"></v-icon>
        </v-btn>
      </v-card>
    </v-col>
    <v-col cols="12" md="8">
      <v-card border flat>
        <v-card-text class="pb-0">
          <v-row>
            <v-col cols="12" md="6" class="pb-0">
              <v-text-field label="First Name"></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="pb-0">
              <v-text-field label="Last Name"></v-text-field>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-text-field label="Username"></v-text-field>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-textarea label="Biography"></v-textarea>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <v-text-field label="Phone Number"></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <v-text-field label="Email Address"></v-text-field>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-text-field label="Address"></v-text-field>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-text-field label="Address 2"></v-text-field>
            </v-col>
            <v-col cols="5" class="py-0">
              <v-text-field label="City"></v-text-field>
            </v-col>
            <v-col cols="4" class="py-0">
              <!-- :items="items" -->
              <v-select label="Province"></v-select>
            </v-col>
            <v-col cols="3" class="py-0">
              <v-text-field label="Zip Code"></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat variant="flat" class="text-capitalize px-10">
            Save Changes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <v-card-title>Danger Zone</v-card-title>
      <v-card flat border>
        <v-list lines="two" class="pa-0">
          <v-list-item>
            <v-list-item-title>Change Password</v-list-item-title>
            <v-list-item-subtitle>
              Changing Password uses sudo powers. Are you sure you want to
              unlock sudo?
            </v-list-item-subtitle>
            <template v-slot:append>
              <v-btn
                border
                color="error"
                variant="text"
                class="text-capitalize"
              >
                Change Password
              </v-btn>
            </template>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-title>Delete Account</v-list-item-title>
            <v-list-item-subtitle>
              Once you delete your account, there is no going back. Please be
              certain.
            </v-list-item-subtitle>
            <template v-slot:append>
              <v-btn
                border
                color="error"
                variant="text"
                class="text-capitalize"
              >
                Delete Account
              </v-btn>
            </template>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>
