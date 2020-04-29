<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="12" class="py-0">
                    <h1>Welcome back, John Doe!</h1>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
                    <v-card>
                        <v-card-text>
                            <v-row no-gutters>
                                <v-col cols="12" xs="12" sm="12" md="2" class="py-0">
                                    <v-avatar size="90">
                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"></v-img>
                                    </v-avatar>
                                </v-col>
                                <v-col cols="12" xs="12" sm="12" md="10" class="py-0">
                                    <v-card-title class="pa-0 d-flex align-center justify-space-between">
                                        <span class="headline">
                                            Ashley Briggs
                                        </span>
                                        <div class="overline">5m ago</div>
                                    </v-card-title>
                                    <v-card-text class="px-0">
                                        Mollitia ea dolor fugit necessitatibus quas cum
                                        tenetur magnam adipisci voluptates? Voluptatibus numquam ut nemo amet vitae
                                        libero dolores iusto accusantium cumque, atque enim odit facere dolore sint ipsa
                                        dolorum! Tempore nesciunt exercitationem iste debitis natus.
                                        <v-row>
                                            <v-col cols="12" md="6">
                                                <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg">
                                                </v-img>
                                            </v-col>
                                            <v-col cols="12" md="6">
                                                <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg">
                                                </v-img>
                                            </v-col>
                                        </v-row>
                                        <div class="overline">Today 7:51 am</div>
                                    </v-card-text>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                    <v-card class="pb-5 mb-5">
                        <v-card-text class="text-center">
                            <v-avatar size="150">
                                <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"></v-img>
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
                                        <v-list-item-title @click="alert('awdaw')">{{ item.title }}
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text class="pa-0">
                            <v-list-item three-line>
                                <v-list-item-avatar size="60">
                                    <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"></v-img>
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
                                        <v-list-item-title @click="alert('awdaw')">{{ item.title }}
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text class="pa-0">
                            <v-list-item three-line>
                                <v-list-item-avatar size="60">
                                    <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"></v-img>
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
        name: 'SocialDashboard',
        data() {
            return {
                items: [{
                    title: 'Action',
                    route: '/'
                }, {
                    title: 'Another Action',
                    route: '/'
                }, {
                    title: 'Something else here',
                    route: '/'
                }]
            }
        }
    }
</script>