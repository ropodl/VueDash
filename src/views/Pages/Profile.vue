<template>
    <div class="profile">
        <v-container fluid>
            <v-row>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                    <v-card>
                        <v-card-title>Profile Details</v-card-title>
                        <v-divider></v-divider>
                        <v-card-text class="text-center pb-0">
                            <v-avatar size="100">
                                <v-img src="https://appstack.bootlab.io/img/avatars/avatar-4.jpg"></v-img>
                            </v-avatar>
                            <v-card-title class="d-flex justify-center">Stacie Hall</v-card-title>
                            <v-card-subtitle>Lead Developer</v-card-subtitle>
                        </v-card-text>
                        <v-card-actions class="d-flex justify-center pt-0">
                            <v-btn small class="px-10" color="primary">Follow</v-btn>
                            <v-btn small class="px-10" color="primary">
                                <v-icon small class="mr-2">message</v-icon>
                                Message
                            </v-btn>
                        </v-card-actions>
                        <!-- <v-divider></v-divider> -->
                        <v-card-subtitle>Skills</v-card-subtitle>
                        <v-divider></v-divider>
                        <v-card-text class="px-0">
                            <v-btn small class="ml-2 mb-2" color="primary" v-for="skill in skills" :key="skill.id">
                                <v-icon class="mr-2" small>{{ skill.icon }}</v-icon>
                                {{ skill.name }}</v-btn>
                        </v-card-text>
                        <!-- <v-divider inset></v-divider> -->
                        <v-card-subtitle>About</v-card-subtitle>
                        <v-divider></v-divider>
                        <v-card-text>
                            <ul>
                                <li>
                                    <v-icon small>fa-home</v-icon>Lives in San Fransisco, SA
                                </li>
                                <li>
                                    <v-icon small>fa-briefcase</v-icon>Works at Github
                                </li>
                                <li>
                                    <v-icon small>fa-map-marker-alt</v-icon>From Boston
                                </li>
                            </ul>
                        </v-card-text>
                        <v-card-subtitle>Elsewhere</v-card-subtitle>
                        <v-divider></v-divider>
                        <v-card-text>
                            <ul>
                                <li>
                                    <v-icon small>fa-globe</v-icon>staciehall.co
                                </li>
                                <li>
                                    <v-icon small>fab fa-twitter</v-icon>Twitter
                                </li>
                                <li>
                                    <v-icon small>fab fa-facebook</v-icon>Facebook
                                </li>
                                <li>
                                    <v-icon small>fab fa-instagram</v-icon>Instagram
                                </li>
                                <li>
                                    <v-icon small>fab fa-linkedin</v-icon>LinkedIn
                                </li>
                            </ul>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
                    <v-card>
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
                        <v-card-text></v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    export default {
        name: 'Profile',
        data() {
            return {
                skills: [{
                    id: '1',
                    name: 'HTML',
                    icon: 'fab fa-html5'
                }, {
                    id: '2',
                    name: 'JavaScript',
                    icon: 'fab fa-js'
                }, {
                    id: '3',
                    name: 'Sass',
                    icon: 'fab fa-sass'
                }, {
                    id: '4',
                    name: 'Angular',
                    icon: 'fab fa-angular'
                }, {
                    id: '5',
                    name: 'Vue',
                    icon: 'fab fa-vuejs'
                }, {
                    id: '6',
                    name: 'React',
                    icon: 'fab fa-react'
                }, {
                    id: '7',
                    name: 'UI',
                    icon: 'fas fa-pencil-alt'
                }, {
                    id: '8',
                    name: 'UX',
                    icon: 'fas fa-pencil-alt'
                }],
                items: [{
                        title: 'Action',
                        route: '/'
                    },
                    {
                        title: 'Another Action',
                        route: '/'
                    },
                    {
                        title: 'Something else here',
                        route: '/'
                    }
                ]
            }
        }
    }
</script>
<style lang="scss">
    ul {
        list-style: none;
        padding-left: 0px !important;

        li {
            &:first-child {
                margin-top: 0px;
            }

            margin-top: 10px;

            i {
                margin-right: 10px;
            }
        }
    }
</style>