<template>
  <div class="dashboardSocial">
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="py-0">
          <h1>Welcome back, John Doe!</h1>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
          <v-card>
            <v-card-text>
              <v-row>
                <v-col lg="1">
                  <v-avatar
                    ><v-img
                      src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                    ></v-img
                  ></v-avatar>
                </v-col>
                <v-col cols="12" lg="11">
                  <div class="text-h6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                  </div>
                  <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa aperiam magni tempore repellat mollitia repudiandae
                    ullam beatae esse inventore earum eos, reprehenderit ducimus
                    exercitationem eveniet molestiae placeat animi veniam
                    possimus.
                    <div class="imageGallery">
                      <v-avatar tile size="">
                        <v-img
                          src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                        ></v-img>
                      </v-avatar>
                      <v-avatar tile size="">
                        <v-img
                          src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                        ></v-img>
                      </v-avatar>
                    </div>
                  </div>
                  <v-card-actions class="px-0">
                    <v-btn color="primary" text small>
                      <v-icon class="mr-3">thumb_up</v-icon> Like</v-btn
                    >
                    <v-btn color="primary" text small>
                      <v-icon class="mr-3">comment</v-icon> Comment</v-btn
                    >
                    <v-btn color="primary" text small>
                      <v-icon class="mr-3">reply</v-icon>
                      Share</v-btn
                    >
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-text class="d-flex">
              <v-col class="py-0">
                <v-card-actions class="px-0"> </v-card-actions>
              </v-col>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
          <v-card class="pb-5 mb-5">
            <v-card-text class="text-center">
              <v-avatar size="150">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                ></v-img>
              </v-avatar>
            </v-card-text>
            <v-card-title class="justify-center">Chris Evans</v-card-title>
            <v-card-subtitle class="text-center">UX Engineer</v-card-subtitle>
            <v-card-actions class="d-flex justify-center">
              <v-btn color="primary" small>
                Follow
              </v-btn>
              <v-btn class="d-flex" color="primary" small>
                <v-icon small class="mr-2">mdi-message</v-icon>
                Message
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-card class="mb-5">
            <v-card-title class="d-flex justify-space-between">
              Following
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                </template>
                <v-list dense>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title @click="alert('awdaw')"
                      >{{ item.title }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-list-item three-line>
                <v-list-item-avatar size="60">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Ashley Briggs</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-btn outlined small>
                      Follow
                    </v-btn>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
            </v-card-text>
          </v-card>
          <v-card class="mb-5">
            <v-card-title class="d-flex justify-space-between">
              Activities
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                </template>
                <v-list dense>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title @click="alert('awdaw')"
                      >{{ item.title }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-list-item three-line>
                <v-list-item-avatar size="60">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Ashley Briggs</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-btn outlined small>
                      Follow
                    </v-btn>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "SocialDashboard",
  data() {
    return {
      items: [
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
      ],
    };
  },
};
</script>
<style lang="scss">
.imageGallery {
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  img {
    width: 100%;
  }
}
</style>
