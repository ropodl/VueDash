<script setup>
const clientsheader = [
  {
    text: "#",
    align: "center",
    value: "photo",
  },
  {
    text: "Name",
    align: "center",
    value: "name",
  },
  {
    text: "Company",
    align: "center",
    value: "company",
  },
  {
    text: "Email",
    align: "center",
    value: "email",
  },
  {
    text: "status",
    align: "end",
    value: "status",
  },
];
const clients = [
  {
    photo: "https://appstack.bootlab.io/img/avatars/avatar-3.jpg",
    name: "Angelica Ramos",
    company: "The Wiz",
    email: "angelica@ramos.com",
    status: "active",
  },
  {
    photo: "https://appstack.bootlab.io/img/avatars/avatar-3.jpg",
    name: "Angelica Ramos",
    company: "The Wiz",
    email: "angelica@ramos.com",
    status: "active",
  },
];
const descs = [
  {
    id: "1",
    text: "Name",
    detail: "Angelica Ramos",
  },
  {
    id: "2",
    text: "Company",
    detail: "The Wiz",
  },
  {
    id: "3",
    text: "Email",
    detail: "angelica@ramos.com",
  },
  {
    id: "4",
    text: "Phone",
    detail: "+1234123123123",
  },
  {
    id: "5",
    text: "Status",
    detail: "Active",
  },
];
const timelines = [
  {
    id: "1",
    title: "Signed Out",
    time: "35m ago",
    text: "Nam pretium turpis et arcu. Duis arcu tortor, suscipit... ",
  },
  {
    id: "2",
    title: "Created invoice #1204",
    time: "2h ago",
    text: "Sed aliquam ultrices mauris. Integer ante arcu... ",
  },
  {
    id: "3",
    title: "Discarded invoice #1147",
    time: "3h ago",
    text: "Nam pretium turpis et arcu. Duis arcu tortor, suscipit... ",
  },
  {
    id: "4",
    title: "Signed In",
    time: "3h ago",
    text: "Curabitur ligula sapien, tincidunt non, euismod vitae... ",
  },
  {
    id: "5",
    title: "Signed Up",
    time: "2d ago",
    text: "Sed aliquam ultrices mauris. Integer ante arcu... ",
  },
];
const items = [
  {
    title: "Action",
    route: "/",
  },
  {
    title: "Another Action",
    route: "/",
  },
  {
    title: "Something else here",
    route: "/",
  },
];
</script>
<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="py-0">
        <h1>Clients</h1>
      </v-col>
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>Clients</v-card-title>
          <v-divider></v-divider>
          <v-data-table :headers="clientsheader" :items="clients">
            <template v-slot:item.photo="{ item }">
              <v-avatar class="my-2">
                <v-img :src="item.photo"></v-img>
              </v-avatar>
            </template>
            <template v-slot:item.status="{ item }">
              <v-chip color="success" small>{{ item.status }}</v-chip>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
        <v-card>
          <v-card-title>Angelica Ramos</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="d-flex justify-center">
            <v-avatar size="150">
              <v-img
                src="https://appstack.bootlab.io/img/avatars/avatar-3.jpg"
              ></v-img>
            </v-avatar>
          </v-card-text>
          <v-card-subtitle class="font-weight-bold pb-0"
            >About me</v-card-subtitle
          >
          <v-card-text class="py-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>
          <v-card-text class="px-0 pb-0">
            <v-simple-table>
              <template v-slot:default>
                <tbody>
                  <tr v-for="desc in descs" :key="desc.id">
                    <td>{{ desc.text }}</td>
                    <td>{{ desc.detail }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-subtitle>Activity</v-card-subtitle>
          <v-card-text class="py-0">
            <v-timeline direction="vertical">
              <v-timeline-item class="ma-0 pa-0" v-for="timeline in timelines">
                <v-list>
                  <v-list-item>
                    <v-list-item-title>
                      {{ timeline["title"] }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ timeline["text"] }}
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>
                <!-- <v-card flat class="pa-0 ma-0">
                  <v-card-title
                    class="d-flex justify-space-between pl-0 py-0 ma-0"
                  >
                    <span class="body-1"> </span>
                    <span class="overline">
                      {{ timeline.time }}
                    </span>
                  </v-card-title>
                  <v-card-text class="pl-0">
                    {{ timeline.text }}
                  </v-card-text>
                </v-card> -->
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
